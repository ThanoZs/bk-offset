import { useState, useRef } from "react";
import OrderReceipt from "./OrderReceipt";
import { useOrders } from "../../context/OrdersContext";
import "./PrintingPressOrder.css";

const bookTypes = [
  { id: "paperback", label: "Paperback" },
  { id: "hardcover", label: "Hardcover" },
  { id: "spiral", label: "Spiral Bound" },
  { id: "saddle", label: "Saddle Stitched" },
];

const laminationOptions = [
  { id: "none", label: "No Lamination", price: 0 },
  { id: "matte", label: "Matte Lamination", price: 2.5 },
  { id: "glossy", label: "Glossy Lamination", price: 2.5 },
  { id: "soft-touch", label: "Soft Touch", price: 3.0 },
];

const paperQualityOptions = [
  { id: "standard", label: "Standard (80gsm)", price: 0 },
  { id: "premium", label: "Premium (100gsm)", price: 0.5 },
  { id: "high-quality", label: "High Quality (120gsm)", price: 1.0 },
];

const bindingOptions = [
  { id: "perfect", label: "Perfect Binding" },
  { id: "case", label: "Case Binding" },
  { id: "saddle", label: "Saddle Stitch" },
  { id: "spiral", label: "Spiral" },
];

const ACCEPTED_TYPES = ".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.jpg,.jpeg,.png,.zip";
const FILE_ICONS = {
  pdf: "📄", doc: "📝", docx: "📝", ppt: "📊", pptx: "📊",
  xls: "📈", xlsx: "📈", jpg: "🖼️", jpeg: "🖼️", png: "🖼️", zip: "🗜️",
};

function getExt(name) { return name.split(".").pop().toLowerCase(); }
function fmtSize(bytes) {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / 1048576).toFixed(1) + " MB";
}

export default function PrintingPressOrder() {
  const { addOrder } = useOrders();
  
  const [order, setOrder] = useState({
    bookTitle: "", authorName: "", bookType: "paperback",
    quantity: 1, pageCount: 100, lamination: "none",
    coverType: "soft", paperQuality: "standard", printType: "bw",
    binding: "perfect", specialInstructions: "", deliveryDate: "",
  });
  const [errors, setErrors] = useState({});
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedOrder, setSubmittedOrder] = useState(null);
  const [showReceipt, setShowReceipt] = useState(false);
  const fileInputRef = useRef();

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setOrder(prev => ({ ...prev, [name]: type === "number" ? parseInt(value) || 0 : value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const addFiles = (incoming) => {
    const newFiles = Array.from(incoming).map(f => ({
      file: f, id: Math.random().toString(36).slice(2),
      name: f.name, size: f.size, ext: getExt(f.name),
    }));
    setFiles(prev => [...prev, ...newFiles]);
  };

  const handleDrop = (e) => {
    e.preventDefault(); setIsDragging(false);
    addFiles(e.dataTransfer.files);
  };

  const removeFile = (id) => setFiles(prev => prev.filter(f => f.id !== id));

  const calcPrice = () => {
    const base = 10;
    const pages = order.pageCount * 0.05;
    const lam = laminationOptions.find(o => o.id === order.lamination)?.price || 0;
    const paper = paperQualityOptions.find(o => o.id === order.paperQuality)?.price || 0;
    return ((base + pages + lam + paper) * order.quantity).toFixed(2);
  };

  const validate = () => {
    const e = {};
    if (!order.bookTitle.trim()) e.bookTitle = "Book title is required";
    if (!order.authorName.trim()) e.authorName = "Author name is required";
    if (order.quantity < 1) e.quantity = "Minimum quantity is 1";
    if (order.pageCount < 10) e.pageCount = "Minimum 10 pages";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1400));
    
    const receiptData = {
      ...order,
      files: files.map(f => f.name),
      total: calcPrice(),
      orderId: "BKO-" + Date.now().toString().slice(-6),
      orderDate: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
      timestamp: Date.now(),
      status: "processing",
    };
    
    // Save to orders context
    addOrder(receiptData);
    
    setSubmittedOrder(receiptData);
    setShowReceipt(true);
    setIsSubmitting(false);
  };

  if (showReceipt && submittedOrder) {
    return <OrderReceipt order={submittedOrder} onBack={() => setShowReceipt(false)} />;
  }

  return (
    <div className="print-order-page">
      <div className="print-order-blob1" />
      <div className="print-order-blob2" />
      <div className="print-order-blob3" />

      <div className="print-order-wrapper">
        {/* Header */}
        <div className="print-order-header">
          <div className="print-order-badge">✦ Premium Printing Services</div>
          <h1 className="print-order-title">
            Place Your <span className="print-order-title-accent">Print Order.</span>
          </h1>
          <p className="print-order-subtitle">Trusted printing & finishing services · BK Offset, Delhi</p>
        </div>

        <form onSubmit={handleSubmit} className="print-order-form">

          {/* ── Book Information ── */}
          <FormSection title="Book Information" icon="📚">
            <div className="form-row-2">
              <FormField label="Book Title *" error={errors.bookTitle}>
                <input name="bookTitle" value={order.bookTitle} onChange={handleChange}
                  placeholder="Enter book title" className={`form-input ${errors.bookTitle ? 'form-input-error' : ''}`} />
              </FormField>
              <FormField label="Author Name *" error={errors.authorName}>
                <input name="authorName" value={order.authorName} onChange={handleChange}
                  placeholder="Enter author name" className={`form-input ${errors.authorName ? 'form-input-error' : ''}`} />
              </FormField>
            </div>
            <div className="form-row-2">
              <FormField label="Book Type">
                <select name="bookType" value={order.bookType} onChange={handleChange} className="form-input">
                  {bookTypes.map(t => <option key={t.id} value={t.id}>{t.label}</option>)}
                </select>
              </FormField>
              <FormField label="Quantity *" error={errors.quantity}>
                <input type="number" name="quantity" min="1" max="10000"
                  value={order.quantity} onChange={handleChange} 
                  className={`form-input ${errors.quantity ? 'form-input-error' : ''}`} />
              </FormField>
            </div>
            <div className="form-row-2">
              <FormField label="Page Count" error={errors.pageCount}>
                <input type="number" name="pageCount" min="10" max="1000"
                  value={order.pageCount} onChange={handleChange} 
                  className={`form-input ${errors.pageCount ? 'form-input-error' : ''}`} />
              </FormField>
              <FormField label="Paper Quality">
                <select name="paperQuality" value={order.paperQuality} onChange={handleChange} className="form-input">
                  {paperQualityOptions.map(o => (
                    <option key={o.id} value={o.id}>{o.label}{o.price > 0 ? ` (+₹${o.price})` : ""}</option>
                  ))}
                </select>
              </FormField>
            </div>
          </FormSection>

          {/* ── Lamination ── */}
          <FormSection title="Lamination Options" icon="✨">
            <div className="radio-grid">
              {laminationOptions.map(opt => (
                <label key={opt.id} className={`radio-card ${order.lamination === opt.id ? 'radio-card-selected' : ''}`}>
                  <input type="radio" name="lamination" value={opt.id}
                    checked={order.lamination === opt.id} onChange={handleChange}
                    className="radio-input" />
                  <div>
                    <div className="radio-title">{opt.label}</div>
                    {opt.price > 0 && <div className="radio-price">+₹{opt.price}/copy</div>}
                  </div>
                </label>
              ))}
            </div>
          </FormSection>

          {/* ── Additional Options ── */}
          <FormSection title="Print & Binding Options" icon="🖨️">
            <div className="form-row-2">
              <FormField label="Binding Type">
                <select name="binding" value={order.binding} onChange={handleChange} className="form-input">
                  {bindingOptions.map(o => <option key={o.id} value={o.id}>{o.label}</option>)}
                </select>
              </FormField>
              <FormField label="Print Type">
                <select name="printType" value={order.printType} onChange={handleChange} className="form-input">
                  <option value="bw">Black & White</option>
                  <option value="color">Full Color</option>
                  <option value="spot">Spot Color</option>
                </select>
              </FormField>
            </div>
            <div className="form-row-2">
              <FormField label="Cover Type">
                <select name="coverType" value={order.coverType} onChange={handleChange} className="form-input">
                  <option value="soft">Soft Cover</option>
                  <option value="hard">Hard Cover</option>
                </select>
              </FormField>
              <FormField label="Required Delivery Date">
                <input type="date" name="deliveryDate" value={order.deliveryDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]} className="form-input" />
              </FormField>
            </div>
            <FormField label="Special Instructions">
              <textarea name="specialInstructions" value={order.specialInstructions}
                onChange={handleChange} rows={3}
                placeholder="Any special requirements or notes..."
                className="form-input form-textarea" />
            </FormField>
          </FormSection>

          {/* ── File Upload ── */}
          <FormSection title="Upload Files" icon="📎">
            <p className="upload-hint">Upload your print-ready files (PDF, Word, PPT, Excel, Images, ZIP)</p>
            <div
              className={`drop-zone ${isDragging ? 'drop-zone-active' : ''}`}
              onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current.click()}
            >
              <input ref={fileInputRef} type="file" multiple accept={ACCEPTED_TYPES}
                className="file-input-hidden" onChange={e => addFiles(e.target.files)} />
              <div className="drop-icon">{isDragging ? "📂" : "☁️"}</div>
              <div className="drop-title">
                {isDragging ? "Drop files here" : "Drag & drop files or click to browse"}
              </div>
              <div className="drop-sub">PDF · DOCX · PPTX · XLSX · JPG · PNG · ZIP</div>
            </div>

            {files.length > 0 && (
              <div className="file-list">
                {files.map(f => (
                  <div key={f.id} className="file-item">
                    <span className="file-icon">{FILE_ICONS[f.ext] || "📁"}</span>
                    <div className="file-info">
                      <div className="file-name">{f.name}</div>
                      <div className="file-size">{fmtSize(f.size)}</div>
                    </div>
                    <button type="button" onClick={() => removeFile(f.id)} className="file-remove">✕</button>
                  </div>
                ))}
              </div>
            )}
          </FormSection>

          {/* ── Price Summary ── */}
          <div className="price-summary-section">
            <div className="price-summary-header">
              <span className="price-summary-title">Order Summary</span>
              <span className="price-summary-brand">BK Offset · Delhi</span>
            </div>
            <div className="price-rows">
              <PriceRow label="Base Price" value="₹10.00" />
              <PriceRow label={`Pages (${order.pageCount} × ₹0.05)`}
                value={`₹${(order.pageCount * 0.05).toFixed(2)}`} />
              <PriceRow
                label={`Lamination (${laminationOptions.find(o => o.id === order.lamination)?.label})`}
                value={`₹${(laminationOptions.find(o => o.id === order.lamination)?.price || 0).toFixed(2)}`} />
              <PriceRow
                label={`Paper (${paperQualityOptions.find(o => o.id === order.paperQuality)?.label})`}
                value={`₹${(paperQualityOptions.find(o => o.id === order.paperQuality)?.price || 0).toFixed(2)}`} />
              <div className="price-divider" />
              <div className="price-total-row">
                <span className="price-total-label">Total Amount</span>
                <span className="price-total-value">₹{calcPrice()}</span>
              </div>
            </div>
          </div>

          {/* ── Actions ── */}
          <div className="form-actions">
            <button type="submit" disabled={isSubmitting} className={`btn-primary ${isSubmitting ? 'btn-disabled' : ''}`}>
              {isSubmitting ? "⏳ Placing Order…" : "🛒 Place Order"}
            </button>
            <button type="button" className="btn-ghost"
              onClick={() => { 
                setOrder({ bookTitle:"",authorName:"",bookType:"paperback",quantity:1,pageCount:100,lamination:"none",coverType:"soft",paperQuality:"standard",printType:"bw",binding:"perfect",specialInstructions:"",deliveryDate:"" }); 
                setFiles([]); 
                setErrors({}); 
              }}>
              ↺ Reset
            </button>
          </div>

        </form>

        <div className="copyright-footer">© 2025 BK Offset · Premium Printing · Delhi since 1995</div>
      </div>
    </div>
  );
}

/* ── Sub-components ─────────────────────────────────── */
function FormSection({ title, icon, children }) {
  return (
    <div className="form-section">
      <div className="form-section-title">
        <span className="form-section-icon">{icon}</span>
        {title}
      </div>
      {children}
    </div>
  );
}

function FormField({ label, error, children }) {
  return (
    <div className="form-field">
      <label className="form-field-label">{label}</label>
      {children}
      {error && <div className="form-field-error">⚠ {error}</div>}
    </div>
  );
}

function PriceRow({ label, value }) {
  return (
    <div className="price-row">
      <span className="price-row-label">{label}</span>
      <span className="price-row-value">{value}</span>
    </div>
  );
}
