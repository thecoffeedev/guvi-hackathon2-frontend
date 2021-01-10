import React, {useContext} from 'react';
import {Modal, Button, Form} from 'react-bootstrap'
import {IsLoggedIn} from '../App'

function Login(props) {

    const [loggedIn, setLoggedIn] = useContext(IsLoggedIn);
    const url = 'http://localhost:5500';

    const login = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target),
              formDataObj = Object.fromEntries(formData.entries())
        const data = {
            email: formDataObj.loginEmail,
            password: formDataObj.loginPassword
        }
        fetch(`${url}/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then((res) => {
            setLoggedIn(!loggedIn)
            sessionStorage.setItem('urlWebToken', res.token)
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Login / Register
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="col-md-6 d-inline-block mt-4 mt-md-0">
                    <h3 className='mb-4' style={{color: 'green'}}>Already in the family? &#129392;</h3>
                    <h4>Login</h4>
                    <Form onSubmit={login}>
                        <Form.Group controlId="loginemail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name='loginEmail' />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="loginpwd">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name='loginPassword' />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={props.onHide}>
                            Login
                        </Button>
                    </Form>
                </div>
                <div className="col-md-6 d-inline-block mt-4 mt-md-0">
                    <h4>Register</h4>
                    <Form>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="First name" />
                        </Form.Group>
                        <Form.Group controlId="regemail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="regpwd">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                </div>
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
  }

  export default Login;