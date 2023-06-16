import React from 'react';
import { render,screen } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  test('renders static text correctly', () => {
    // Render the BookingForm component
    render(<BookingForm />);

    // Verify that the static text is rendered correctly
    const staticTextElement = screen.getByText('Welcome to our Booking Form!');
    expect(staticTextElement).toBeInTheDocument();

    // You can add more assertions for other static text elements if needed
  });
});
