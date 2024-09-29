import React from "react";
import Topnavigation from "./Topnavigation";

function Aboutus() {
  return (
    <div>
      <div>
        <Topnavigation></Topnavigation>

        <div className="aboutUsContainer">
          <div className="aboutUsHeader">
            <h1>About Us</h1>
            <p>Your one-stop shop for all your needs!</p>
          </div>

          <div className="aboutUsContent">
            <h2>Our Mission</h2>
            <p>
              At <strong>Fake Store</strong>, we believe in providing
              high-quality products at affordable prices. Our mission is to make
              online shopping accessible and enjoyable for everyone. We strive
              to curate a diverse selection of items that cater to the needs and
              desires of our customers.
            </p>

            <h2>Our Story</h2>
            <p>
              Founded in 2023, Fake Store started as a small venture to connect
              consumers with the products they love. Over the years, we have
              grown into a trusted platform for thousands of customers. Our
              passion for excellence drives us to continuously improve our
              offerings and services.
            </p>

            <h2>Meet the Team</h2>
            <div className="teamMembers">
              <div className="teamMember">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member 1"
                />
                <h3>Jane Doe</h3>
                <p>Co-Founder & CEO</p>
                <p>
                  Jane is passionate about eCommerce and customer satisfaction.
                </p>
              </div>
              <div className="teamMember">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member 2"
                />
                <h3>John Smith</h3>
                <p>Co-Founder & CTO</p>
                <p>John oversees the technical aspects of our platform.</p>
              </div>
              <div className="teamMember">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member 3"
                />
                <h3>Alice Johnson</h3>
                <p>Marketing Manager</p>
                <p>
                  Alice brings our products to the forefront with her creative
                  strategies.
                </p>
              </div>
            </div>
          </div>

          <div className="aboutUsFooter">
            <h2>Contact Us</h2>
            <p>
              If you have any questions or feedback, feel free to reach out to
              us!
            </p>
            <p>Email: support@fakestore.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default Aboutus;
