import React, {useState} from 'react';
import { useInput } from '../util/customHooks';

const CreateReservation = ({restaurantName}) => {
    const name = useInput("");
    const email = useInput("");
    const phoneNumber = useInput("");
    const insta = useInput("");
    const date = useInput("");
    const time = useInput("");
    const [createReservation, setReservation] = useState([])

    const handleReservation = (e) => {
        let form = e.target
        e.preventDefault();
        setReservation([...createReservation,{
            name: `${name.value}`,
            insta: `${insta.value}`,
            date: `${date.value}`,
            time: `${time.value}`,
        }])
        form.reset();
    }
    
    // let existingReservations = localStorage.getItem("reservation")
    let reservations = createReservation.map((rez, i) => {
        localStorage.setItem(`${restaurantName}_reservations`, JSON.stringify(createReservation))
        return (
            <div key={i} className={"reservation"}>
                <p>Name: {rez.name}</p>
                <p>Insta: {rez.insta}</p>
                <p>Date: {rez.date}</p>
                <p>Time: {rez.time}</p>
            </div>
        )
    })

    return (
        <div>
        <div>
        <h3>Reserve Here</h3>
        <form onSubmit={handleReservation}>
            <input type="text" placeholder="Full Name" required {...name}/>
            <br/>
            <input type="text"  placeholder="Email Adress" required {...email}/>
            <br/>
            <input type="text" placeholder="Phone Number" required {...phoneNumber}/>
            <br/>
            <input type="text" placeholder="Drop Ya IG" required {...insta}/>
            <br/>
            <input type="date" {...date}/>
            <input type="time" {...time}/>
            <br/>
            <button type="submit">Create Reservation</button>
        </form>
        </div>
        <div>
            <h3>Existing Reservations</h3>
            {reservations}
        </div>
        </div>
    )
}

export default CreateReservation