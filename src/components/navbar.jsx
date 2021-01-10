import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import cart from "../assets/images/shopping-cart.png";
import { LoginContext } from "../App";
import { IsLoggedIn } from "../App";

const NavCont = () => {
  const [, setModalShow] = useContext(LoginContext);
  const [loggedIn, setLoggedIn] = useContext(IsLoggedIn);

  const logout = () => {
    sessionStorage.clear();
    setLoggedIn(false);
  };

  return (
    <Navbar
      id="nav-panel"
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="text-center"
    >
      <Navbar.Brand href="/">
        <img id="logo" src={logo} alt="logo" />
        <h1 id="title" className="d-inline-block">
          Equirent
        </h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="mr-5" href="/contact">
            <h5>Contact Us</h5>
          </Nav.Link>
          <Nav.Link className="mr-5" eventKey={2} href="/about">
            <h5>About Us</h5>
          </Nav.Link>
          <Nav.Link className="mr-5" eventKey={3} href="/products">
            <h5>Products</h5>
          </Nav.Link>
          {loggedIn ? (
            <Nav.Link className="mr-5" onClick={logout}>
              <h5>Logout</h5>
            </Nav.Link>
          ) : (
            <Nav.Link className="mr-5" onClick={() => setModalShow(true)}>
              <h5>Login</h5>
            </Nav.Link>
          )}
          <Nav.Link className="mr-5 text-center" eventKey={2} href="/cart">
            <img src={cart} alt="" id="cart-img" width="34px" />
            <div id="cart-count">0</div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavCont;
