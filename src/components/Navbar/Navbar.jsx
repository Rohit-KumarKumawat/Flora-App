import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const NavBar = ({ onShowCart, onShowWishlist }) => {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Navbar className="navbar" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#" onClick={() => handleScroll("home")}>
          Flora
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#" onClick={() => handleScroll("home")}>
              Home
            </Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="#"
                onClick={() => handleScroll("bouquet")}
              >
                Bouquet
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={() => handleScroll("basket")}>
                Basket
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={() => handleScroll("vase")}>
                Vase
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#"
                onClick={() => handleScroll("perfume")}
              >
                Perfume
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" onClick={() => handleScroll("review")}>
              Review
            </Nav.Link>
            <Nav.Link href="#" onClick={() => handleScroll("contact")}>
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#" className="nav-link" onClick={onShowWishlist}>
              <FaHeart />
            </Nav.Link>
            <Nav.Link href="#" className="nav-link" onClick={onShowCart}>
              <FaShoppingCart />
            </Nav.Link>
            <Nav.Link href="#">
              <FaUser />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
