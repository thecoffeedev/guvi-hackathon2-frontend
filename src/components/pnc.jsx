import React, { useContext } from "react";
import { LoginContext } from "../App";

const PNC = () => {
  const [, setModalShow] = useContext(LoginContext);

  return (
    <div>
      <h1 className="m-3">Products & Categories</h1>
      <div className="col-md-3 mt-5 mb-5 text-center d-inline-block">
        <h4 className="mb-4">
          <u>Computer and Peripherals</u>
        </h4>
        <div className="border border-light prs p-3">
          <h5>Laptops</h5>
          <h5>Desktops</h5>
          <h5>Hard Disks</h5>
          <h5>Graphics Cards</h5>
          <h5>Cables & more ...</h5>
        </div>
      </div>
      <div className="col-md-3 mt-5 mb-5 text-center d-inline-block">
        <h4 className="mb-4">
          <u>Camera & Accessories</u>
        </h4>
        <div className="border border-light prs p-3">
          <h5>Cameras</h5>
          <h5>Lens & Filters</h5>
          <h5>Tripods</h5>
          <h5>Batteries</h5>
          <h5>Drones & more ...</h5>
        </div>
      </div>
      <div className="col-md-3 mt-5 mb-5 text-center d-inline-block">
        <h4 className="mb-4">
          <u>Music Instruments & DJ</u>
        </h4>
        <div className="border border-light prs p-3">
          <h5>Piano</h5>
          <h5>Guitars</h5>
          <h5>Mixers</h5>
          <h5>DJ Controllers</h5>
          <h5>Speakers & more ...</h5>
        </div>
      </div>
      <div className="col-md-3 mt-5 mb-5 text-center d-inline-block">
        <h4 className="mb-4">
          <u>Fitness equipments</u>
        </h4>
        <div className="border border-light prs p-3">
          <h5>Weights</h5>
          <h5>Dumbbells</h5>
          <h5>Treadmills</h5>
          <h5>Cycles</h5>
          <h5>Yoga Mats & more ...</h5>
        </div>
      </div>
      <h4>Check more products and rent now</h4>
      <button
        type="button"
        className="btn-lg btn-primary mt-3 mb-4"
        onClick={() => setModalShow(true)}
      >
        Get Started
      </button>
    </div>
  );
};

export default PNC;
