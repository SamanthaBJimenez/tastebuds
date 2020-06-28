import React, {useState} from 'react'
import { useInput } from '../util/customHooks';
import '../css/joinReservation.css';

const JoinReservation = ({reservations, handleJoin}) => {
    const name = useInput("");
    const email = useInput("");
    const phoneNumber = useInput("");
    const insta = useInput("");
    let reservationID = localStorage.getItem(`resId`)
    const [createReservation, setReservation] = useState(reservations);
    


    return(
        
        <form onSubmit={(e) => handleJoin(e, name,email,phoneNumber,insta)}>
            <input className = 'join_input' type="text" placeholder="Full Name" required {...name}/>
            <br/>
            <input className = 'join_input' type="text"  placeholder="Email Adress" required {...email}/>
            <br/>
            <input className = 'join_input' type="text" placeholder="Phone Number" required {...phoneNumber}/>
            <br/>
            <input className = 'join_input' type="text" placeholder="Drop Ya IG" required {...insta}/>
            <br/>
            <input type='checkbox' required/> I accept and agree to the <a href='/TermsPolicies'>Terms of Use</a>
            <br/>
            <button className = 'join_button' type="submit">Join Reservation</button>
        </form>
    )

}

export default JoinReservation;