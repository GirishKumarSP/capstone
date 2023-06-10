import React, { useState } from 'react'

function BookingForm(props) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [seating, setSeating] = useState('');
    const [occasion, setOccasion] = useState("birthday")

    //old code before creating reducer
    // const { availableTimes,setAvailableTimes } = props;
    const { availableTimes, dispatch } = props;

    // const handleDateChange = (event) => {
    //     setDate(event.target.value)
    // }

    // my code
    // ---------------
    // const handleDateChange = (event) => {
    //     const selectedDate = event.target.value;
    //     console.log(selectedDate)
    //     setDate(selectedDate);
    //     dispatch({ type: 'UPDATE_TIMES', times: date }); // Modify this logic to update available times based on the selected date
    // }
    // --------------

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

    return (
        <div>
            <h1>Book Now</h1>
            <h1>Welcome to our Booking Form!</h1>
            <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>

                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={handleDateChange} />

                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={time} onChange={handleTimeChange}>
                    {/* {availableTimes.map((timeOption) => (
                        <option key={timeOption}>{timeOption}</option>
                    ))} */}
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

                <input type="submit" value="Make Your reservation" />

            </form>

        </div>
    )
}

export default BookingForm


