import React, { createContext, useState, useContext } from 'react';

const BookingContext = createContext();

export const useBooking = () => {
  return useContext(BookingContext);
};

export const BookingProvider = ({ children }) => {
  const [numPeople, setNumPeople] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <BookingContext.Provider value={{ numPeople, setNumPeople, selectedDate, setSelectedDate, selectedTime, setSelectedTime }}>
      {children}
    </BookingContext.Provider>
  );
};
