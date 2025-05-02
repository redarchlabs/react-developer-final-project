import React from "react";
import Button from "./Button"
import "../styles/OurDishes.css"
import DishCard from  "./DishCard"

function OurDishes({ path, title }) {
  const dishes = [
    {
      name: "Greek Salad",
      description: "Classic Greek dish made with ripe tomatoes, cucumber, red onions, Kalamata olives, and a generous slice of feta cheese on top.",
      price: "$12.99",
      image: "images/GreekSalad.png",
    },
    {
      name: "Lemon Herb Grilled Sea Bass",
      description: "A fresh, flaky sea bass fillet grilled to perfection with a zesty lemon and herb marinade, topped with a citrus-infused beurre blanc sauce. Served with a side of roasted seasonal vegetables and a light lemon-infused quinoa",
      price: "$12.99",
      image: "images/GrilledSeaBass.png",
    },
    {
      name: "Piri Piri Chicken (Mozambique))",
      description: "A flavorful, spicy grilled chicken dish originating from Mozambique. The chicken is marinated in a sauce made from Piri Piri peppers, garlic, lemon, and olive oil.",
      price: "$12.99",
      image: "images/PiriPiriChicken.png",
    },
    // Add more dishes as needed
  ];

  return (
    <section className="dishes">
      <span class="grid-container">
        <span></span>
         <h2>This week's specials!</h2>
          <Button label="On the menu" onClick={() => alert("Menu!")} />
        </span>
      <ul className="container">
        {dishes.map((element) => (
          <li className="nav-item" key={element.name}>
              <DishCard dishName={element.name} dishImage={element.image} dishDescription={element.description} dishPrice={element.price}/>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default OurDishes;