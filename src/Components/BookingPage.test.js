import { render, screen, fireEvent } from '@testing-library/react';
import { initializeTimes, updateTimes } from "./BookingPage"
import { BrowserRouter as Router } from 'react-router-dom';
import BookingPage from './BookingPage';

describe('initializeTimes', () => {
  test('returns the correct array of times', () => {
    const expectedTimes = [
      '17:00',
      '17:30',
      '18:30',
      '19:00',
      '19:30',
      '20:00',
      '20:30',
      '21:00',
      '21:30',
      '22:00',
      '23:30'
    ];
    const times = initializeTimes();

    expect(times).toEqual(expectedTimes);
  });
});


describe('updateTimes', () => {
  test('returns the same value provided in the state', () => {
    const state = ['17:00', '18:00', '19:00'];
    const today = new Date();
    const action = {
      type: 'UPDATE_TIMES', date: today,
      times: [
        '17:00',
        '17:30',
        '18:30',
        '19:00',
        '19:30',
        '20:00',
        '20:30',
        '21:00',
        '21:30',
        '22:00',
        '23:30']
    };

    const updatedState = updateTimes(state, action);

    expect(updatedState).toEqual(action.times);
    expect(updatedState).not.toBe(state); // Ensure a new array reference is returned
  });
});


describe('BookingForm', () => {
  test('renders date input field with required attribute', () => {
    render(
      <Router>
        <BookingPage />
      </Router>
    );
    const dateInput = screen.getByLabelText('Choose date');
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toBeRequired();
  });

  test('renders time select field with required attribute', () => {
    render(
      <Router>
        <BookingPage />
      </Router>
    );
    const timeSelect = screen.getByLabelText('Choose time');
    expect(timeSelect).toHaveAttribute('type', 'time');
    expect(timeSelect).toBeRequired();
  });

  test('renders number of guests input field with required, min, and max attributes', () => {
    render(
      <Router>
        <BookingPage />
      </Router>
    );
    const guestsInput = screen.getByLabelText('Number of guests');
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
  });

  test('renders occasion select field with required attribute', () => {
    render(
      <Router>
        <BookingPage />
      </Router>
    );
    const occasionSelect = screen.getByLabelText('Occasion');
    expect(occasionSelect).toHaveAttribute('type', 'select');
    expect(occasionSelect).toBeRequired();
  });
});


describe('BookingForm2', () => {
  test('validates form with all fields filled', () => {
    render(
      <Router>
        <BookingPage />
      </Router>
    );
    const dateInput = screen.getByLabelText('Choose date');
    const timeInput = screen.getByLabelText('Choose time');
    const seatingInput = screen.getByLabelText('Number of guests');
    const occasionInput = screen.getByLabelText('Occasion');
    const submitButton = screen.getByRole('button', { name: 'Make Your reservation' });

    fireEvent.change(dateInput, { target: { value: '2023-06-20' } });
    fireEvent.change(timeInput, { target: { value: '17:00' } });
    fireEvent.change(seatingInput, { target: { value: '4' } });
    fireEvent.change(occasionInput, { target: { value: 'Birthday' } });

    expect(submitButton).not.toBeDisabled();
  });

  test('validates form with missing fields', () => {
    render(
      <Router>
        <BookingPage />
      </Router>
    );
    const submitButton = screen.getByRole('button', { name: 'Make Your reservation' });

    expect(submitButton).toBeDisabled();
  });
});
