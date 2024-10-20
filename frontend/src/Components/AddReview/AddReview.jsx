import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const AddReview = (props) => {
    const [review, setReview] = useState('');

    const [show, setShow] = useState(false);

    const handleSubmit = () => {
        console.log(review);
        setShow(false);

        try {
            const response = axios.post(`http://localhost:4000/newReview?mediaId=${props.mediaId}`, 
            {review},
            {
                headers:
                {
                    'Accept': 'application/form-data',
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json'
                }
            });
            console.log(response);

        }
        catch (error) {
            console.error('Error:', error);
        }
    }
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Add Your Review
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-dark'>Add Review</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Control
                                as="textarea"
                                rows={5}
                                onChange={(e) => setReview(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleSubmit}>
                        Add Review
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddReview