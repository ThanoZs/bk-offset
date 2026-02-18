import React, { useState } from "react";
import { ArrowLeft, Search, Filter } from "lucide-react";
import { useOrders } from "../../context/OrdersContext";
import OrderReceipt from "./OrderReceipt";
import "./MyOrders.css";

export default function MyOrders({ onBack, isDark }) {
  const { orders, clearAllOrders } = useOrders();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.bookTitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.orderId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.authorName?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const totalOrders = orders.length;
  const totalSpent = orders.reduce((sum, order) => sum + (parseFloat(order.total) || 0), 0).toFixed(2);

  if (selectedOrder) {
    return <OrderReceipt order={selectedOrder} onBack={() => setSelectedOrder(null)} />;
  }

  return (
    <div className="my-orders-page" style={{ 
      minHeight: "100%",
      background: isDark ? "#020617" : "#ffffff",
      paddingTop: "0", // Remove extra padding
    }}>
      <div className="orders-blob1"></div>
      <div className="orders-blob2"></div>
      <div className="orders-blob3"></div>

      <div className="orders-wrapper" style={{ paddingTop: "20px" }}>
        {/* Header */}
        <div className="orders-header">
          <button onClick={onBack} className="orders-back-btn">
            <ArrowLeft size={16} /> Back
          </button>
          <h1 className="orders-title" style={{ color: isDark ? "#f1f5f9" : "#0f172a" }}>
            My Orders
          </h1>
          {orders.length > 0 && (
            <button onClick={clearAllOrders} className="orders-clear-btn">
              Clear All
            </button>
          )}
        </div>

        {/* Search & Filter */}
        {orders.length > 0 && (
          <div className="orders-filter-bar" style={{
            background: isDark ? "#1e293b" : "#ffffff",
            border: "1px solid " + (isDark ? "#334155" : "rgba(14,165,233,0.15)"),
          }}>
            <div className="orders-search">
              <input
                type="text"
                placeholder="Search by title, order ID, author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="orders-search-input"
                style={{
                  background: isDark ? "#0f172a" : "#f8fafc",
                  color: isDark ? "#f1f5f9" : "#0f172a",
                  borderColor: isDark ? "#334155" : "#e2e8f0",
                }}
              />
            </div>
            <div className="orders-filter">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="orders-filter-select"
                style={{
                  background: isDark ? "#0f172a" : "#ffffff",
                  color: isDark ? "#f1f5f9" : "#0f172a",
                  borderColor: isDark ? "#334155" : "#e2e8f0",
                }}
              >
                <option value="all">All Orders</option>
                <option value="processing">Processing</option>
                <option value="delivered">Delivered</option>
              </select>
            </div>
          </div>
        )}

        {/* Orders List */}
        <div className="orders-list-container">
          {filteredOrders.length === 0 ? (
            <div className="orders-empty" style={{
              background: isDark ? "#1e293b" : "#ffffff",
              border: "1px solid " + (isDark ? "#334155" : "rgba(14,165,233,0.15)"),
            }}>
              <div className="orders-empty-icon">📭</div>
              <h3 style={{ color: isDark ? "#f1f5f9" : "#0f172a" }}>No orders found</h3>
              <p style={{ color: isDark ? "#94a3b8" : "#64748b" }}>
                {orders.length === 0 
                  ? "You haven't placed any orders yet." 
                  : "Try adjusting your search or filter."}
              </p>
              {orders.length === 0 && (
                <button onClick={onBack} className="orders-empty-btn">
                  Place Your First Order
                </button>
              )}
            </div>
          ) : (
            <div className="orders-list">
              {filteredOrders.map((order) => (
                <div
                  key={order.orderId || order.id}
                  className="order-card"
                  onClick={() => setSelectedOrder(order)}
                  style={{
                    background: isDark ? "#1e293b" : "#ffffff",
                    border: "1px solid " + (isDark ? "#334155" : "rgba(14,165,233,0.15)"),
                  }}
                >
                  <div className="order-card-header">
                    <span className="order-id">{order.orderId}</span>
                    <span className={order-status }>
                      {order.status || "Processing"}
                    </span>
                  </div>

                  <div className="order-card-body">
                    <div className="order-book-info">
                      <div className="order-book-title" style={{ color: isDark ? "#f1f5f9" : "#0f172a" }}>
                        {order.bookTitle}
                      </div>
                      <div className="order-author" style={{ color: isDark ? "#94a3b8" : "#64748b" }}>
                        by {order.authorName}
                      </div>
                    </div>

                    <div className="order-details-grid" style={{
                      background: isDark ? "#0f172a" : "#f8fafc",
                    }}>
                      <div className="order-detail">
                        <span className="detail-label">Quantity</span>
                        <span className="detail-value" style={{ color: isDark ? "#f1f5f9" : "#0f172a" }}>
                          {order.quantity} copies
                        </span>
                      </div>
                      <div className="order-detail">
                        <span className="detail-label">Pages</span>
                        <span className="detail-value" style={{ color: isDark ? "#f1f5f9" : "#0f172a" }}>
                          {order.pageCount} pages
                        </span>
                      </div>
                      <div className="order-detail">
                        <span className="detail-label">Print Type</span>
                        <span className="detail-value" style={{ color: isDark ? "#f1f5f9" : "#0f172a" }}>
                          {order.printType === "bw" ? "B&W" : 
                           order.printType === "color" ? "Color" : "Spot Color"}
                        </span>
                      </div>
                      <div className="order-detail">
                        <span className="detail-label">Binding</span>
                        <span className="detail-value" style={{ color: isDark ? "#f1f5f9" : "#0f172a" }}>
                          {order.binding}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="order-card-footer">
                    <span className="order-date" style={{ color: isDark ? "#94a3b8" : "#64748b" }}>
                      {order.orderDate}
                    </span>
                    <div className="order-total">
                      <span className="total-label" style={{ color: isDark ? "#94a3b8" : "#94a3b8" }}>Total:</span>
                      <span className="total-amount">₹{order.total}</span>
                    </div>
                    <button className="order-view-btn">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Summary */}
        {orders.length > 0 && (
          <div className="orders-summary" style={{
            background: isDark ? "#1e293b" : "#ffffff",
            border: "1px solid " + (isDark ? "#334155" : "rgba(14,165,233,0.15)"),
          }}>
            <div className="summary-item">
              <span className="summary-label" style={{ color: isDark ? "#94a3b8" : "#64748b" }}>
                Total Orders:
              </span>
              <span className="summary-value" style={{ color: isDark ? "#38bdf8" : "#0284c7" }}>
                {totalOrders}
              </span>
            </div>
            <div className="summary-item">
              <span className="summary-label" style={{ color: isDark ? "#94a3b8" : "#64748b" }}>
                Total Spent:
              </span>
              <span className="summary-value" style={{ color: isDark ? "#38bdf8" : "#0284c7" }}>
                ₹{totalSpent}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
