import React from 'react'

const ExistingRes = ({restaurantName, handleShow}) => {
    let reservation = localStorage.getItem(`${restaurantName}_reservations`)
    let currentRes = JSON.parse(reservation)
    let reservations = []

    if(currentRes != null){
         reservations = currentRes.map((rez, i) => {
            if(rez.people === 1){
                return (
                    <div key={i} className={"reservation"}>
                        <p>Name: {rez.name}</p>
                        <p>Insta: {rez.insta}</p>
                        <p>Date: {rez.date}</p>
                        <p>Time: {rez.time}</p>
                        <button onClick = {()=>  handleShow(rez.id) }>Join me!</button>
                    </div>
                )
            }
           
        })
    }

    return (
        <div>
            <h3>Existing Reservations</h3>
            {reservations}
        </div>
    )
}

export default ExistingRes;