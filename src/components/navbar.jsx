import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import cart from "../assets/images/shopping-cart.png";
import { LoginContext, IsLoggedIn } from "../App";

const NavCont = (props) => {
  const [modalShow, setModalShow] = useContext(LoginContext);
  const [loggedIn, setLoggedIn] = useContext(IsLoggedIn);

  const logout = () => {
    sessionStorage.clear();
    setLoggedIn(false);
  };

  return (
    <Navbar id="nav-panel" collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="/">
        <img id="logo" src={logo} alt="logo" />
        <h1 id="title" className="d-inline-block">
          Equirent
        </h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link className="mr-5 mt-4 nav-links" to="/">
            <h5>Home</h5>
          </Link>
          <Link className="mr-5 mt-4 nav-links" to="/contact">
            <h5>Contact</h5>
          </Link>
          <Link className="mr-5 mt-4 nav-links" to="/about">
            <h5>About</h5>
          </Link>
          <Link className="mr-5 mt-4 nav-links" to="/products">
            <h5>Products</h5>
          </Link>
          {loggedIn ? (
            <Link to="" className="mr-5 mt-4 nav-links" onClick={logout}>
              <h5>Logout</h5>
            </Link>
          ) : (
            <Link
              to=""
              className="mr-5 mt-4 nav-links"
              onClick={() => setModalShow(!modalShow)}
            >
              <h5>Login</h5>
            </Link>
          )}
          <Link className="mr-3 mt-3 nav-links" to="/cart">
            <img src={cart} alt="" id="cart-img" width="34px" />
            {props.cartItems ? (
              <div id="cart-count">{props.cartItems}</div>
            ) : null}
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavCont;
