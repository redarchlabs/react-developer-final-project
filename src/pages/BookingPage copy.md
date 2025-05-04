import React, { useState } from "react";
import { withLayout } from "../components/withLayout"; 
import BookingForm from "../components/BookingForm"; 
import BookingSlot from "../components/BookingSlot";
import "../styles/BookingPage.css"; // Import your CSS file
import Button from "../components/Button"; 


function BookingPage() {
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [showSlots, setShowSlots] = useState(false);  // State to control when to show the slots
  const [isLoading, setIsLoading] = useState(false);  // Loading state to manage API fetching

  // Handle input changes
  const handleDateChange = (e) => {
    setResDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setResTime(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const handleSearch = () => {
    setShowSlots(true);  // Show slots when the user clicks "search"
    //setIsLoading(true);  // Set loading to true when fetching slots
  };

  return (
    <>
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
      {showSlots && !isLoading && (
        <BookingSlot
          resDate={resDate}
          resTime={resTime}
          guests={guests}
          occasion={occasion}
        />
      )}

      {/* Optionally, show loading spinner */}
      {isLoading && <p>Loading available slots...</p>}
    </>
  );
}

const customLayout = {
  Main: <div />
};

export default withLayout(BookingPage, customLayout);