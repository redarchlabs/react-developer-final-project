import React,{useState} from "react";
import { withLayout } from "../components/withLayout"; // Import the HOC
import HeroSection from "../components/HeroSection";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from  "../components/Button"
import "../styles/Confirm.css"; 

// Page content for ConfirmPage
function ConfirmPage() {
  
    const numPeople = useSelector((state) => state.numPeople);
    const selectedDate = useSelector((state) => state.selectedDate);
    const selectedTime = useSelector((state) => state.selectedTime);
    const navigate = useNavigate();
    
    // State to manage input fields
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [occasion, setOccasion] = useState("");

    // Function to handle the first name input
    const handleFirstNameBlur = (e) => {
        setFirstName(e.target.value);
    };

    // Function to handle the last name input
    const handleLastNameBlur = (e) => {
        setLastName(e.target.value);
    };

    // Function to handle the email input
    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    };

    // Function to handle the phone number input
    const handlePhoneNumberBlur = (e) => {
        setPhoneNumber(e.target.value);
    };

    // Function to handle the occasion input
    const handleOccasionBlur = (e) => {
        setOccasion(e.target.value);
    };

    // Handle the booking confirmation (for now, we'll just console.log)
    const handleConfirmBooking = (e) => {
      
        e.preventDefault();
        if (!firstName || !lastName || !email || !phoneNumber) {
            alert("Please fill in all required fields.");
            return;
        }
        console.log("Booking Confirmed:", { numPeople, selectedDate, selectedTime, firstName, lastName, email, phoneNumber, occasion });
  
      // Navigate to a success or confirmation page (optional)
      navigate('/success'); // Assuming you have a success page route
    };

    return (
        <>
        <HeroSection titleOnly={true} />
            <div className="confirm-container">
                <h1 className="confirm-header">Confirm Reservation</h1>
                <div className="reservation-details">
                    <p><strong>Number of People:</strong> {numPeople}</p>
                    <p><strong>Date:</strong> {selectedDate}</p>
                    <p><strong>Time:</strong> {selectedTime}</p>
                </div>

                {/* Reservation Form */}
                <form className="reservation-form" onSubmit={handleConfirmBooking}>
                    <div className="flex-table">
                        <div className="form-row">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
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
                                required
                            />
                        </div>
                        <div className="form-row">
                            <label htmlFor="occasion">Occasion</label>
                            <select
                                id="occasion"
                                value={occasion}
                                onChange={(e) => setOccasion(e.target.value)}
                                required
                            >
                                <option value="">Select an Occasion</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="form-row button-container">
                        <div className="button-group">
                            <Button type="button" onClick={() => navigate('/Reservations')} label="Reset" />
                            <Button type="submit" label="Confirm Booking" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

// Customize the layout for this page
const customLayout = {
  Main: <div/>
};

// Wrap the ConfirmPage component with the Layout
export default withLayout(ConfirmPage, customLayout);
