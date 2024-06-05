import React from "react";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Reviews.css"; // Import custom CSS for additional styling

const reviews = [
  {
    id: 1,
    image: "/images/person1.jpg",
    rating: 4,
    content:
      "Beautiful bouquet! The flowers were fresh and lasted a long time.",
    name: "Alice Johnson",
  },
  {
    id: 2,
    image: "/images/person2.jpg",
    rating: 5,
    content: "The basket arrangement was stunning. Highly recommend!",
    name: "Nancy Smith",
  },
  {
    id: 3,
    image: "/images/person3.jpg",
    rating: 3,
    content: "The vase flowers were nice, but the delivery was a bit late.",
    name: "Emily Davis",
  },
  {
    id: 4,
    image: "/images/person4.jpg",
    rating: 4,
    content: "Lovely perfume scent, very refreshing and lasted all day.",
    name: "Merry Brown",
  },
];

const calculateRatingSummary = (reviews) => {
  const summary = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  reviews.forEach((review) => {
    summary[review.rating]++;
  });
  return summary;
};

const Reviews = () => {
  const ratingSummary = calculateRatingSummary(reviews);
  const totalReviews = reviews.length;

  return (
    <Container>
      <h2 className=" text-center" style={{ paddingTop: "4%" }}>
        Customer Reviews
      </h2>
      <Row className="mb-4">
        <Col>
          <h4 style={{ marginBottom: "2%" }}>Rating Summary</h4>
          {Object.entries(ratingSummary).map(([rating, count]) => (
            <div key={rating} className="d-flex align-items-center mb-2">
              <div className="me-2">
                {Array.from({ length: rating }, (_, index) => (
                  <StarFill key={index} className="text-warning" />
                ))}
                {Array.from({ length: 5 - rating }, (_, index) => (
                  <StarFill key={index} className="text-muted" />
                ))}
              </div>
              <ProgressBar
                now={(count / totalReviews) * 100}
                label={`${count} reviews`}
                className="flex-grow-1 "
                style={{ height: "1.5rem" }}
              />
            </div>
          ))}
        </Col>
      </Row>
      <Row>
        {reviews.map((review) => (
          <Col key={review.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="h-100 small-card">
              <div style={{ height: "150px", overflow: "hidden" }}>
                <Card.Img
                  variant="top"
                  src={review.image}
                  style={{ height: "100%", objectFit: "cover" }}
                />
              </div>
              <Card.Body className="p-2">
                <div className="d-flex align-items-center justify-content-center mb-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <StarFill
                      key={index}
                      className={`me-1 ${
                        index < review.rating ? "text-warning" : "text-muted"
                      }`}
                    />
                  ))}
                </div>
                <Card.Text className="small-card-text">
                  {review.content}
                </Card.Text>
                <div className="text-muted small-card-name">
                  - {review.name}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Reviews;
