import React from 'react';
import { useInput } from '../util/customHooks';

const CreateReservation = () => {
    const name = useInput("");
    const email = useInput("");
    const phoneNumber = useInput("");
    const insta = useInput("");
    const date = useInput("");
    const time = useInput("");

    const handleReservation = (e) => {
        debugger
    }

    return (
        <div>
        <h3>Reserve Here</h3>
        <form onSubmit={handleReservation}>
            <input type="text" placeholder="Full Name" {...name}/>
            <br/>
            <input type="text" placeholder="Email Adress" {...email}/>
            <br/>
            <input type="text" placeholder="Phone Number" {...phoneNumber}/>
            <br/>
            <input type="text" placeholder="Drop Ya IG" {...insta}/>
            <br/>
            <input type="date" {...date}/>
            <input type="time" {...time}/>
            <br/>
            <button type="submit">Create Reservation</button>
        </form>
        </div>
    )
}

export default CreateReservation