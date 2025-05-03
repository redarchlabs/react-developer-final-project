// In your test file
jest.mock('react-router-dom', () => {
  console.log('react-router-dom mock was called!');
  return {}; 
});

import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TableReservation from "./TableReservation"; // Adjust path if necessary
import { Provider } from "react-redux";
import { setNumPeople, setSelectedDate, setSelectedTime } from "../actions/bookingActions";

// Mock Redux store
const mockStore = {
  numPeople: 2,
  selectedDate: "",
  selectedTime: "",
};

const mockReducer = (state = mockStore, action) => {
  switch (action.type) {
    case "SET_NUM_PEOPLE":
      return { ...state, numPeople: action.payload };
    case "SET_SELECTED_DATE":
      return { ...state, selectedDate: action.payload };
    case "SET_SELECTED_TIME":
      return { ...state, selectedTime: action.payload };
    default:
      return state;
  }
};

const store = createStore(mockReducer);

// Utility function to render the component with Redux and Router context
const renderWithStore = (component) => {
  return render(
    <Provider store={store}>
      <Router>{component}</Router>
    </Provider>
  );
};

describe("TableReservation", () => {
  test("renders the reservation form and submits search criteria", async () => {
    renderWithStore(<TableReservation />);

    // Test that the form elements are rendered
    expect(screen.getByLabelText(/Number of People/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Select Date:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Select Time:/)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Search/i })).toBeInTheDocument();

    // Test initial state (default number of people is 2)
    expect(screen.getByDisplayValue("2")).toBeInTheDocument();

    // Simulate user interactions for changing number of people, date, and time
    fireEvent.change(screen.getByLabelText(/Number of People/), { target: { value: "4" } });
    fireEvent.change(screen.getByLabelText(/Select Date:/), { target: { value: "2025-05-01" } });
    fireEvent.change(screen.getByLabelText(/Select Time:/), { target: { value: "18:00" } });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: /Search/i }));

    // Assert that the result section is now displayed
    await waitFor(() => {
      expect(screen.getByText(/No available tables for 4 people/)).toBeInTheDocument();
    });
  });

  test("displays the correct tables based on selected number of people", async () => {
    renderWithStore(<TableReservation />);

    // Change number of people to 4 (which should show tables with capacity >= 4)
    fireEvent.change(screen.getByLabelText(/Number of People/), { target: { value: "4" } });

    // Simulate a form submission
    fireEvent.click(screen.getByRole("button", { name: /Search/i }));

    // Wait for results to be shown
    await waitFor(() => {
      expect(screen.queryByText("No available tables for 4 people")).not.toBeInTheDocument();
      expect(screen.getByText("Table 1")).toBeInTheDocument();
      expect(screen.getByText("Table 3")).toBeInTheDocument();
      expect(screen.getByText("Table 4")).toBeInTheDocument();
    });
  });

  test("shows an alert when no date or time is selected on form submit", async () => {
    renderWithStore(<TableReservation />);

    // Click search without selecting a date or time
    fireEvent.click(screen.getByRole("button", { name: /Search/i }));

    // Wait for alert to appear (you can mock alert function in your test environment)
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith("Please select a date and time for your booking.");
    });
  });
});
