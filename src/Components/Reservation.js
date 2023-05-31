import React, { useState } from 'react'
import "./reservation.css"


function Reservation() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [seating, setSeating] = useState('');

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    const handleSeatingChange = (event) => {
        setSeating(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform reservation submission logic here
        console.log('Reservation submitted:', { date, time, seating });
        // Reset form fields
        setDate('');
        setTime('');
        setSeating('');
    };
    return (
        <>
            <div className='maindiv'>
                <h1 className='ReserveHeading'>Reservation Form</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Date :
                        <input type="date" value={date} onChange={handleDateChange} />
                    </label>
                    <br />
                    <br />
                    <label>
                        Time :
                        <input type="time" value={time} onChange={handleTimeChange} />
                    </label>
                    <br />
                    <br />
                    <label>
                    Occasion :
                        <select value={seating} onChange={handleSeatingChange}>
                            <option value="">-- Select --</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </select>
                    </label>
                    <br />
                    <br />
                    <label>
                        Num of guests :
                        <input type="number" value={seating} onChange={handleSeatingChange} />
                    </label>
                    <br />
                    <br />
                    <button type="submit" className='reserveBtn'>Reserve</button>
                </form>
            </div>
        </>
    );
}

export default Reservation
