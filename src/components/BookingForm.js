
import "../styles/Button.css";
import React from "react";
import Button from "./Button";


export function BookingForm({
    resDate,
    resTime,
    guests,
    occasion,
    onDateChange,
    onTimeChange,
    onGuestsChange,
    onOccasionChange,
    onSearch
  }) {
    return (
      <section className="booking-form">
        <form className="container">
          <label htmlFor="res-date">Choose date</label>
          <input 
            type="date" 
            id="res-date" 
            value={resDate} 
            onChange={onDateChange}
          />
    
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time" value={resTime} onChange={onTimeChange}>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
    
          <label htmlFor="guests">Number of guests</label>
          <input 
            type="number" 
            id="guests" 
            value={guests} 
            min="1" 
            max="10" 
            onChange={onGuestsChange}
          />
    
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" value={occasion} onChange={onOccasionChange}>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
    
          <Button label="Search" onClick={onSearch} /> {/* The Search Button */}
        </form>
      </section>
    );
  }
  
  export default BookingForm;