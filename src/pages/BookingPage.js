import React, { useState } from "react";
import {withLayout} from "../components/withLayout"; 
import {BookingForm} from "../components/BookingForm"; 
import {BookingSlot} from "../components/BookingSlot";
import "../styles/BookingPage.css"; // Import your CSS file
import Button from "../components/Button"; 
import ErrorBoundary from "../components/ErrorBoundary"; // Import the ErrorBoundary component

export function BookingPage() {
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [showSlots, setShowSlots] = useState(false);  // State to control when to show the slots
  const [isLoading, setIsLoading] = useState(false);  // Loading state to manage API fetching
  const [selectedTime, setSelectedTime] = useState(""); // Store selected time
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [occasion, setOccasion] = useState("");

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    occasion: false,
  });

  // Handle input changes
  const handleDateChange = (e) => {
    setShowSlots(false);
    setResDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setShowSlots(false);
    setResTime(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
    setShowSlots(false);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const handleSelectedTime = (time) => {
    setSelectedTime(time);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!resDate || !resTime) {
      alert("Please select a date and time for your booking.");
      return;
    }
    setShowSlots(true);  // Show slots when the user clicks "search"
    setIsLoading(true);  // Set loading to true when fetching slots
  };

    
  const handleConfirmBooking = (e) => {
    e.preventDefault();
    
    // Validate required fields
    const errors = {
      firstName: !firstName,
      lastName: !lastName,
      email: !email,
      phoneNumber: !phoneNumber,
      occasion: !occasion,
      time: !selectedTime,
    };

    setFormErrors(errors);

    // If there are errors, don't proceed
    if (Object.values(errors).includes(true)) {
      console.log(errors);
      alert('Please fix errors...');
      return;
    }

    // Proceed with booking confirmation logic
    alert('Booking confirmed!');
  };

  return (
    <ErrorBoundary>
      <BookingForm
        resDate={resDate}
        resTime={resTime}
        guests={guests}
        occasion={occasion}
        onDateChange={handleDateChange}
        onTimeChange={handleTimeChange}
        onGuestsChange={handleGuestsChange}
        onOccasionChange={handleOccasionChange}
        onSearch={handleSearch} // Passing the search handler
      />
       {/* Show slots only after search */}
       
       {showSlots && (
        <BookingSlot
          resDate={resDate}
          resTime={resTime}
          guests={guests}
          occasion={occasion}
          showSlots={showSlots}
          selectedTime={selectedTime}
          onSelectedTime={handleSelectedTime}
        />
      )}
      
      {showSlots && (
         <form className="reservation-form" onSubmit={handleConfirmBooking}>
            <div className="flex-table">
                <div className="form-row">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className={formErrors.firstName ? "error" : ""}
                        required
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className={formErrors.lastName ? "error" : ""}
                        required
                    />
                </div>
    
                <div className="form-row">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={formErrors.email ? "error" : ""}
                        required
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className={formErrors.phoneNumber ? "error" : ""}
                        required
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        className={formErrors.occasion ? "error" : ""}
                        required
                    >
                        <option value="">Select an Occasion</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>
            {showSlots && !selectedTime &&(
              <div className="error-message">
                **Please select a time slot to proceed with your booking!
              </div>
            )}
            {/* Buttons */}
            
            <div className="form-row button-container">
                <div className="button-group">
                    <Button type="submit" label="Confirm Booking" onClick={handleConfirmBooking}  />
                </div>
            </div>
        </form>
      )}
     

    </ErrorBoundary>
  );
}

const customLayout = {
  Main: <div />
};

export default withLayout(BookingPage, customLayout);