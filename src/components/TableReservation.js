import React, { useState } from "react";
import "../styles/Reservations.css"; 
import Button from "./Button";
import TableCard from "./TableCard";
import { useSelector, useDispatch } from 'react-redux';
import { setNumPeople, setSelectedDate, setSelectedTime } from '../actions/bookingActions';
import { useNavigate } from 'react-router-dom';

function TableReservation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const numPeople = useSelector((state) => state.numPeople);
  const selectedDate = useSelector((state) => state.selectedDate);
  const selectedTime = useSelector((state) => state.selectedTime);

  const [showResults, setShowResults] = useState(false); // State to control visibility of results

  // Handle changes in form inputs
  const handlePeopleChange = (event) => {
    dispatch(setNumPeople(event.target.value));
  };

  const handleDateChange = (event) => {
    dispatch(setSelectedDate(event.target.value));
  };

  const handleTimeChange = (event) => {
    dispatch(setSelectedTime(event.target.value));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert("Please select a date and time for your booking.");
      return;
    }
    setShowResults(true); // Show results after search is clicked
  };

  const tables = [
    {
      id: 1,
      name: "Table 1",
      capacity: 4,
      description: "A cozy table for four, perfect for a family dinner.",
      image: "images/Seating.png",
    },
    {
      id: 2,
      name: "Table 2",
      capacity: 2,
      description: "A cozy table for two, perfect for a couple.",
      image: "images/Seating.png",
    },
    {
      id: 3,
      name: "Table 3",
      capacity: 6,
      description: "A spacious table for six, great for a small group.",
      image: "images/LargeSeating.png",
    },
    {
      id: 4,
      name: "Table 4",
      capacity: 8,
      description: "A large table for eight, ideal for a family reunion.",
      image: "images/LargeSeating.png",
    },
    {
      id: 5,
      name: "Table 5",
      capacity: 5,
      description: "A cozy table for four, perfect for a family dinner.",
      image: "images/FunctionalFive.png",
    }
  ];

  // Filter tables based on the selected number of people
  const filteredTables = tables.filter((table) => table.capacity >= numPeople);

  return (
    <section className="reservations">
      <span>
        <h2>Table Reservation</h2>
      </span>
      <span className="main-container">
        <form className="search-container" onSubmit={handleSubmit}>
          <div className="search-box">
            <h2>Search Criteria</h2>
            <label htmlFor="people">Number of People</label>
            <select id="people" name="people" onChange={handlePeopleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12+</option>
            </select>

            <label>
              Select Date:
              <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </label>

            <label>
              Select Time:
              <input
                type="time"
                value={selectedTime}
                onChange={handleTimeChange}
              />
            </label>
            <Button label="Search" type="submit" />
          </div>
        </form>

        {/* Conditionally render search results only when showResults is true */}
        {showResults && (
          <span className="results-container">
            {filteredTables.length > 0 ? (
              filteredTables.map((table) => (
                <TableCard
                  key={table.id}
                  tableName={table.name}
                  tableImage={table.image}
                  tableDescription={table.description}
                  tableCapacity={table.capacity}
                />
              ))
            ) : (
              <p>No available tables for {numPeople} people. Please adjust your search criteria.</p>
            )}
          </span>
        )}
      </span>
    </section>
  );
}

export default TableReservation;
