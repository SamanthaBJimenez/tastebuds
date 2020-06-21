import React from 'react'
import { useInput } from '../util/customHooks';

const JoinReservation = ({restaurantName}) => {
    const name = useInput("");
    const email = useInput("");
    const phoneNumber = useInput("");
    const insta = useInput("");
    let reservation = localStorage.getItem(`${restaurantName}_reservations`)
    

    const handleJoin = (e) => {
        e.preventDefault();
        debugger
    }



    return(
        <form onSubmit={handleJoin}>
            <input type="text" placeholder="Full Name" required {...name}/>
            <br/>
            <input type="text"  placeholder="Email Adress" required {...email}/>
            <br/>
            <input type="text" placeholder="Phone Number" required {...phoneNumber}/>
            <br/>
            <input type="text" placeholder="Drop Ya IG" required {...insta}/>
            <br/>
            <input type='checkbox'/>Terms/policy
            <button type="submit">Join Reservation</button>
        </form>
    )

}

export default JoinReservation;