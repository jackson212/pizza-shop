import React from 'react'
import MenuCard from './MenuCard'
import pizza1 from '../../assets/pizza1.png'
import pizza2 from '../../assets/pizza2.png'
import pizza3 from '../../assets/pizza3.png'
import '../../styles/menu.scss'
const Menu = () => {
  const addToCartHandler = (itemNum) => {};

  return (
    <section id="menu">
      <h1>MENU</h1>

      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={pizza1}
          price={200}
          title="Cheese Burger"
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={pizza2}
          price={500}
          title="Veg Cheese Burger"
          delay={0.5}
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={3}
          burgerSrc={pizza3}
          price={1800}
          title="Cheese Burger with French Fries"
          delay={0.8}
          handler={addToCartHandler}
        />
        
      </div>
    </section>
  )
}

export default Menu