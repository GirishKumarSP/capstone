import { render } from '@testing-library/react';
import { initializeTimes } from  "./BookingPage"

describe('initializeTimes', () => {
  test('returns the correct array of times', () => {
    const expectedTimes = [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
      '23:00'
    ];
    const times = initializeTimes();

    expect(times).toEqual(expectedTimes);
  });
});

import { updateTimes } from './BookingPage';

describe('updateTimes', () => {
  test('returns the same value provided in the state', () => {
    const state = ['17:00', '18:00', '19:00'];
    const action = { type: 'UPDATE_TIMES', times: ['20:00', '21:00', '22:00'] };

    const updatedState = updateTimes(state, action);

    expect(updatedState).toEqual(action.times);
    expect(updatedState).not.toBe(state); // Ensure a new array reference is returned
  });
});
