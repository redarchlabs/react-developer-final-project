// Footer.js
import React from 'react';
import "../styles/TestimonialCard.css"
function TestimonialCard({ testimonialName, testimonialDescription }) {
    return (
      <div className="testimonial-card">
          <span className="testimonial-header">Rating</span>
          <span className="rating-wrapper">
            <img src="images/FiveStars.png"></img><span className="testimonial-name">{testimonialName}</span>
          </span>
          <span className="description-wrapper">
            <p className="testimonial-description">{testimonialDescription}</p>
          </span>
      </div>
    );
  }

export default TestimonialCard;
