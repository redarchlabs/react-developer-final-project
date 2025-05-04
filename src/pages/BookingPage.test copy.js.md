import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingPage from './BookingPage'; // Adjust the import path if necessary

describe('BookingPage Component', () => {
  test('renders the BookingForm and BookingSlot components', () => {
    render(<BookingPage />);
    
    // Check if the form and slot components are rendered
    expect(screen.getByLabelText(/Choose date/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/)).toBeInTheDocument();
    expect(screen.getByText(/Available Booking Slots/)).toBeInTheDocument();
  });

  test('updates state on form inputs', async () => {
    render(<BookingPage />);
    
    // Simulate user input for the form fields
    fireEvent.change(screen.getByLabelText(/Choose date/), { target: { value: '2025-05-01' } });
    fireEvent.change(screen.getByLabelText(/Choose time/), { target: { value: '19:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/), { target: { value: 5 } });
    fireEvent.change(screen.getByLabelText(/Occasion/), { target: { value: 'Anniversary' } });

    // Check if the state was updated by the form
    expect(screen.getByLabelText(/Choose date/).value).toBe('2025-05-01');
    expect(screen.getByLabelText(/Choose time/).value).toBe('19:00');
    expect(screen.getByLabelText(/Number of guests/).value).toBe('5');
    expect(screen.getByLabelText(/Occasion/).value).toBe('Anniversary');
  });

  test('displays available slots based on user input', async () => {
    render(<BookingPage />);
    
    // Simulate user input for the form fields
    fireEvent.change(screen.getByLabelText(/Choose date/), { target: { value: '2025-05-01' } });
    fireEvent.change(screen.getByLabelText(/Choose time/), { target: { value: '19:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/), { target: { value: 5 } });
    fireEvent.change(screen.getByLabelText(/Occasion/), { target: { value: 'Anniversary' } });

    // Wait for the BookingSlot component to update and display available slots
    await waitFor(() => {
      expect(screen.getByText('Available Booking Slots')).toBeInTheDocument();
      //since we are using random availability, we cannot check for specific slots
      const availableSlots = screen.getAllByText(/:00|:30/); // Match times like '19:00' or '19:30'
      expect(availableSlots.length).toBeGreaterThan(0); // Ensure there is at least one available slot
    });
  });

});
