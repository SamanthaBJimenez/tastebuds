import React, {useState} from 'react'
import { useInput } from '../util/customHooks';

const JoinReservation = ({reservations, handleJoin}) => {
    const name = useInput("");
    const email = useInput("");
    const phoneNumber = useInput("");
    const insta = useInput("");
    let reservationID = localStorage.getItem(`resId`)
    const [createReservation, setReservation] = useState(reservations);
    
    // debugger

    // const handleJoin = (e) => {
    //     e.preventDefault();

    //     const join = createReservation.map( (res,i) => {
    //         if(res.id+ "" === reservationID){
    //             setReservation([...createReservation,{
    //                 acommpany: {
    //                     name: `${name.value}`,
    //                     insta: `${insta.value}`,
    //                 }
        
    //             }])
    //         }
    //         console.log(createReservation)
    //         debugger
           
    //     })

    // }



    return(
        
        <form onSubmit={(e) => handleJoin(e, name,email,phoneNumber,insta)}>
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