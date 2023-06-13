import React, { useReducer } from 'react';
import BookingForm from './BookingForm'
import { fetchAPI, submitAPI } from './Api';
import { useNavigate } from 'react-router-dom';


export function updateTimes(state, action) { //updateTimes as in instrcution
    switch (action.type) {
        case 'UPDATE_TIMES':
            const submissionResult = fetchAPI(action.date);
            return submissionResult
        default:
            return state;
    }
}


export function initializeTimes() {
    const today = new Date();
    const apiData = fetchAPI(today);
    return apiData;
}

function BookingPage() {
    const [state, dispatch] = useReducer(updateTimes, [], initializeTimes);

    const navigate = useNavigate();
    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate("/reservationConfirmation")
        }
    }

    return (
        <div>
            <BookingForm availableTimes={state} dispatch={dispatch} submitForm={submitForm} />
        </div>
    );
}

export default BookingPage