// Footer.js
import React, { useState, useEffect } from 'react';
import "../styles/TableCard.css"
import Basket from "../images/Basket.svg"; // Example image import
import Button from './Button';

const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = s * a % m) / m;
    };
  };
  
  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());
  
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ':00');
      }
      if (random() < 0.5) {
        result.push(i + ':30');
      }
    }
    return result;
  };
  
  function BookingSlot({ resDate, resTime, guests, occasion }) {
    const [availableSlots, setAvailableSlots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    // Fetch available slots when resDate changes
    useEffect(() => {
      if (resDate) {
        setLoading(true);
        try {
          const slots = fetchAPI(new Date(resDate)); // Use fetchAPI to get available slots for the selected date
          setAvailableSlots(slots);
          setLoading(false);
        } catch (err) {
          setError('Failed to load slots');
          setLoading(false);
        }
      }
    }, [resDate]);
  
    // Filter available slots based on the number of guests
    const filteredSlots = availableSlots.filter((slot) => {
      const hour = parseInt(slot.split(':')[0], 10);
      return hour >= 17 && hour <= 23; // Ensure slots are between 5 PM and 11 PM
    });
  
    return (
      <section className="booking-slot-section">
        <h3>Available Booking Slots</h3>
        <p><strong>Date:</strong> {resDate}</p>
        <p><strong>Time:</strong> {resTime}</p>
        <p><strong>Occasion:</strong> {occasion}</p>
  
        {/* Loading state */}
        {loading && <p>Loading available slots...</p>}
  
        {/* Error state */}
        {error && <p>{error}</p>}
  
        {/* Display available slots */}
        {filteredSlots.length > 0 ? (
          <ul className="available-slots-list">
            {filteredSlots.map((slot, index) => (
              <li key={index} className="slot-item">
                <div className="slot-info">
                  <p><strong>{slot}</strong> - Available</p>
                  <Button label="Book Now" onClick={() => alert(`Booked ${slot} for ${guests} guests`)} />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No available slots for {guests} guests on {resDate}.</p>
        )}
      </section>
    );
  }
  
  export default BookingSlot;