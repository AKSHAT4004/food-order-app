import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      // Check if same item with same customization already exists
      // For simplicity, ignoring customization in matching here
      const foundIndex = state.findIndex(
        (item) => item.id === action.item.id && item.customization === action.item.customization
      );
      if (foundIndex > -1) {
        // Increase quantity of existing item
        const updated = [...state];
        updated[foundIndex].quantity += 1;
        return updated;
      } 
      // New item
      return [...state, { ...action.item, quantity: 1 }];
    
    case 'REMOVE':
      return state.filter(item => item.id !== action.id || item.customization !== action.customization);

    case 'UPDATE':
      return state.map(item =>
        item.id === action.id && item.customization === action.customization
          ? { ...item, quantity: action.quantity }
          : item
      ).filter(item => item.quantity > 0);

    case 'CLEAR':
      return [];

    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
