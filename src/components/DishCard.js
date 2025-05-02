// Footer.js
import React from 'react';
import "../styles/DishCard.css"
import Basket from "../images/Basket.svg"; // Example image import
function DishCard({ dishName, dishImage, dishDescription, dishPrice }) {
    return (
      <div className="dish-card">
        <img src={dishImage} alt={dishName} className="dish-image" />
        <div className="dish-info">
          <span className="container">
            <h3 className="dish-name">{dishName}</h3>
            <span className="dish-price">{dishPrice}</span>
          </span>
          <span className="description-wrapper">
          <p className="dish-description">{dishDescription}</p>
          </span>
          <span>Order a delivery</span><img className="delivery-image" src={Basket}></img>
        </div>
      </div>
    );
  }

export default DishCard;
