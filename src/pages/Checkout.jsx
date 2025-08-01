import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

function Checkout() {
  const { cart, dispatch } = useCart();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (!cart.length) {
      alert("Your cart is empty.");
      return;
    }
    setOrderPlaced(true);
    dispatch({ type: 'CLEAR' });
  };

  const addItem = item => {
    dispatch({ type: 'ADD', item });
  };

  const removeItem = item => {
    if (item.quantity <= 1) {
      dispatch({ type: 'REMOVE', id: item.id, customization: item.customization });
    } else {
      dispatch({ type: 'UPDATE', id: item.id, customization: item.customization, quantity: item.quantity - 1 });
    }
  };

  if (orderPlaced) return (
    <div style={styles.pageWrapper}>
      <div style={styles.overlay} />
      <div style={styles.orderPlacedContainer}>
        <h1 style={{color: 'green' }}>Thank you for your order, {name}!</h1>
      </div>
    </div>
  );

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.05;
  const deliveryCharge = 50;
  const total = subtotal + tax + deliveryCharge;

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.overlay} />
      <div style={styles.pageContainer}>
        <h2 style={styles.heading}>Checkout</h2>

        {cart.length === 0 ? (
          <p style={styles.emptyCartText}>Your cart is empty.</p>
        ) : (
          <ul style={styles.cartList}>
            {cart.map(item => (
              <li key={`${item.id}-${item.customization}`} style={styles.cartItem}>
                <div style={styles.cartItemDetails}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={styles.cartItemImage}
                  />
                  <div>
                    <b>{item.name}</b> {item.customization && `(${item.customization})`}
                    <p style={styles.priceQty}>
                      Price: ₹{item.price} &nbsp; | &nbsp; Qty: {item.quantity}
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => addItem(item)}
                    style={{ ...styles.qtyButton, marginRight: 8 }}
                    aria-label={`Increase quantity of ${item.name}`}
                  >+</button>
                  <button
                    onClick={() => removeItem(item)}
                    style={styles.qtyButton}
                    aria-label={`Decrease quantity of ${item.name}`}
                  >−</button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div style={styles.summaryContainer}>
          <div style={styles.summaryRow}><span>Subtotal</span> <span>₹{subtotal.toFixed(2)}</span></div>
          <div style={styles.summaryRow}><span>Tax (5%)</span> <span>₹{tax.toFixed(2)}</span></div>
          <div style={styles.summaryRow}><span>Delivery Charges</span> <span>₹{deliveryCharge.toFixed(2)}</span></div>
          <div style={{ ...styles.summaryRow, ...styles.totalRow }}>
            <span>Total</span> <span>₹{total.toFixed(2)}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Name:
            <input
              type="text"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              style={styles.input}
              placeholder="Your full name"
            />
          </label>
          <label style={styles.label}>
            Address:
            <textarea
              required
              value={address}
              onChange={e => setAddress(e.target.value)}
              style={{ ...styles.input, height: 80, resize: 'vertical' }}
              placeholder="Delivery address"
            />
          </label>

          <button
            type="submit"
            disabled={!cart.length}
            style={{
              ...styles.placeOrderButton,
              ...(cart.length === 0 ? styles.disabledButton : {})
            }}
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  pageWrapper: {
    position: 'relative',
    minHeight: '100vh',
    backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1470&q=80')`, // Replace with your preferred background image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '3rem 1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.55)', // Dark overlay for better readability
    zIndex: 0,
  },
  pageContainer: {
    position: 'relative',
    zIndex: 1,
    maxWidth: 600,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.95)', // Slightly transparent white container
    borderRadius: 8,
    padding: '2rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#333',
  },
  emptyCartText: {
    textAlign: 'center',
    fontSize: '1.1rem',
    color: '#666',
  },
  cartList: {
    listStyleType: 'none',
    paddingLeft: 0,
    marginBottom: '2rem',
  },
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #ddd',
    padding: '12px 0',
  },
  cartItemDetails: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },
  cartItemImage: {
    width: 60,
    height: 60,
    objectFit: 'cover',
    borderRadius: 8,
    boxShadow: '0 1px 6px rgba(0,0,0,0.1)',
  },
  priceQty: {
    fontSize: '0.9rem',
    color: '#555',
    marginTop: 4,
  },
  qtyButton: {
    backgroundColor: '#28a745',
    border: 'none',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1rem',
    borderRadius: 5,
    width: 32,
    height: 32,
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'background-color 0.3s ease',
  },
  summaryContainer: {
    borderTop: '1px solid #ddd',
    paddingTop: 16,
    marginBottom: 20,
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1.1rem',
    marginBottom: 6,
    color: '#444',
  },
  totalRow: {
    fontWeight: 'bold',
    fontSize: '1.3rem',
    color: '#222',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    fontWeight: '600',
    color: '#333',
    fontSize: '1rem',
  },
  input: {
    marginTop: 6,
    padding: '8px 12px',
    fontSize: '1rem',
    borderRadius: 6,
    border: '1px solid #ccc',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  placeOrderButton: {
    padding: '12px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    fontSize: '1.15rem',
    fontWeight: 'bold',
    borderRadius: 8,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  disabledButton: {
    backgroundColor: '#95d6a4',
    cursor: 'not-allowed',
  },
  orderPlacedContainer: {
    maxWidth: 600,
    margin: '4rem auto',
    padding: '2rem',
    textAlign: 'center',
    fontSize: '1.3rem',
    color: '#28a745',
    fontWeight: 'bold',
  }
};

export default Checkout;
