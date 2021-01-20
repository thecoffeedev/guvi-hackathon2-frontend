import React, { useContext } from "react";
import NavCont from "./components/navbar";
import Login from "./components/loginModal";
import { LoginContext } from "./App";
import Footer from "./components/footer";

const About = () => {
  const [modalShow, setModalShow] = useContext(LoginContext);

  return (
    <React.Fragment>
      <div className="App container-fluid">
        <Login show={modalShow} onHide={() => setModalShow(false)} />
        <div className="row">
          <div className="col-12 about-cont">
            <NavCont />
            <h1 className="text-white col-12 text-center mb-5 mt-4">
              About Us
            </h1>
            <div className="text-light col-md-8 offset-md-2">
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                nisl eros, pulvinar facilisis justo mollis, auctor consequat
                urna. Morbi a bibendum metus. Donec scelerisque sollicitudin
                enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci
                vestibulum eget. Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos.
                <br />
                <br /> Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum
                lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu
                nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat
                faucibus libero, at maximus nisl suscipit posuere. Morbi nec
                enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed
                sollicitudin elit convallis. Cras pharetra mi tristique sapien
                vestibulum lobortis. Nam eget bibendum metus, non dictum mauris.
                Nulla at tellus sagittis, viverra est a, bibendum metus.
              </h4>
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

export default About;
