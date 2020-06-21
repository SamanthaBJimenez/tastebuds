import React, {useState} from 'react';
import { useInput } from '../util/customHooks';
import JoinReservation from './joinReservation';
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'

const CreateReservation = ({restaurantName}) => {
    const name = useInput("");
    const email = useInput("");
    const phoneNumber = useInput("");
    const insta = useInput("");
    const date = useInput("");
    const time = useInput("");
    const [show, setShow] = useState(false);
    const [createReservation, setReservation] = useState([]);
    let id = 0;
    
    const handleClose = () => setShow(false);

    const handleReservation = (e,) => {
        let form = e.target
        e.preventDefault();
        id++;
        setReservation([...createReservation,{
            id :{
                name: `${name.value}`,
                insta: `${insta.value}`,
                date: `${date.value}`,
                time: `${time.value}`,
            }
        }])
        form.reset();
    }
    
    // let existingReservations = localStorage.getItem("reservation")
    let reservations = createReservation.map((rez, i) => {
        localStorage.setItem(`${restaurantName}_reservations`, JSON.stringify(createReservation))
        return (
            <div key={i} className={"reservation"}>
                <p>Name: {rez.id.name}</p>
                <p>Insta: {rez.id.insta}</p>
                <p>Date: {rez.id.date}</p>
                <p>Time: {rez.id.time}</p>
                <button onClick = {()=> setShow(true)}>Join me!</button>
                
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
            <input type='checkbox'/>Terms/policy
            <button type="submit">Create Reservation</button>
        </form>
        </div>
        <div>
            <h3>Existing Reservations</h3>
            {reservations}
            {/* <JoinReservation/> */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Join me By Entering Info</Modal.Title>
                </Modal.Header>
                <Modal.Body> <JoinReservation/> </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
            
        </div>
        </div>
    )
}

export default CreateReservation