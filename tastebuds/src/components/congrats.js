import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'

 const Congrats = ({congrats}) => {
     const [show, setShow] = useState(congrats)

    const handleClose = () => setShow(false);

return (
<Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
    <Modal.Title>Congrats</Modal.Title>
    </Modal.Header>
    <Modal.Body>  </Modal.Body>
    <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
        Close
    </Button>
    </Modal.Footer>
</Modal>
)

}

export default Congrats