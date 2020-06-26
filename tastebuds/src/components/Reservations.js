import React, {useState} from 'react';
import { useInput } from '../util/customHooks';
import JoinReservation from './joinReservation';
import ExistingRes from './existingRes';
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import Congrats from './congrats'
import '../css/Reservations.css';

const CreateReservation = ({restaurantName}) => {
    const name = useInput("");
    const email = useInput("");
    const phoneNumber = useInput("");
    const insta = useInput("");
    const date = useInput("");
    const time = useInput("");
    const [id,setId] = useState(0);
    const [show, setShow] = useState(false);
    const [congrat, setCongrat] = useState(false);
    const [createReservation, setReservation] = useState([]);
    
    
    const handleClose = () => {
        setShow(false) 
        setCongrat(false)
    };

    const handleShow = (rezId) => {
        setShow(true);
        localStorage.setItem('resId',rezId);
    }

    const handleJoin = (e) => {
            e.preventDefault();
            let reservationID = localStorage.getItem(`resId`);
            setShow(false);
            setCongrat(true);
            
        const join = createReservation.map( (res,i) => {
                if(res.id+ "" === reservationID){
                   res.people = 2;
                }
            }) 
         }

    const handleReservation = (e) => {
        let form = e.target;
        setCongrat(true);
        e.preventDefault();
        setId(id+1);
        
        setReservation([...createReservation,{
                id: id,
                name: `${name.value}`,
                insta: `${insta.value}`,
                date: `${date.value}`,
                time: `${time.value}`,
                people: 1,
            
        }])
        form.reset();
        
    }
    

    let reservations = createReservation.map((rez, i) => {
        localStorage.setItem(`${restaurantName}_reservations`, JSON.stringify(createReservation))
        return (
            <div key={i} className={"reservation"}>
                <p>Name: {rez.name}</p>
                <p>Insta: {rez.insta}</p>
                <p>Date: {rez.date}</p>
                <p>Time: {rez.time}</p>
                <button onClick = {()=>  handleShow(rez.id) }>Join me!</button>
                
            </div>
        )
    })

    return (
        <div>
            <div className = 'split_two left_two'>
                <ExistingRes restaurantName={restaurantName} handleShow = {handleShow}/>
            </div>
        <div className = 'split_two right_two'>
        <h3 className = 'reserve_header'>Reserve Here</h3>
        <form onSubmit={handleReservation}>
            <input className = 'reserve_input' type="text" placeholder="Full Name" required {...name}/>
            <br/>
            <input className = 'reserve_input' type="text"  placeholder="Email Adress" required {...email}/>
            <br/>
            <input className = 'reserve_input' type="text" placeholder="Phone Number" required {...phoneNumber}/>
            <br/>
            <input className = 'reserve_input' type="text" placeholder="Drop Ya IG" required {...insta}/>
            <br/>
            <input className = 'reserve_input' type="date" {...date}/>
            <br/>
            <input className = 'reserve_input' type="time" {...time}/>
            <br/>
            <div className = 'reserve_checkbox'>
                <input type='checkbox' required/> I accept and agree to the <a href='/TermsPolicies'>Terms of Use</a>
            </div>
            <br/>
            <button className = 'reserve_button' type="submit">Create Reservation</button>
        </form>
        </div>
        <div>
           {congrat? <Congrats/>: null}
           

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Join me By Entering Info</Modal.Title>
                </Modal.Header>
                <Modal.Body> <JoinReservation handleJoin = {handleJoin} reservations = {createReservation}/> </Modal.Body>
                <Modal.Footer>
                <Button className = 'modalButton' variant="secondary" onClick={handleClose}>
                </Button>
                </Modal.Footer>
            </Modal>
            
        </div>
        </div>
    )
}

export default CreateReservation