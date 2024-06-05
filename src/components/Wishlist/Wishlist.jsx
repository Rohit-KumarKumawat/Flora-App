import React from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import ProductCard from "../Card/Card";

const Wishlist = ({
  wishlistItems,
  onRemoveFromWishlist,
  onAddToCart,
  show,
  handleClose,
}) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Wishlist</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            {wishlistItems.map((product) => (
              <Col key={product.id} xs={12} md={4} lg={3} className="mb-4">
                <ProductCard
                  product={product}
                  onAddToCart={onAddToCart}
                  onToggleWishlist={onRemoveFromWishlist}
                  isWishlisted={true}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Wishlist;
