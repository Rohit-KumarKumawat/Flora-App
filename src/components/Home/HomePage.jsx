import React from "react";
import { Carousel, Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const carouselImages = [
  "/images/z-slide1.jpg",
  "/images/z-slide3.jpg",
  "/images/z-slide5.jpg",
];

const categories = [
  { id: "bouquet", name: "Bouquet", img: "/images/sunflower-bouquet.jpg" },
  { id: "basket", name: "Basket", img: "/images/victorian-basket.jpg" },
  { id: "vase", name: "Vase", img: "/images/white-vase.jpg" },
  { id: "perfume", name: "Perfume", img: "/images/purple-perfume.jpg" },
];

const HomePage = () => {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Carousel fade>
        {carouselImages.map((img, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={img}
              alt={`Slide ${index + 1}`}
              style={{ height: "60vh" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <Container>
        <Row>
          {categories.map((category) => (
            <Col
              key={category.id}
              xs={6}
              md={3}
              className="text-center mb-4 mt-4"
              onClick={() => handleScroll(category.id)}
            >
              <div className="position-relative">
                <Image
                  src={category.img}
                  roundedCircle
                  fluid
                  style={{
                    width: "50%",
                    height: "50%",
                    objectFit: "cover",
                  }}
                  className="mx-auto d-block"
                />
                <div
                  className="position-absolute w-100 "
                  style={{
                    // bottom: "10px",
                    left: "50%",
                    transform: "translate(-50%)",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "#fff",
                    padding: "0.2rem",
                    borderRadius: "5px",
                    fontSize: "1rem",
                  }}
                >
                  {category.name}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
