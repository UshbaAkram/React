import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  CardHeader,
  CardBody,
  CardImg,
  CardSubtitle,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: product,
    ispending,
    err,
  } = useFetch("http://localhost:5000/products/" + id);
  const handelDel = () => {
    fetch("http://localhost:5000/products/" + product.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="blog-detail">
      {ispending && <h3>Loading..</h3>}
      {err && <h3>Oops! Error Found {err}</h3>}
      {product && (
        <>   
       <Link className="btn btn-light my-3" to="/">Go Back</Link>

          <div className="card">
            <Card style={{ width: "30rem" }} className="m-auto">
              <CardHeader>
                <h3>{product.name}</h3>
              </CardHeader>
              <Card.Img variant="top" src={product.image} />
              <CardBody>
                <p>{product.description}</p>
                <CardSubtitle> Price: ${product.price}</CardSubtitle>

                <div className="cardButtons">
                  
                    <Button className="btn-block btn-success" type="button">
                      Add to Cart<i className="fas fa-shopping-cart"></i>
                    </Button>
                    <Button className="btn-block btn-secondary" type="button" style={{marginLeft:'90px'}}>
                      Add wishlit <i className="fas fa-heart"></i>
                    </Button>
                  
                </div>
              </CardBody>
            </Card>
          </div>
          
        </>
      )}
    </div>
  );
};

export default ProductDetail;
