import React from "react";
import "../styles/HeroSection.css"; // Import the CSS file for styling
import Button from "./Button";
import RestaurantTitle from "./RestaurantTitle";
import MainSiteImage from "../images/restauranfood.jpg"
function HeroSection() {
 

  return (
    <section className="hero">
        <article className="hero-content">
            <div class="grid-container">
                <div class="text-section">
                    <RestaurantTitle/>
                    <p className="restaurant-description">
                    Nestled in the heart of Chicago, Little Lemon offers a unique dining experience with fresh, locally sourced ingredients and a menu full of vibrant flavors. Whether you're here for a casual meal with friends or a special occasion, our cozy ambiance and friendly service make every visit memorable.
                    </p>
                    <Button label="Reserve a Table" onClick={() => alert("Table Reserved!")} />
                </div>
                <div class="image-section second-column">
                    <img className="restaurant-image" src={MainSiteImage} alt="Little Lemon"></img>
                </div>
                
            </div>
            
        </article>
    </section>
  );
}

export default HeroSection;