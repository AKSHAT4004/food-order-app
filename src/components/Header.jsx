import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Header() {
  const { cart } = useCart();

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#c71735',  // your deep red color
    padding: '0.75rem 2rem',
    marginBottom: '1.5rem',
    boxShadow: '0 2px 8px rgba(199, 23, 53, 0.5)', // subtle shadow matching the bg color
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  const brandStyle = {
    display: 'flex',
    alignItems: 'center',
    marginRight: 'auto',
  };

  const logoStyle = {
    height: 42,
    width: 42,
    marginRight: 14,
    borderRadius: '50%',
    objectFit: 'cover',
    boxShadow: '0 0 6px rgba(0,0,0,0.2)',
  };

  const brandNameStyle = {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '2px',
    userSelect: 'none',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '2rem',
    alignItems: 'center',
    flex: 1,
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#f5f5f5',
    fontWeight: '600',
    fontSize: '1.1rem',
    padding: '6px 10px',
    borderRadius: 6,
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  const activeStyle = {
    backgroundColor: '#ff5252',
    color: 'white',
    textDecoration: 'none',
    fontWeight: '700',
    boxShadow: '0 0 8px #ff5252',
  };

  // Hover effect (inline cannot do :hover, so use onMouse events or CSS file)
  // Here we rely on NavLink's activeClassName / activeStyle and default hover styling.

  return (
    <header style={headerStyle}>
      <div style={brandStyle}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyJaMiC_uWg83qBq0_wUHL8uNkjOrIB8J28wC3hK_hpi-9mGTPCV37LyZkBUWl2S4DUoE&usqp=CAU"
          alt="TakeOut Logo"
          style={logoStyle}
        />
        <span style={brandNameStyle}>TakeOut</span>
      </div>
      <nav style={navStyle}>
        <NavLink to="/home" style={linkStyle} activeStyle={activeStyle}>
          Home
        </NavLink>
        <NavLink to="/menu" style={linkStyle} activeStyle={activeStyle}>
          Menu
        </NavLink>
        <NavLink to="/login" style={linkStyle} activeStyle={activeStyle}>
          Login
        </NavLink>
        <NavLink to="/signup" style={linkStyle} activeStyle={activeStyle}>
          Signup
        </NavLink>
        <NavLink
  to="/cart"
  style={{
    ...linkStyle,
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 10px',
    minWidth: 48,
  }}
  activeStyle={activeStyle}
>
  {/* Circular Cart Icon with Material Basket SVG */}
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 38,
      width: 38,
      background: 'white',
      borderRadius: '50%',
      boxShadow: '0 1px 6px rgba(0,0,0,0.13)',
      marginRight: 3,
      position: 'relative'
    }}
  >
    {/* Filled shopping cart SVG - Material Design style */}
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="#c71735"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2
               2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2
               2-.896 2-2-.896-2-2-2zM7.16 14h9.59c.66
               0 1.22-.42 1.41-1.02l2.7-7.42A1 1 0 0019
               4H6.21l-.94-2H2v2h2l3.6 7.59-1.35 2.44C5.21
               15.37 5.83 17 7.16 17H19v-2H7.42c-.13 0-.25-.09-.29-.22L7.16 14z"/>
    </svg>
    {/* Cart count badge */}
    {cart.length > 0 && (
      <span style={{
        position: 'absolute',
        top: '-6px',
        right: '-6px',
        backgroundColor: '#ff5252',
        color: 'white',
        borderRadius: '50%',
        padding: '2.5px 7px 2px 7px',
        fontSize: '0.85rem',
        fontWeight: 'bold',
        minWidth: 18,
        boxShadow: '0 1px 4px rgba(0,0,0,0.09)',
        userSelect: 'none',
        pointerEvents: 'none',
        lineHeight: 1.05,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {cart.reduce((sum, item) => sum + item.quantity, 0)}
      </span>
    )}
  </span>
</NavLink>



      </nav>
    </header>
  );
}

export default Header;
