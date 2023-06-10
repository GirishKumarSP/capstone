import React, { useReducer } from 'react';
import BookingForm from './BookingForm'
import { fetchAPI } from './Api';



export function updateTimes(state, action) { //updateTimes as in instrcution
    switch (action.type) {
        case 'UPDATE_TIMES':
            // Modify this logic to update available times based on the selected date
            // return action.times;
            const submissionResult = fetchAPI(action.date);
            // return submitAPI(action.date);
            return submissionResult
        default:
            return state;
    }
}


export function initializeTimes() {
    const today = new Date();
    const apiData = fetchAPI(today);
    // console.log(today)
    return apiData;
  }


function BookingPage() {
    const [state, dispatch] = useReducer(updateTimes, [], initializeTimes);

    return (
        <div>
            <BookingForm availableTimes={state} dispatch={dispatch} />
        </div>
    );
}

export default BookingPage