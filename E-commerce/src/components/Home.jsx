import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ProductList from '../components/ProductList';
import Header from './Header';


const Home = () => {
    const [products, setProducts] = useState([]);

    // useEffect(() => {
        // const fetchProducts = async () => {
        //     const res = await fetch('/api/products');
        //     const data = await res.json();
        //     setProducts(data);
        fetch("http://localhost:5000/products")
        .then((res)=>
        {
          return  res.json()
        }).then((data)=>{
            console.log(data);
            console.log("data is here");
            setProducts(data)
        })
        // };

        // fetchProducts();}, []
    // );

    return (
        <Container>
           
            <h1>Latest Products</h1>
            <ProductList products={products} />
        </Container>
    );
};

export default Home;
