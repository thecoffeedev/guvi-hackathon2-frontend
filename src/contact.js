import React, { useContext } from "react";
import NavCont from "./components/navbar";
import Login from "./components/loginModal";
import { LoginContext } from "./App";
import { Form, Button } from "react-bootstrap";
import Footer from "./components/footer";

const Contact = () => {
  const [modalShow, setModalShow] = useContext(LoginContext);

  return (
    <React.Fragment>
      <div className="App container-fluid">
        <Login show={modalShow} onHide={() => setModalShow(false)} />
        <div className="row">
          <div className="col-12 contact-cont">
            <NavCont />
            <h1 className="text-white col-12 text-center mb-4 mt-4">
              Contact Us
            </h1>
            <h5 className="col-md-4 offset-md-4 rounded bg-danger text-white p-3 mb-3 text-center d-inline-block">
              🎉Hello Guys!!!🎊
              <br />
              We are really happy to connect.
              <br />
              Please GO ahead and fill up your details.
            </h5>
            <div className="bg-light p-5 col-md-6 offset-md-3 rounded mb-5">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="joe@mail.com" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Can we do a subscription based rental?"
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="blah blah blah"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Already a member?" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 footer-cont">
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Contact;
