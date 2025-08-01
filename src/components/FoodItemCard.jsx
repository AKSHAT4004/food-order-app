import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import styles from './FoodItemCard.module.css';

function FoodItemCard({ item }) {
  const { dispatch } = useCart();
  const [customization, setCustomization] = useState("");

  const addToCart = () => {
    dispatch({
      type: 'ADD',
      item: { ...item, customization }
    });
    setCustomization("");
    alert(`${item.name} added to cart!`);
  };

  return (
    <div className={styles.card}>
      <img src={item.image} alt={item.name} className={styles.image} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p><b>₹{item.price}</b></p>

      {item.availableToppings && (
        <label>
          Toppings: 
          <select
            value={customization}
            onChange={e => setCustomization(e.target.value)}
            className={styles.select}
          >
            <option value="">None</option>
            {item.availableToppings.map(topping => (
              <option key={topping} value={topping}>{topping}</option>
            ))}
          </select>
        </label>
      )}

      <button className={styles.button} onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default FoodItemCard;
