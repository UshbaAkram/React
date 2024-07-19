import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from './Product';
import  ProductFilter from '../../../bacicReact/src/components/Filter'
const ProductList = ({ products }) => {
    return (
        <Row>
            {/* <ProductFilter  products={products}/> */}

            {products.map(product => (
                <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            ))}
        </Row>
    );
};

export default ProductList;
