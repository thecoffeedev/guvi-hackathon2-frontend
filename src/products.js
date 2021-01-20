import React, { useContext, useEffect, useState } from "react";
import NavCont from "./components/navbar";
import Login from "./components/loginModal";
import { LoginContext, SERVER } from "./App";
import { Form, Col, Row, Card, Button } from "react-bootstrap";
import addCart from "./assets/images/add-to-cart.png";
import AddProduct from "./components/addProductModal";
import Footer from "./components/footer";

const Products = () => {
  const [modalShow, setModalShow] = useContext(LoginContext);

  const [products, setProducts] = useState([]);
  const [addPro, setAddPro] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [role, setRole] = useState("");
  const [userItems, setUserItems] = useState([]);
  const [count, setCount] = useState(0);

  const getProducts = (category) => {
    fetch(`${SERVER}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filter: category,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addCartItem = (id) => {
    fetch(`${SERVER}/add-to-cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("urlWebToken"),
      },
      body: JSON.stringify({
        item_id: id,
        quantity: 1,
        from: "",
        to: "",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        cartCount();
      });
  };

  const cartCount = () => {
    fetch(`${SERVER}/user-products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("urlWebToken"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUserItems(res.result.cart);
        setCount(res.result.cart.length);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const categChange = (e) => {
    getProducts(e.target.value);
  };

  const textHandleChange = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const filteredData = (searchText, products) => {
    if (searchText === "") return products;
    return products.filter((product) =>
      product.productTitle.toLowerCase().startsWith(searchText)
    );
  };

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
          setRole(res.result.role);
          getProducts("all");
        })
        .catch((err) => {
          console.log(err);
          getProducts("all");
        });
      cartCount();
    }
  }, []);

  return (
    <React.Fragment>
      <div className="App container-fluid">
        <Login show={modalShow} onHide={() => setModalShow(false)} />
        <div className="row">
          <div className="col-12 pb-5" style={{ backgroundColor: "#242325" }}>
            <NavCont cartItems={count} />
            <div className="text-white text-center col-md-6 mt-4 d-inline-block">
              <h1>Products</h1>
            </div>
            <div className="text-white text-center col-md-6 mt-4 d-inline-block">
              <Form>
                <Row>
                  <Col className="col-md-4">
                    <Form.Control as="select" onChange={categChange}>
                      <option value="all">All</option>
                      <option value="computer and peripherals">
                        Computer and Peripherals
                      </option>
                      <option value="camera and accessories">
                        Camera and Accessories
                      </option>
                      <option value="music instruments and dj">
                        Music Instruments and DJ
                      </option>
                      <option value="fitness equipments">
                        Fitness equipments
                      </option>
                    </Form.Control>
                  </Col>
                  <Col className="col-md-4">
                    <Form.Control
                      placeholder="Search"
                      onChange={textHandleChange}
                    />
                  </Col>
                  {role === "ADMIN" ? (
                    <Col className="col-md-4">
                      <Button type="button" onClick={() => setAddPro(true)}>
                        <strong>&#43;</strong> Product
                      </Button>
                    </Col>
                  ) : null}
                </Row>
              </Form>
            </div>
            <AddProduct show={addPro} onHide={() => setAddPro(false)} />
            <div className="mt-5 text-center">
              {filteredData(searchText, products).length === 0 &&
              searchText.length !== 0 ? (
                <h2 className="text-danger">
                  Sorry, the products related to your search is not available!
                </h2>
              ) : (
                filteredData(searchText, products).map((item, index) => (
                  <Card
                    key={index}
                    className="col-md-3 m-md-4 mb-4 d-inline-block"
                  >
                    <Card.Img
                      variant="top"
                      className="card-images"
                      src={item.productImg}
                    />
                    <Card.Body>
                      <Card.Title>{item.productTitle}</Card.Title>
                      <Card.Text className="text-left font-weight-bold">
                        <strong className="text-secondary">Category : </strong>
                        <em className="text-primary descpt">{item.category}</em>
                        <strong className="text-secondary">
                          Description :{" "}
                        </strong>
                        <em className="text-primary descpt">
                          {item.productDesc}
                        </em>
                        <strong className="text-secondary">Color : </strong>
                        <em className="text-primary">{item.color}</em>
                        <br />
                        <strong className="text-secondary">Price : </strong>
                        <span className="text-success">
                          &nbsp;
                          <em
                            className="text-danger"
                            style={{ textDecoration: "line-through" }}
                          >
                            ${item.price + 27}
                          </em>
                        </span>
                        <br />
                      </Card.Text>
                      <div className="col-12 text-justify p-0">
                        <div className="col-6 d-inline-block">
                          <h2 className="text-success">${item.price}</h2>
                        </div>
                        <div className="col-6 d-inline-block text-right">
                          {userItems
                            .map((useritem) =>
                              useritem[0].item_id === item._id ? true : false
                            )
                            .includes(true) ? (
                            <Button
                              variant="warning"
                              className="text-primary"
                              disabled={true}
                              onClick={(e) => addCartItem(item._id)}
                            >
                              <img src={addCart} alt="" className="addcart" />
                            </Button>
                          ) : (
                            <Button
                              variant="warning"
                              className="text-light"
                              onClick={(e) => addCartItem(item._id)}
                            >
                              <img src={addCart} alt="" className="addcart" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                ))
              )}
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

export default Products;
