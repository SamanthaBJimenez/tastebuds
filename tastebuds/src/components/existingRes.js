import React from 'react'
import '../css/existingRes.css';

const ExistingRes = ({restaurantName, handleShow}) => {
    let reservation = localStorage.getItem(`${restaurantName}_reservations`)
    let currentRes = JSON.parse(reservation)
    let reservations = []

    if(currentRes != null){
         reservations = currentRes.map((rez, i) => {
            if(rez.people === 1){
                return (
                    <div key={i} className={"reservation"}>
                        <p className = 'exist_info'>Name: <b>{rez.name}</b></p>
                        <p className = 'exist_info'>Insta: <b>{rez.insta}</b></p>
                        <p className = 'exist_info'>Date: <b>{rez.date}</b></p>
                        <p className = 'exist_info'>Time: <b>{rez.time}</b></p>
                        <button className = 'exist_button' onClick = {()=>  handleShow(rez.id) }>Join me!</button>
                    </div>
                )
            }
           
        })
    }

    return (
        <div>
            <h3 className = 'exist_header'>Existing Reservations</h3>
            {reservations}
        </div>
    )
}

export default ExistingRes;