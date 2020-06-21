import React from 'react'

const ExistingRes = ({restaurantName}) => {
    let reservation = localStorage.getItem(`${restaurantName}_reservations`)
     
    let reservations = reservation.map((rez, i) => {
        debugger
        return (
            <div key={i} className={"reservation"}>
                <p>Name: {rez.personOne.name}</p>
                <p>Insta: {rez.personOne.insta}</p>
                <p>Date: {rez.personOne.date}</p>
                <p>Time: {rez.personOne.time}</p>
                
            </div>
        )
    })

    return (
        <div>
            {reservations}
        </div>
    )
}

export default ExistingRes;