import React, { useContext } from "react";
import NavCont from "./components/navbar";
import CarouselDiv from "./components/carousel";
import Testimonials from "./components/testimonials";
import PNC from "./components/pnc";
import Footer from "./components/footer";
import Login from "./components/loginModal";
import { LoginContext, IsLoggedIn } from "./App";
import { Link } from "react-router-dom";

const Home = () => {
  const [modalShow, setModalShow] = useContext(LoginContext);
  const [loggedIn] = useContext(IsLoggedIn);

  return (
    <React.Fragment>
      <div className="col-12 top-cont">
        <NavCont />
        <div className="col-md-6" style={{ color: "white", marginTop: "10vw" }}>
          <h1>Want to use High end equipments without owning them?</h1>
          <p>
            This is right chance to rent high-end equipments to show the quality
            in what you do.
            <br /> Jump right in to get huge offers...
          </p>
          {loggedIn ? (
            <Link to="/products">
              <button type="button" className="btn-lg btn-primary mt-3 mb-3">
                Jump right in
              </button>
            </Link>
          ) : (
            <button
              type="button"
              className="btn-lg btn-primary mt-3 mb-3"
              onClick={() => setModalShow(true)}
            >
              Login / Register
            </button>
          )}

          <Login show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
      <div className="col-12 products-cont">
        <CarouselDiv />
      </div>
      <div className="col-12 test-cont">
        <Testimonials />
      </div>
      <div className="col-12 prod-cont">
        <PNC />
      </div>
      <div className="col-12 footer-cont">
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
