import React from 'react';
import { useNavigate } from 'react-router-dom';
import foodItems from '../data/foodItems';
import FoodItemCard from '../components/FoodItemCard';

function Home() {
const navigate = useNavigate();

const goToMenu = () => {
  navigate('/menu');
};

// Welcome section style
const welcomeSectionStyle = {
  width: '100vw',
  minHeight: '60vh',
  position: 'relative',
  backgroundImage: `url('https://t4.ftcdn.net/jpg/12/96/73/51/360_F_1296735116_5BIznMkchWbbGP1jF5CWWgx18lWAnm4X.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem 1rem',
  margin: 0,
  boxSizing: 'border-box',
};

const welcomeOverlay = {
  position: 'absolute',
  inset: 0,
  background: 'rgba(0,0,0,0.5)',
  zIndex: 0,
};

const welcomeContent = {
  zIndex: 1,
  position: 'relative',
  textAlign: 'center',
  color: 'white',
  width: '100%',
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 2rem',
};

const buttonStyle = {
  marginTop: '20px',
  padding: '12px 24px',
  fontSize: '1.2rem',
  backgroundColor: '#28a745',
  border: 'none',
  borderRadius: '6px',
  color: 'white',
  cursor: 'pointer',
};

// Suggestions section with background image and overlay
const suggestionsSectionStyle = {
  width: '100vw',
  minHeight: '35vh',
  backgroundImage: `url('https://thumbs.dreamstime.com/b/fast-food-delivery-app-man-smartphone-tracking-moped-ready-meal-technology-logistics-concept-city-skyline-148950358.jpg')`, // Example Suggestions image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  boxShadow: '0 4px 12px rgba(0,0,0,0.09)',
  padding: '3rem 2rem 3.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: 0,
  position: 'relative',
  boxSizing: 'border-box',
};

const suggestionsOverlay = {
  position: 'absolute',
  inset: 0,
  backgroundColor: 'rgba(255,255,255,0.83)', // Subtle white overlay for readability
  zIndex: 0,
};

const suggestionsHeading = {
  fontSize: '2rem',
  fontWeight: '700',
  marginBottom: '1.5rem',
  color: '#222',
  textAlign: 'center',
  letterSpacing: '.5px',
  position: 'relative',
  zIndex: 1,
};

const suggestionsGrid = {
  display: 'flex',
  gap: 28,
  overflowX: 'auto',
  scrollBehavior: 'smooth',
  width: '100%',
  justifyContent: 'center',
  paddingBottom: 10,
  boxSizing: 'border-box',
  position: 'relative',
  zIndex: 1,
};

// About section style
const aboutSectionStyle = {
  width: '100vw',
  minHeight: '40vh',
  position: 'relative',
  backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '4rem 1rem 5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 0,
  boxSizing: 'border-box',
};

const aboutOverlay = {
  position: 'absolute',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.65)',
  zIndex: 0,
};

const aboutContent = {
  zIndex: 1,
  position: 'relative',
  maxWidth: 900,
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.45)',
  borderRadius: 14,
  padding: '2.5rem',
  boxShadow: '0 0 20px rgba(0,0,0,0.55)',
  color: 'white',
  textAlign: 'center',
  margin: '0 auto',
};

const headingStyle = {
  fontSize: '2.5rem',
  marginBottom: '1rem',
  fontWeight: 'bold',
};
const paragraphStyle = {
  fontSize: '1.25rem',
  lineHeight: 1.6,
  marginBottom: '2rem',
};
const contactHeadingStyle = {
  fontSize: '1.6rem',
  fontWeight: '600',
  marginBottom: '0.8rem',
};
const contactInfoStyle = {
  fontSize: '1.08rem',
  lineHeight: 1.5,
  marginBottom: '0.2rem',
};

const suggestions = foodItems.slice(0, 4);

return (
  <>
    {/* Welcome Section */}
    <section style={welcomeSectionStyle}>
      <div style={welcomeOverlay} />
      <div style={welcomeContent}>
        <h1>Welcome to Our Food Ordering Platform!</h1>
        <p style={{ fontSize: '1.5rem', color: 'white' }}>
Explore a wide variety of cuisines from street foods to fine dining.
</p>

        <button style={buttonStyle} onClick={goToMenu}>
          Explore Menu
        </button>
      </div>
    </section>

    {/* Suggestions Section with background image & overlay */}
    <section style={suggestionsSectionStyle}>
      <div style={suggestionsOverlay} />
      <h2 style={suggestionsHeading}>Suggestions for You</h2>
      <div style={suggestionsGrid}>
        {suggestions.map(item => (
          <FoodItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>

    {/* About Section */}
    <section style={aboutSectionStyle}>
      <div style={aboutOverlay} />
      <div style={aboutContent}>
        <h2 style={headingStyle}>About TakeOut</h2>
        <p style={paragraphStyle}>
          TakeOut is your go-to online platform for ordering delicious food from a wide range of cuisines,
          from street food favorites to fine dining experiences. We are committed to bringing you high-quality food,
          delivered quickly and efficiently. Our user-friendly interface makes browsing menus, customizing your orders,
          and checking out a smooth and enjoyable experience.
        </p>
        <div>
          <h3 style={contactHeadingStyle}>Contact Us</h3>
          <p style={contactInfoStyle}><strong>Address:</strong> 129, CivilLines, Prayagraj, (UP), INDIA</p>
          <p style={contactInfoStyle}><strong>Phone:</strong> +1 (234) 567-8901</p>
          <p style={contactInfoStyle}><strong>Email:</strong> Akshat40048900@gmail.com</p>
          <p style={contactInfoStyle}><strong>Working Hours:</strong> Mon - Sun: 9 AM - 11 PM</p>
        </div>
      </div>
    </section>
  </>
);
}

export default Home;
