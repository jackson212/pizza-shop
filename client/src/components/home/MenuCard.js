import React from 'react'
import { motion } from 'framer-motion'


const MenuCard = ({ itemNum, burgerSrc, price, title, handler, delay = 0 }) => {
  return (
    <div
      className="menuCard"
 
    >
      <div>Item {itemNum}</div>
      <main>
        <img src={burgerSrc} alt={itemNum} />

        <h5>₹{price}</h5>

        <p>{title}</p>

        <button onClick={() => handler(itemNum)}>Buy Now</button>
      </main>
    </div>
  );
}; 

export default MenuCard;