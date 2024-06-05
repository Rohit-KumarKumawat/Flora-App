import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css"; // Custom CSS

const ProductCard = ({
  product,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}) => {
  const handleWishlistClick = () => {
    onToggleWishlist(product);
  };

  return (
    <Card className="product-card">
      <div className="card-image-wrapper">
        <Card.Img variant="top" src={product.image} className="card-image" />
        <FaHeart
          className="wishlist-icon"
          style={{
            color: isWishlisted ? "red" : "pink",
            cursor: "pointer",
          }}
          onClick={handleWishlistClick}
        />
      </div>
      <Card.Body className="card-body">
        <Row>
          <Col xs={8}>
            <Card.Title>{product.name}</Card.Title>
          </Col>
          <Col xs={4} className="text-right">
            <Card.Text>${product.price}</Card.Text>
          </Col>
        </Row>
        <Button variant="primary" onClick={() => onAddToCart(product)}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
