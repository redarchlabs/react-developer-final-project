import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingPage from '../pages/BookingPage'; // Adjust path based on your project structure
import '@testing-library/jest-dom';
import { act } from 'react';
import { shallowEqual } from 'react-redux';

// Mock the fetchAPI function used in BookingSlot
jest.mock('../components/BookingSlot', () => ({
  __esModule: true,
  fetchAPI: jest.fn(() => ['17:00', '17:30', '18:00']), // Mocked slots returned
}));

test('displays available slots after the user clicks "Search"', async () => {
  render(<BookingPage />);
  const handleSubmit = jest.fn();
  // Simulate user input for the form fields
  fireEvent.change(screen.getByLabelText(/Choose date/), { target: { value: '2025-05-01' } });
  fireEvent.change(screen.getByLabelText(/Choose time/), { target: { value: '19:00' } });
  fireEvent.change(screen.getByLabelText(/Number of guests/), { target: { value: 5 } });
  //screen.debug();
  // Simulate clicking the search button
  await waitFor(() => screen.findByText('Choose date'));
  await waitFor(() => screen.findByText('Choose time'));
  await waitFor(() => screen.findByText('Number of guests'));
  await waitFor(() => screen.findByText('Occasion'));
  await waitFor(() => screen.findByText('Search'));
  const searchButton = await screen.findByText('Search');
  expect(searchButton).toBeInTheDocument();
  expect(handleSubmit).not.toHaveBeenCalled();
  await act(async () => {
    searchButton.click();
  });
  
  // Wait for the available slots to appear
  await waitFor(() => screen.getByText('Available Booking Slots'));

  // Check if the available slots are displayed
  expect(screen.getByText('17:00')).toBeInTheDocument();
  expect(screen.getByText('17:30')).toBeInTheDocument();
  expect(screen.getByText('18:00')).toBeInTheDocument();
});

test('displays available slots based on user input after search', async () => {
    render(<BookingPage />);
  
    // Simulate user input for the form fields
    fireEvent.change(screen.getByLabelText(/Choose date/), { target: { value: '2025-05-01' } });
    fireEvent.change(screen.getByLabelText(/Choose time/), { target: { value: '19:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/), { target: { value: 5 } });
    
    // Simulate clicking the search button
    fireEvent.click(screen.getByText('Search'));
  
    // Wait for the available slots to appear
    await waitFor(() => screen.getByText('Available Booking Slots'));
  
    // Check if the available slots are displayed
    const availableSlots = screen.getAllByText(/:00|:30/); // Match times like '19:00' or '19:30'
    expect(availableSlots.length).toBeGreaterThan(0); // Ensure there is at least one available slot
  });


  test('form cannot be submitted if required fields are missing', async () => {
    render(<BookingPage />);
  
    // Simulate user input for date, time, and guests
    fireEvent.change(screen.getByLabelText(/Choose date/), { target: { value: '2025-05-01' } });
    fireEvent.change(screen.getByLabelText(/Choose time/), { target: { value: '19:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/), { target: { value: 5 } });
  
    // Simulate clicking the search button to show available slots
    fireEvent.click(screen.getByText('Search'));
  
    // Simulate clicking the Confirm Booking button without filling out required fields
    fireEvent.click(screen.getByText('Confirm Booking'));
  
    // Wait for form validation
    await waitFor(() => screen.getByText('First Name is required'));
    await waitFor(() => screen.getByText('Last Name is required'));
    await waitFor(() => screen.getByText('Email is required'));
    await waitFor(() => screen.getByText('Phone Number is required'));
    await waitFor(() => screen.getByText('Occasion is required'));
    
    // Ensure that the booking form is not submitted by checking that the confirmation alert is not triggered
    expect(window.alert).not.toHaveBeenCalled();
  });
