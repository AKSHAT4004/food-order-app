import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, dispatch } = useCart();

  const removeFromCart = (id, customization) => {
    dispatch({ type: 'REMOVE', id, customization });
  };

  const updateQuantity = (id, customization, quantity) => {
    if (quantity < 1) return;
    dispatch({ type: 'UPDATE', id, customization, quantity: Number(quantity) });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.overlay} />
      <div style={styles.container}>
        <h2 style={styles.heading}>Your Cart</h2>
        {cart.length === 0 ? (
          <p style={styles.emptyText}>Cart is empty!</p>
        ) : (
          <ul style={styles.list}>
            {cart.map((item) => (
              <li key={`${item.id}-${item.customization}`} style={styles.listItem}>
                {item.image && (
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    style={styles.image} 
                  />
                )}
                <div style={styles.itemDetails}>
                  <b style={styles.itemName}>{item.name}</b>
                  {item.customization && <span style={styles.customization}>({item.customization})</span>}
                  <div style={styles.priceQty}>
                    Price: ₹{item.price.toFixed(2)}
                  </div>
                  <div style={styles.quantityControl}>
                    Qty:&nbsp;
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, item.customization, e.target.value)}
                      style={styles.quantityInput}
                    />
                    <button 
                      onClick={() => removeFromCart(item.id, item.customization)} 
                      style={styles.removeButton}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        <h3 style={styles.total}>Total: ₹{total.toFixed(2)}</h3>
        <div style={styles.checkoutButtonWrapper}>
          <Link to="/checkout">
            <button 
              disabled={cart.length === 0} 
              style={{
                ...styles.checkoutButton, 
                ...(cart.length === 0 ? styles.disabledButton : {})
              }}
            >
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  pageWrapper: {
    position: 'relative',
    minHeight: '100vh',
    backgroundImage: `url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1470&q=80')`, // replace with your preferred background image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: 40,
    paddingBottom: 40,
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.55)', // dark overlay for readability
    zIndex: 0,
  },
  container: {
    position: 'relative',
    zIndex: 1,
    maxWidth: 800,
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // slightly translucent white background for content
    borderRadius: 10,
    padding: '2rem 2rem 3rem 2rem',
    boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#222',
  },
  heading: {
    textAlign: 'center',
    marginBottom: 24,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#444',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: 0,
    marginBottom: 24,
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    borderBottom: '1px solid #ddd',
    paddingBottom: 16,
    marginBottom: 12,
  },
  image: {
    width: 80,
    height: 80,
    objectFit: 'cover',
    borderRadius: 8,
    boxShadow: '0 0 5px rgba(0,0,0,0.1)',
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: '1.1rem',
    color: '#222',
  },
  customization: {
    fontSize: '0.9rem',
    color: '#555',
    marginLeft: 8,
  },
  priceQty: {
    color: '#555',
    marginTop: 4,
    fontSize: '0.95rem',
  },
  quantityControl: {
    marginTop: 8,
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    flexWrap: 'wrap',
  },
  quantityInput: {
    width: 60,
    padding: '6px 8px',
    fontSize: '1rem',
    borderRadius: 6,
    border: '1px solid #ccc',
    textAlign: 'center',
  },
  removeButton: {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: 6,
    padding: '6px 14px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.25s',
  },
  total: {
    textAlign: 'right',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 20,
  },
  checkoutButtonWrapper: {
    textAlign: 'right',
  },
  checkoutButton: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    fontSize: '1.1rem',
    borderRadius: 6,
    cursor: 'pointer',
    fontWeight: '700',
    transition: 'background-color 0.3s',
  },
  disabledButton: {
    backgroundColor: '#6c757d',
    cursor: 'not-allowed',
  },
};

export default Cart;
