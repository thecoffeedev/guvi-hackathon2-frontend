import React, { useState, createContext, useEffect } from "react";
import Routes from "./routes";

export const LoginContext = createContext([false, () => {}]);
export const IsLoggedIn = createContext([false, () => {}]);

export const SERVER = "https://guvi-hackathon2-anand.herokuapp.com";
// export const SERVER = "http://localhost:5500";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("urlWebToken")) {
      fetch(`${SERVER}/active-session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: sessionStorage.getItem("urlWebToken"),
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setLoggedIn(true);
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
            <Routes />
          </div>
        </div>
      </IsLoggedIn.Provider>
    </LoginContext.Provider>
  );
}

export default App;
