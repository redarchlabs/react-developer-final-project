import React, { useState } from "react";
import { withLayout } from "../components/withLayout"; 
import BookingForm from "../components/BookingForm"; 
import BookingSlot from "../components/BookingSlot";
import "../styles/BookingPage.css"; // Import your CSS file
// Page content for About
function BookingPage() {

  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

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
      />
      <BookingSlot
        resDate={resDate}
        resTime={resTime}
        guests={guests}
        occasion={occasion}
      />
    </>
  );
}


const customLayout = {
  Main:<div/>
};

export default withLayout(BookingPage, customLayout);
