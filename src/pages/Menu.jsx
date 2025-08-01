import React from 'react';
import foodItems from '../data/foodItems';
import FoodItemCard from '../components/FoodItemCard';

function Menu() {
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80';

  const menuBgStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    position: 'relative',
    padding: '2rem 1rem 4rem',
  };

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.35)', // Dark overlay for contrast
    zIndex: 1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    maxWidth: 1200,
    margin: '0 auto',
  };

  return (
    <div style={menuBgStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Our Menu</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
        }}>
          {foodItems.map(item => (
            <FoodItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
