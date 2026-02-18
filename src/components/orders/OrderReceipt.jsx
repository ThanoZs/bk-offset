import { useRef } from "react";
import jsPDF from "jspdf";
import "./OrderReceipt.css";

const printLabel = { bw: "Black & White", color: "Full Color", spot: "Spot Color" };
const lamLabel   = { none: "No Lamination", matte: "Matte", glossy: "Glossy", "soft-touch": "Soft Touch" };

export default function OrderReceipt({ order, onBack }) {
  const receiptRef = useRef();

  /* ════════════════════════════════════════════════
     PDF GENERATOR  — exact match to screenshot
  ════════════════════════════════════════════════ */
  const generatePDF = () => {
    const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

    // A4 in mm: 210 × 297
    const PW = 210;
    const PH = 297;
    const ML = 14;          // left margin
    const MR = PW - 14;     // right margin x
    const CW = MR - ML;     // content width  = 182

    // ── Colour helpers ──
    const rgb = (r, g, b) => [r, g, b];
    const C = {
      navy:    rgb(15,  23,  42),
      navyMid: rgb(22,  36,  62),
      cyan:    rgb(56, 189, 248),
      blue:    rgb( 2, 132, 199),
      ink:     rgb(15,  23,  42),
      muted:   rgb(71,  85, 105),
      label:   rgb(148, 163, 184),
      border:  rgb(203, 213, 225),
      white:   rgb(255, 255, 255),
      pageBg:  rgb(240, 249, 255),
      greenBg: rgb(20,  83,  45),
      greenBd: rgb(34, 197,  94),
      greenTx: rgb(134, 239, 172),
      metaBg:  rgb(30,  41,  59),
    };

    const setFill   = (c) => doc.setFillColor(...c);
    const setStroke = (c) => doc.setDrawColor(...c);
    const setTxt    = (c) => doc.setTextColor(...c);

    // ── Page background ──
    setFill(C.pageBg);
    doc.rect(0, 0, PW, PH, "F");

    /* ══════════════════════════════════════
       HEADER  (navy block)
    ══════════════════════════════════════ */
    const HDR = 52;   // mm tall
    setFill(C.navy);
    doc.rect(0, 0, PW, HDR, "F");

    // BK Offset  — large cyan bold
    setTxt(C.cyan);
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("BK Offset", ML, 14);

    // Sub-title
    setTxt([160, 190, 215]);
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.text("Premium Printing Services · Delhi", ML, 20);

    // ✓ Order Confirmed pill  — top right
    const pillW = 48, pillH = 8, pillX = MR - pillW, pillY = 9;
    setFill(C.greenBg);
    setStroke(C.greenBd);
    doc.setLineWidth(0.4);
    doc.roundedRect(pillX, pillY, pillW, pillH, 4, 4, "FD");
    setTxt(C.greenTx);
    doc.setFontSize(6.5);
    doc.setFont("helvetica", "bold");
    doc.text("Order Confirmed", pillX + pillW / 2, pillY + 5.2, { align: "center" });

    /* Meta row box ── */
    const MBY = 27, MBH = 20;
    setFill(C.metaBg);
    doc.roundedRect(ML, MBY, CW, MBH, 3, 3, "F");

    // Column x positions inside the box
    const m1 = ML + 5, m2 = ML + 70, m3 = ML + 130;

    // Labels
    setTxt(C.label);
    doc.setFontSize(6);
    doc.setFont("helvetica", "normal");
    doc.text("ORDER ID", m1, MBY + 6);
    doc.text("DATE",     m2, MBY + 6);
    doc.text("TOTAL",    m3, MBY + 6);

    // Values
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    setTxt(C.white);
    doc.text(order.orderId,   m1, MBY + 14);
    doc.text(order.orderDate, m2, MBY + 14);
    setTxt(C.cyan);
    doc.text(`Rs. ${order.total}`, m3, MBY + 14);

    /* ══════════════════════════════════════
       BODY
    ══════════════════════════════════════ */
    let y = HDR + 10;

    // ── Section heading ──
    const section = (title) => {
      setTxt(C.blue);
      doc.setFontSize(8.5);
      doc.setFont("helvetica", "bold");
      doc.text(title, ML, y);
      setStroke(C.blue);
      doc.setLineWidth(0.5);
      doc.line(ML, y + 1.5, MR, y + 1.5);
      y += 8;
    };

    // ── Two-column detail pair ──
    const detailRow = (l1, v1, l2, v2) => {
      const x2 = ML + CW * 0.5 + 4;
      // labels
      setTxt(C.label);
      doc.setFontSize(6.5);
      doc.setFont("helvetica", "normal");
      doc.text(l1, ML, y);
      if (l2) doc.text(l2, x2, y);
      y += 4;
      // values
      setTxt(C.ink);
      doc.setFontSize(9.5);
      doc.setFont("helvetica", "bold");
      doc.text(String(v1 || "—"), ML, y);
      if (v2) doc.text(String(v2 || "—"), x2, y);
      y += 8;
    };

    // ── Single detail ──
    const detailSingle = (label, value) => {
      setTxt(C.label);
      doc.setFontSize(6.5);
      doc.setFont("helvetica", "normal");
      doc.text(label, ML, y);
      y += 4;
      setTxt(C.ink);
      doc.setFontSize(9.5);
      doc.setFont("helvetica", "bold");
      doc.text(String(value || "—"), ML, y);
      y += 8;
    };

    // ── Price row ──
    const priceRow = (label, value) => {
      setTxt(C.muted);
      doc.setFontSize(9);
      doc.setFont("helvetica", "normal");
      doc.text(label, ML, y);
      setTxt(C.ink);
      doc.setFont("helvetica", "bold");
      doc.text(value, MR, y, { align: "right" });
      setStroke(C.border);
      doc.setLineWidth(0.3);
      doc.line(ML, y + 2, MR, y + 2);
      y += 8;
    };

    /* ── BOOK INFORMATION ── */
    section("BOOK INFORMATION");
    detailRow("BOOK TITLE",    order.bookTitle,
              "AUTHOR NAME",   order.authorName);
    detailRow("BOOK TYPE",     order.bookType,
              "QUANTITY",      `${order.quantity} copies`);
    detailRow("PAGE COUNT",    `${order.pageCount} pages`,
              "PAPER QUALITY", order.paperQuality);
    y += 3;

    /* ── PRINT & FINISHING ── */
    section("PRINT & FINISHING");
    detailRow("PRINT TYPE",  printLabel[order.printType] || order.printType,
              "BINDING",     order.binding);
    detailRow("COVER TYPE",  order.coverType === "soft" ? "Soft Cover" : "Hard Cover",
              "LAMINATION",  lamLabel[order.lamination] || order.lamination);
    if (order.deliveryDate) {
      detailSingle("DELIVERY DATE", order.deliveryDate);
    }
    y += 3;

    /* ── UPLOADED FILES ── */
    if (order.files?.length) {
      section(`UPLOADED FILES (${order.files.length})`);
      order.files.forEach((f) => {
        setTxt(C.blue);
        doc.setFontSize(8.5);
        doc.setFont("helvetica", "normal");
        doc.text(`• ${f}`, ML + 3, y);
        y += 6;
      });
      y += 3;
    }

    /* ── SPECIAL INSTRUCTIONS ── */
    if (order.specialInstructions) {
      section("SPECIAL INSTRUCTIONS");
      const lines = doc.splitTextToSize(order.specialInstructions, CW - 10);
      const boxH  = lines.length * 5 + 8;
      setFill([235, 248, 255]);
      doc.roundedRect(ML, y - 2, CW, boxH, 2, 2, "F");
      setFill(C.blue);
      doc.rect(ML, y - 2, 1.5, boxH, "F");
      setTxt(C.muted);
      doc.setFontSize(8.5);
      doc.setFont("helvetica", "normal");
      doc.text(lines, ML + 5, y + 4);
      y += boxH + 5;
    }

    /* ── PRICE BREAKDOWN ── */
    section("PRICE BREAKDOWN");
    priceRow("Base Price",
             `Rs. 10.00`);
    priceRow(`Pages (${order.pageCount} x Rs. 0.05)`,
             `Rs. ${(order.pageCount * 0.05).toFixed(2)}`);
    priceRow("Quantity",
             `x ${order.quantity}`);
    y += 3;

    // Total row — bold large
    setTxt(C.ink);
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text("Total Amount", ML, y);
    setTxt(C.blue);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(`Rs. ${order.total}`, MR, y + 1, { align: "right" });
    y += 14;

    /* ══════════════════════════════════════
       FOOTER
    ══════════════════════════════════════ */
    const FY = PH - 18;
    setStroke(C.border);
    doc.setLineWidth(0.4);
    doc.line(ML, FY - 6, MR, FY - 6);

    setTxt(C.blue);
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.text("BK Offset Printing", ML, FY);

    setTxt(C.label);
    doc.setFontSize(7);
    doc.setFont("helvetica", "normal");
    doc.text("Trusted Since 1995 · Delhi · Premium Quality", ML, FY + 5);

    setTxt(C.blue);
    doc.setFontSize(8.5);
    doc.setFont("helvetica", "bold");
    doc.text("Thank you for your order!", MR, FY + 2, { align: "right" });

    doc.save(`BKOffset-Receipt-${order.orderId}.pdf`);
  };

  /* ════════════════════════════════════════════════
     JSX DISPLAY
  ════════════════════════════════════════════════ */
  return (
    <div className="order-receipt-page">
      <div className="receipt-blob1" /><div className="receipt-blob2" /><div className="receipt-blob3" />

      <div className="receipt-wrapper">
        {/* Top bar */}
        <div className="receipt-top-bar">
          <button onClick={onBack} className="receipt-back-btn">← Back to Form</button>
          <button onClick={generatePDF} className="receipt-download-btn">⬇ Download PDF</button>
        </div>

        {/* Receipt card */}
        <div ref={receiptRef} className="receipt-card">

          {/* ── Header ── */}
          <div className="receipt-header">
            <div className="receipt-header-top">
              <div>
                <div className="receipt-brand">BK Offset</div>
                <div className="receipt-brand-sub">Premium Printing Services · Delhi</div>
              </div>
              <div className="receipt-badge">✓ Order Confirmed</div>
            </div>
            <div className="receipt-meta">
              <RMeta label="ORDER ID"  value={order.orderId} />
              <RMeta label="DATE"      value={order.orderDate} />
              <RMeta label="TOTAL"     value={`Rs. ${order.total}`} highlight />
            </div>
          </div>

          {/* ── Body ── */}
          <div className="receipt-body">

            <RSec title="BOOK INFORMATION">
              <div className="receipt-grid-2">
                <RDet label="BOOK TITLE"    value={order.bookTitle} />
                <RDet label="AUTHOR NAME"   value={order.authorName} />
                <RDet label="BOOK TYPE"     value={order.bookType} />
                <RDet label="QUANTITY"      value={`${order.quantity} copies`} />
                <RDet label="PAGE COUNT"    value={`${order.pageCount} pages`} />
                <RDet label="PAPER QUALITY" value={order.paperQuality} />
              </div>
            </RSec>

            <RSec title="PRINT & FINISHING">
              <div className="receipt-grid-2">
                <RDet label="PRINT TYPE"  value={printLabel[order.printType] || order.printType} />
                <RDet label="BINDING"     value={order.binding} />
                <RDet label="COVER TYPE"  value={order.coverType === "soft" ? "Soft Cover" : "Hard Cover"} />
                <RDet label="LAMINATION"  value={lamLabel[order.lamination] || order.lamination} />
                {order.deliveryDate && <RDet label="DELIVERY DATE" value={order.deliveryDate} />}
              </div>
            </RSec>

            {order.files?.length > 0 && (
              <RSec title={`UPLOADED FILES (${order.files.length})`}>
                <div className="receipt-file-chips">
                  {order.files.map((f, i) => <div key={i} className="receipt-file-chip">📄 {f}</div>)}
                </div>
              </RSec>
            )}

            {order.specialInstructions && (
              <RSec title="SPECIAL INSTRUCTIONS">
                <div className="receipt-notes">{order.specialInstructions}</div>
              </RSec>
            )}

            <RSec title="PRICE BREAKDOWN">
              <RPRow label="Base Price"                             value="Rs. 10.00" />
              <RPRow label={`Pages (${order.pageCount} × Rs. 0.05)`} value={`Rs. ${(order.pageCount * 0.05).toFixed(2)}`} />
              <RPRow label="Quantity"                               value={`× ${order.quantity}`} />
              <div className="receipt-total-row">
                <span className="receipt-total-label">Total Amount</span>
                <span className="receipt-total-value">Rs. {order.total}</span>
              </div>
            </RSec>

          </div>

          {/* ── Footer ── */}
          <div className="receipt-footer">
            <div>
              <div className="receipt-footer-brand">BK Offset Printing</div>
              <div className="receipt-footer-sub">Trusted Since 1995 · Delhi · Premium Quality</div>
            </div>
            <div className="receipt-thank-you">Thank you for your order!</div>
          </div>
        </div>

        <div className="receipt-download-bottom">
          <button onClick={generatePDF} className="receipt-download-large"> Download PDF Receipt</button>
          <div className="receipt-download-note">Downloads a clean styled PDF of this receipt</div>
        </div>
      </div>
    </div>
  );
}

/* ── Sub-components ── */
function RMeta({ label, value, highlight }) {
  return (
    <div className="receipt-meta-item">
      <div className="receipt-meta-label">{label}</div>
      <div className={`receipt-meta-value${highlight ? " receipt-meta-hl" : ""}`}>{value}</div>
    </div>
  );
}
function RSec({ title, children }) {
  return (
    <div className="receipt-section">
      <div className="receipt-section-title">{title}</div>
      {children}
    </div>
  );
}
function RDet({ label, value }) {
  return (
    <div>
      <div className="receipt-det-label">{label}</div>
      <div className="receipt-det-value">{value || "—"}</div>
    </div>
  );
}
function RPRow({ label, value }) {
  return (
    <div className="receipt-price-row">
      <span className="receipt-price-label">{label}</span>
      <span className="receipt-price-value">{value}</span>
    </div>
  );
}
