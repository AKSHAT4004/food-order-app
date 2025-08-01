import React from 'react';

function Footer() {
  const footerStyle = {
    textAlign: 'center',
    padding: '1rem 0',
    backgroundColor: '#f2f2f2',
    color: '#555',
    fontSize: '0.9rem',
    position: 'relative',
    bottom: 0,
    width: '100%',
    marginTop: 'auto',
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer style={footerStyle}>
      &copy; {currentYear} TakeOut. All rights reserved.
    </footer>
  );
}

export default Footer;
