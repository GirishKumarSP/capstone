import React, { useState } from 'react'
import './BookingForm.css';

function BookingForm(props) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [seating, setSeating] = useState('');
    const [occasion, setOccasion] = useState("birthday")

    const { availableTimes, dispatch } = props;

    const handleDateChange = (event) => {
        const selectedDate = `"${event.target.value}"`;
        const finalDate = new Date(selectedDate);
        setDate(event.target.value);

        dispatch({ type: 'UPDATE_TIMES', date: finalDate });
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value)
    }

    const handleSeatingChange = (event) => {
        setSeating(event.target.value)
    }

    const handleOccasionChange = (event) => {
        setOccasion(event.target.value)
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    };

    return (
        <div className="bookingContainer">
            <div className="left">
                <h1>Welcome to our Booking Form!</h1>
                <p className='bookingDescription'>Embark on a remarkable journey of personalized service and remarkable experiences, as we redefine the art of booking and cater to your every desire.</p>
            </div>
            <div className="right">
                <form className="booking-form" onSubmit={handleSumbit}>

                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" value={date} onChange={handleDateChange} required/>

                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time" value={time} onChange={handleTimeChange} >
                        {availableTimes && availableTimes.map((timeOption) => (
                            <option key={timeOption}>{timeOption}</option>
                        ))}
                    </select>

                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" value={seating} onChange={handleSeatingChange} />

                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={occasion} onChange={handleOccasionChange}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>

                    {/* <Link to="/reservationConfirmation"> */}
                    <input type="submit" value="Make Your reservation" />
                    {/* </Link> */}

                </form>
            </div>
        </div>
    )
}

export default BookingForm


