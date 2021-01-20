import React from "react";
import { Card } from "react-bootstrap";

const TestiCards = () => {
  return (
    <div className="col-12 text-center">
      <Card
        className="col-md-4 mt-4 m-md-5 d-inline-block"
        style={{
          width: "18rem",
          borderRadius: "15px",
          height: "400px",
          border: "2px solid green",
        }}
      >
        <Card.Body>
          <div className="profile mb-4 mt-3">
            {" "}
            <img
              src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583336/AAA/4.jpg"
              alt=""
            />{" "}
          </div>
          <Card.Text>
            <span className="text-muted">
              <span className="d-inline-block">&#10077;</span>
              <em>
                <strong>
                  &nbsp;This Company focuses on delivering quality services by
                  providing the best renting services in the market&nbsp;
                </strong>
              </em>
              <span className="d-inline-block">&#10078;</span>
            </span>
          </Card.Text>
          <div className="text-right mt-3">
            <h4 className="m-2">- Anderson</h4>
            <h6>
              Senior executive
              <br /> abhahama industries
            </h6>
          </div>
        </Card.Body>
      </Card>
      <Card
        className="col-md-4 mt-4 m-md-5 d-inline-block"
        style={{
          width: "18rem",
          borderRadius: "15px",
          height: "400px",
          border: "2px solid green",
        }}
      >
        <Card.Body>
          <div className="profile mb-4 mt-3">
            {" "}
            <img
              src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583246/AAA/2.jpg"
              alt=""
            />{" "}
          </div>
          <Card.Text>
            <span className="text-muted">
              <span className="d-inline-block">&#10077;</span>
              <em>
                <strong>
                  &nbsp;Wonderful!!! amazing services. best rigs in the market
                  with affordable prices. Definitely recommend to anyone&nbsp;
                </strong>
              </em>
              <span className="d-inline-block">&#10078;</span>
            </span>
          </Card.Text>
          <div className="text-right mt-3">
            <h4 className="m-2">- Simon</h4>
            <h6>
              Digital Marketer
              <br /> HB
            </h6>
          </div>
        </Card.Body>
      </Card>
      <Card
        className="col-md-4 mt-4 m-md-5 d-inline-block"
        style={{
          width: "18rem",
          borderRadius: "15px",
          height: "400px",
          border: "2px solid green",
        }}
      >
        <Card.Body>
          <div className="profile mb-4 mt-3">
            {" "}
            <img
              src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583319/AAA/3.jpg"
              alt=""
            />{" "}
          </div>
          <Card.Text>
            <span className="text-muted">
              <span className="d-inline-block">&#10077;</span>
              <em>
                <strong>
                  &nbsp;If you are a beginner and don't know what to do and
                  where to buy new equipments? stick with this guys. Worth
                  it.&nbsp;
                </strong>
              </em>
              <span className="d-inline-block">&#10078;</span>
            </span>
          </Card.Text>
          <div className="text-right mt-3">
            <h4 className="m-2">- Gary</h4>
            <h6>
              HR
              <br /> Dhane LTD
            </h6>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TestiCards;
