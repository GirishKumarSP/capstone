import { render } from '@testing-library/react';
import { initializeTimes } from  "./BookingPage"

describe('initializeTimes', () => {
  test('returns the correct array of times', () => {
    const expectedTimes = [
      '17:00',
      '17:30',
      '18:00',
      '18:30',
      '22:00',
      '22:30',
      '23:30'
    ];
    const times = initializeTimes();

    expect(times).toEqual(expectedTimes);
  });
});

import { updateTimes } from './BookingPage';

describe('updateTimes', () => {
  test('returns the same value provided in the state', () => {
    const state = ['17:00', '18:00', '19:00'];
    const today = new Date();
    const action = { type: 'UPDATE_TIMES', date: today, times: ["17:00", "17:30", "18:00", "18:30", "22:00", "22:30", "23:30"]};

    const updatedState = updateTimes(state, action);

    expect(updatedState).toEqual(action.times);
    expect(updatedState).not.toBe(state); // Ensure a new array reference is returned
  });
});
