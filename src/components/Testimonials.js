import React from "react";
import Button from "./Button"
import "../styles/Testimonials.css"
import TestimonialCard from "./TestimonialCard";

function Testimonials({ path, title }) {
  const testimoniales = [
    {
      name: "Samantha Wright",
      description: "\"This is the best restaurant I've ever been to! The food is amazing and the service is top-notch. I can't recommend it enough!\"",
    },
    {
      name: "Tim Evans",
      description: "\"The atmosphere is so cozy and inviting. I love coming here for a relaxing meal with friends.\"",
    },
    {
      name: "Juliana Oliver",
      description: "\"What a delightful experience! The staff is friendly and the food is delicious. I will definitely be back!\"",
    },
    // Add more testimoniales as needed
  ];

  return (
    <section className="testimonials">
      <span class="grid-container">
        <span></span>
         <h2>Testimonials</h2>
        </span>
      <ul className="container">
        {testimoniales.map((element) => (
          <li className="nav-item" key={element.name}>
              <TestimonialCard testimonialName={element.name} testimonialImage={element.image} testimonialDescription={element.description}/>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Testimonials;