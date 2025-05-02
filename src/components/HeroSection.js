import React from "react";
import "../styles/HeroSection.css"; // Import the CSS file for styling
import Button from "./Button";
import RestaurantTitle from "./RestaurantTitle";
import MainSiteImage from "../images/restauranfood.jpg"

function HeroSection({ titleOnly = false }) {
    return (
      <section className="hero">
        <article className="hero-content">
          <div className="grid-container">
            <div className="text-section">
              {/* Render RestaurantTitle and other elements conditionally */}
              <RestaurantTitle />
              {!titleOnly && (
                <>
                  <p className="restaurant-description">
                    Nestled in the heart of Chicago, Little Lemon offers a unique
                    dining experience with fresh, locally sourced ingredients and a
                    menu full of vibrant flavors. Whether you're here for a casual
                    meal with friends or a special occasion, our cozy ambiance and
                    friendly service make every visit memorable.
                  </p>
                  <Button label="Reserve a Table" onClick={() => window.location='/Reservations'} />
                </>
              )}
            </div>
  
            {/* Conditionally render the image section */}
            {!titleOnly && (
              <div className="image-section second-column">
                <img className="restaurant-image" src={MainSiteImage} alt="Little Lemon" />
              </div>
            )}
          </div>
        </article>
      </section>
    );
  }

export default HeroSection;