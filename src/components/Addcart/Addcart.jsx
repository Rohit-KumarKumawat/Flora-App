import React from "react";
import { Modal, Button, ListGroup } from "react-bootstrap";
import { FaTrashAlt, FaSave, FaPlus, FaMinus } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Addcart.css";

const AddCart = ({
  cartItems,
  savedItems,
  show,
  handleClose,
  onRemoveFromCart,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onSaveForLater,
  onRemoveFromSaved,
  onAddBackToCart,
}) => {
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id}>
                <div className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">${item.price}</p>
                    <div className="quantity-controls">
                      <Button
                        variant="light"
                        onClick={() => onDecreaseQuantity(item.id)}
                      >
                        <FaMinus />
                      </Button>
                      <span>{item.quantity}</span>
                      <Button
                        variant="light"
                        onClick={() => onIncreaseQuantity(item.id)}
                      >
                        <FaPlus />
                      </Button>
                    </div>
                    <div className="cart-item-actions">
                      <Button
                        variant="danger"
                        onClick={() => onRemoveFromCart(item.id)}
                      >
                        <FaTrashAlt />
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => onSaveForLater(item.id)}
                      >
                        <FaSave />
                      </Button>
                    </div>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
        <h4 className="total-price">Total: ${calculateTotal().toFixed(2)}</h4>
        {savedItems.length > 0 && (
          <>
            <h5>Saved for Later</h5>
            <ListGroup>
              {savedItems.map((item) => (
                <ListGroup.Item key={item.id}>
                  <div className="cart-item">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />
                    <div className="cart-item-details">
                      <p className="cart-item-name">{item.name}</p>
                      <p className="cart-item-price">${item.price}</p>
                      <div className="cart-item-actions">
                        <Button
                          variant="primary"
                          onClick={() => onAddBackToCart(item.id)}
                        >
                          Add Back to Cart
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => onRemoveFromSaved(item.id)}
                        >
                          <FaTrashAlt />
                        </Button>
                      </div>
                    </div>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => alert("Proceed to Checkout")}>
          Checkout
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddCart;
