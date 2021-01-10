import React, { useState, createContext, useEffect } from "react";
import NavCont from "./components/navbar";
import CarouselDiv from "./components/carousel";
import Testimonials from "./components/testimonials";
import PNC from "./components/pnc";
import Footer from "./components/footer";
import Login from "./components/loginModal";

export const LoginContext = createContext();
export const IsLoggedIn = createContext();

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  // const [webToken, setWebToken] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("urlWebToken")) {
      fetch(`http://localhost:5500/is-session-active`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: sessionStorage.getItem("urlWebToken"),
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setLoggedIn(true);
          console.log(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <LoginContext.Provider value={[modalShow, setModalShow]}>
      <IsLoggedIn.Provider value={[loggedIn, setLoggedIn]}>
        <div className="App container-fluid">
          <div className="row">
            <div className="col-12 top-cont">
              <NavCont />
              <div
                className="col-md-6"
                style={{ color: "white", marginTop: "200px" }}
              >
                <h1>Want to use High end equipments without owning them?</h1>
                <p>
                  This is right chance to rent high-end equipments to show the
                  quality in what you do.
                  <br /> Jump right in to get huge offers...
                </p>
                <button
                  type="button"
                  className="btn-lg btn-primary mt-3 mb-3"
                  onClick={() => setModalShow(true)}
                >
                  {loggedIn ? "Jump right in" : "Login / Register"}
                </button>
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
          </div>
        </div>
      </IsLoggedIn.Provider>
    </LoginContext.Provider>
  );
}

export default App;
