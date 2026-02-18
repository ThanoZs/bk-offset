import React, { createContext, useContext, useState, useEffect } from 'react';

const OrdersContext = createContext();

export const useOrders = () => useContext(OrdersContext);

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  // Load orders from localStorage on initial load
  useEffect(() => {
    const savedOrders = localStorage.getItem('bk_orders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  // Save orders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('bk_orders', JSON.stringify(orders));
  }, [orders]);

  const addOrder = (orderData) => {
    const newOrder = {
      ...orderData,
      id: orderData.orderId || 'BKO-' + Date.now().toString().slice(-6),
      date: orderData.orderDate || new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      timestamp: Date.now(),
    };
    setOrders(prev => [newOrder, ...prev]);
    return newOrder;
  };

  const getOrder = (orderId) => {
    return orders.find(order => order.orderId === orderId || order.id === orderId);
  };

  const deleteOrder = (orderId) => {
    setOrders(prev => prev.filter(order => order.orderId !== orderId && order.id !== orderId));
  };

  const clearAllOrders = () => {
    setOrders([]);
  };

  return (
    <OrdersContext.Provider value={{
      orders,
      addOrder,
      getOrder,
      deleteOrder,
      clearAllOrders,
    }}>
      {children}
    </OrdersContext.Provider>
  );
};