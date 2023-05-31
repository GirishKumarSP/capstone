import React, { useReducer } from 'react';
import BookingForm from './BookingForm'



export function updateTimes(state, action) { //updateTimes as in instrcution
    switch (action.type) {
        case 'UPDATE_TIMES':
            // Modify this logic to update available times based on the selected date
            return action.times;
        default:
            return state;
    }
}

export function initializeTimes() {
    return [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00"
    ];
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