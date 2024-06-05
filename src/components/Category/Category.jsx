import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../Card/Card";

import products from "../../data/products";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Category.css";

const Category = ({
  categoryName,
  onAddToCart,
  onToggleWishlist,
  wishlistItems,
}) => {
  const categoryProducts = products.filter(
    (product) => product.category === categoryName
  );

  return (
    <Container>
      <div
        className="category-header"
        style={{
          backgroundImage: `url(/images/${categoryName.toLowerCase()}-bg.jpg)`,
          height: "30vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          marginBottom: "20px",
        }}
      >
        <h1 className="category-title">{categoryName}</h1>
      </div>
      <div className="product-list">
        <Row>
          {categoryProducts.map((product) => (
            <Col key={product.id} xs={12} md={3} className="mb-4">
              <ProductCard
                product={product}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                isWishlisted={wishlistItems.some(
                  (item) => item.id === product.id
                )}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Category;
