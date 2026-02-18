import React, { useState } from 'react';
import { useOrders } from './OrdersContext';
import OrderReceipt from './OrderReceipt';
import './MyOrders.css';

const MyOrders = ({ onBack }) => {
  const { orders, deleteOrder, clearAllOrders } = useOrders();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filter, setFilter] = useState('all'); // all, recent, oldest
  const [searchTerm, setSearchTerm] = useState('');

  // Sort and filter orders
  const getFilteredOrders = () => {
    let filtered = [...orders];
    
    // Apply search
    if (searchTerm) {
      filtered = filtered.filter(order => 
        order.orderId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.bookTitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.authorName?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply sort
    switch(filter) {
      case 'recent':
        filtered.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
        break;
      case 'oldest':
        filtered.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
        break;
      default:
        filtered.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    }
    
    return filtered;
  };

  const formatCurrency = (amount) => {
    return `Rs. ${parseFloat(amount).toFixed(2)}`;
  };

  const getStatusBadge = (order) => {
    // You can add logic for different statuses
    return <span className="order-status delivered">Delivered</span>;
  };

  if (selectedOrder) {
    return <OrderReceipt order={selectedOrder} onBack={() => setSelectedOrder(null)} />;
  }

  const filteredOrders = getFilteredOrders();

  return (
    <div className="my-orders-page">
      <div className="orders-blob1" /><div className="orders-blob2" /><div className="orders-blob3" />
      
      <div className="orders-wrapper">
        {/* Header */}
        <div className="orders-header">
          <button onClick={onBack} className="orders-back-btn">
            ← Back
          </button>
          <h1 className="orders-title">My Orders</h1>
          {orders.length > 0 && (
            <button onClick={clearAllOrders} className="orders-clear-btn">
              Clear All
            </button>
          )}
        </div>

        {/* Search and Filter Bar */}
        <div className="orders-filter-bar">
          <div className="orders-search">
            <input
              type="text"
              placeholder="Search by Order ID, Book Title or Author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="orders-search-input"
            />
          </div>
          <div className="orders-filter">
            <select 
              value={filter} 
              onChange={(e) => setFilter(e.target.value)}
              className="orders-filter-select"
            >
              <option value="all">All Orders</option>
              <option value="recent">Most Recent</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>

        {/* Orders List */}
        <div className="orders-list-container">
          {filteredOrders.length === 0 ? (
            <div className="orders-empty">
              <div className="orders-empty-icon">📭</div>
              <h3>No Orders Found</h3>
              <p>{searchTerm ? 'No orders match your search' : 'You haven\'t placed any orders yet'}</p>
              {!searchTerm && (
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
                >
                  <div className="order-card-header">
                    <div className="order-id">#{order.orderId}</div>
                    {getStatusBadge(order)}
                  </div>
                  
                  <div className="order-card-body">
                    <div className="order-book-info">
                      <h3 className="order-book-title">{order.bookTitle || 'Untitled'}</h3>
                      <p className="order-author">by {order.authorName || 'Unknown'}</p>
                    </div>
                    
                    <div className="order-details-grid">
                      <div className="order-detail">
                        <span className="detail-label">Quantity</span>
                        <span className="detail-value">{order.quantity} copies</span>
                      </div>
                      <div className="order-detail">
                        <span className="detail-label">Pages</span>
                        <span className="detail-value">{order.pageCount}</span>
                      </div>
                      <div className="order-detail">
                        <span className="detail-label">Print Type</span>
                        <span className="detail-value">{order.printType || 'bw'}</span>
                      </div>
                      <div className="order-detail">
                        <span className="detail-label">Binding</span>
                        <span className="detail-value">{order.binding || 'perfect'}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="order-card-footer">
                    <div className="order-date">
                      <span>📅 {order.orderDate || order.date}</span>
                    </div>
                    <div className="order-total">
                      <span className="total-label">Total:</span>
                      <span className="total-amount">{formatCurrency(order.total)}</span>
                    </div>
                    <button 
                      className="order-view-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedOrder(order);
                      }}
                    >
                      View Receipt
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Orders Summary */}
        {filteredOrders.length > 0 && (
          <div className="orders-summary">
            <div className="summary-item">
              <span className="summary-label">Total Orders:</span>
              <span className="summary-value">{filteredOrders.length}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Total Spent:</span>
              <span className="summary-value">
                {formatCurrency(filteredOrders.reduce((sum, order) => sum + parseFloat(order.total || 0), 0))}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;