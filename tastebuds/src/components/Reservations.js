import React, { useState } from "react";
import { useInput } from "../util/customHooks";
import JoinReservation from "./joinReservation";
import ExistingRes from "./existingRes";
import { Modal } from "react-bootstrap";
import Congrats from "./congrats";
import "../css/Reservations.css";

const CreateReservation = ({ restaurantName }) => {
  const name = useInput("");
  const email = useInput("");
  const phoneNumber = useInput("");
  const insta = useInput("");
  const date = useInput("");
  const time = useInput("");
  const [id, setId] = useState(0);
  const [show, setShow] = useState(false);
  const [congrat, setCongrat] = useState(false);
  const [createReservation, setReservation] = useState([]);

  const handleClose = () => {
    setShow(false);
    setCongrat(false);
  };

  const handleShow = (rezId) => {
    setShow(true);
    localStorage.setItem("resId", rezId);
  };

  const handleJoin = (e) => {
    e.preventDefault();
    let reservationID = localStorage.getItem(`resId`);
    setShow(false);
    setCongrat(true);

    createReservation.map((res) => {
      if (res.id + "" === reservationID) {
        res.people = 2;
      }
    });
  };

  const handleReservation = (e) => {
    setCongrat(true);
    e.preventDefault();
    setId(id + 1);

    setReservation([
      ...createReservation,
      {
        id: id,
        name: `${name.value}`,
        insta: `${insta.value}`,
        date: `${date.value}`,
        time: `${time.value}`,
        people: 1,
      },
    ]);
    name.reset();
    email.reset();
    phoneNumber.reset();
    insta.reset();
    date.reset();
    time.reset();
  };

  let reservations = createReservation.map((rez, i) => {
    localStorage.setItem(
      `${restaurantName}_reservations`,
      JSON.stringify(createReservation)
    );
    return (
      <div key={i} className={"reservation"}>
        <p>Name: {rez.name}</p>
        <p>Insta: {rez.insta}</p>
        <p>Date: {rez.date}</p>
        <p>Time: {rez.time}</p>
        <button onClick={() => handleShow(rez.id)}>Join me!</button>
      </div>
    );
  });

  return (
    <div>
      <div className="split_two left_two">
        <ExistingRes restaurantName={restaurantName} handleShow={handleShow} />
      </div>
      <div className="split_two right_two">
        <h3 className="reserve_header">Reserve Here</h3>
        <form onSubmit={handleReservation}>
          <input
            className="reserve_input"
            type="text"
            placeholder="Full Name"
            required
            {...name}
          />
          <br />
          <input
            className="reserve_input"
            type="email"
            placeholder="Email Adress"
            required
            {...email}
          />
          <br />
          <input
            className="reserve_input"
            type="tel"
            placeholder="Phone Number"
            required
            {...phoneNumber}
          />
          <br />
          <input
            className="reserve_input"
            type="text"
            placeholder="Instagram"
            {...insta}
          />
          <br />
          <input className="reserve_input" type="date" {...date} />
          <br />
          <input className="reserve_input" type="time" step="900" {...time} />
          <br />
          <div className="reserve_checkbox">
            <input type="checkbox" required /> I accept and agree to the{" "}
            <a href="/TermsPolicies">Terms of Use</a>
          </div>
          <br />
          <button className="reserve_button" type="submit">
            Create Reservation
          </button>
        </form>
      </div>
      <div>
        {congrat ? <Congrats /> : null}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Join me By Entering Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <JoinReservation
              handleJoin={handleJoin}
              reservations={reservations}
            />{" "}
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default CreateReservation;
