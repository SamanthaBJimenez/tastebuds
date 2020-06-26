import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'

 const Congrats = () => {
     const [show, setShow] = useState(true)

    const handleClose = () => setShow(false);

return (
<Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
    <Modal.Title>Congrats on your Reservation</Modal.Title>
    </Modal.Header>
    <Modal.Body> You created a Reservation, Please check your email for reservation details </Modal.Body>
    <Modal.Footer>
    </Modal.Footer>
</Modal>
)

}

export default Congrats