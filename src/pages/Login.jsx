import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = e => {
    e.preventDefault();
    setLoggedIn(true);
  };

  if (loggedIn) {
    return (
      <div style={styles.pageWrapper}>
        <div style={styles.overlay} />
        <div style={styles.successContainer}>
          <h3>Welcome back, {email}!</h3>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.overlay} />
      <div style={styles.pageContainer}>
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <label style={styles.label}>
            Email:
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={styles.input}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </label>
          <label style={styles.label}>
            Password:
            <input
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={styles.input}
              placeholder="Your password"
              autoComplete="current-password"
            />
          </label>
          <button
            type="submit"
            style={{
              ...styles.button,
              ...(email && password ? {} : styles.disabledButton)
            }}
            disabled={!email || !password}
          >
            Login
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
    backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1470&q=80')`, // Set your preferred image URL here
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem 1rem',
    boxSizing: 'border-box',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.55)', // Semi-transparent overlay for readability
    zIndex: 0,
  },
  pageContainer: {
    position: 'relative',
    zIndex: 1,
    maxWidth: 400,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.95)', // Slightly translucent white for form background
    borderRadius: 8,
    padding: '2rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
  },
  heading: {
    textAlign: "center",
    color: "#333",
    marginBottom: "1.5rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 18,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    fontWeight: 600,
    color: "#444",
    fontSize: "1rem",
    marginBottom: 6,
  },
  input: {
    marginTop: 8,
    padding: "10px 12px",
    fontSize: "1rem",
    borderRadius: 6,
    border: "1px solid #bbb",
    outline: "none",
    fontFamily: "inherit",
    background: "#f9f9f9",
    transition: "border-color .2s",
  },
  button: {
    padding: "12px 0",
    backgroundColor: "#007bff", 
    color: "white",
    border: "none",
    fontSize: "1.1rem",
    fontWeight: "bold",
    borderRadius: 7,
    cursor: "pointer",
    transition: "background-color 0.25s",
    marginTop: 14,
  },
  disabledButton: {
    backgroundColor: "#a3cdfd",
    cursor: "not-allowed"
  },
  successContainer: {
    maxWidth: 400,
    margin: '4rem auto',
    padding: '2rem',
    textAlign: 'center',
    fontSize: '1.25rem',
    color: '#222',
    background: '#fff',
    borderRadius: 8,
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    position: 'relative',
    zIndex: 1,
  }
};

export default Login;
