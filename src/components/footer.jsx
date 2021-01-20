import React, { useContext } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoginContext } from "../App";

const Footer = () => {
  const [, setModalShow] = useContext(LoginContext);

  return (
    <div className="row">
      <div className="col-md-6 p-4 text-center">
        <h1 className="font-weight-light mt-5">
          We Listen
          <br /> Your Prosper
        </h1>
        <h5 className="font-weight-light mt-4">
          Stay update with our products and services
        </h5>
        <Form>
          <Form.Row className="align-items-center mt-4">
            <Col sm={6} className="my-1 offset-sm-2">
              <Form.Label htmlFor="inlineFormInputEmail" srOnly>
                Name
              </Form.Label>
              <Form.Control
                type="email"
                id="inlineFormInputEmail"
                placeholder="email"
              />
            </Col>
            <Col sm={2} className="my-1">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </div>
      <div className="col-md-6 p-4 text-center mt-md-5">
        <div className="col-md-6 d-inline-block mt-3">
          <h4 className="mb-4">
            <u>SITE MAP</u>
          </h4>
          <p>
            <Link to="/contact" className="links">
              Contact
            </Link>
            <br />
            <br />
            <Link to="/about" className="links">
              About
            </Link>
            <br />
            <br />
            <Link to="" className="links" onClick={() => setModalShow(true)}>
              Login / Register
            </Link>
          </p>
        </div>
        <div className="col-md-6 d-inline-block mt-3">
          <h4 className="mb-4">
            <u>CONNECT</u>
          </h4>
          <p>
            <a href="#fb" className="links" target="_blank">
              Facebook
            </a>
            <br />
            <br />
            <a href="#twt" className="links" target="_blank">
              Twitter
            </a>
            <br />
            <br />
            <a href="#lin" className="links" target="_blank">
              Linked In
            </a>
          </p>
        </div>
      </div>
      <div className="col-12 text-center mt-5">
        <h5>&#169; 2021 Equirent - Made in &#10084; with programming</h5>
      </div>
    </div>
  );
};

export default Footer;
