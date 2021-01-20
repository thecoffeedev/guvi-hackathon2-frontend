import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { SERVER } from "../App";

const AddProduct = (props) => {
  const addProduct = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    const prod = {
      productImg: formDataObj.productImg,
      productTitle: formDataObj.productTitle,
      productDesc: formDataObj.productDesc,
      price: parseInt(formDataObj.price),
      category: formDataObj.category.toLowerCase(),
      color: formDataObj.color,
    };
    const data = { product: prod };
    fetch(`${SERVER}/add-product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("urlWebToken"),
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Product
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={addProduct}>
          <Modal.Body>
            <Form.Group controlId="productTitle">
              <Form.Label>Product Title</Form.Label>
              <Form.Control placeholder="tripod" name="productTitle" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="productDesc"
                placeholder="write something about the product"
              />
            </Form.Group>
            <Form.Group controlId="imageLink">
              <Form.Label>Product Image Link</Form.Label>
              <Form.Control
                placeholder="https://blah-blah-blah/image-address.jpg"
                name="productImg"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" name="category">
                <option>Computer and Peripherals</option>
                <option>Camera and Accessories</option>
                <option>Music Instruments and DJ</option>
                <option>Fitness equipments</option>
              </Form.Control>
              <Form.Text className="text-muted">
                Currently you can only add products in these categories.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="color">
              <Form.Label>Color</Form.Label>
              <Form.Control placeholder="green" name="color" />
            </Form.Group>
            <Form.Group controlId="loginpwd">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" defaultValue="1" name="price" />
              <Form.Text className="text-muted">In Dollars ($)</Form.Text>
            </Form.Group>
            <Form.Label>
              NOTE : Please refresh page after adding the product.
            </Form.Label>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={props.onHide}>
              Add
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default AddProduct;
