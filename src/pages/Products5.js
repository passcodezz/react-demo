import React from "react";
import "../css/products.css";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const Products5 = () => {
  return (
    <div className="content">
      <div class="containerproducts">
        <Container>
          <Card className="card my-5 mx-3 p-3">
            <Card.Body>
              <Card.Title>
                <h1 className="m-5">เครื่องทำน้ำเย็น Chiller</h1>
                <hr></hr>
                <br></br>
              </Card.Title>

              <Card.Text>
                <img
                  width="100%"
                  height="50%"
                  src="images/img5.png"
                  className="d-inline-block align-top mb-5"
                  alt="logo"
                />

                <ul>
                  <li className="mb-2">
                    ระบายความร้อนด้วยอากาศ (Air Cooled Water Chiller)
                  </li>
                  <li className="mb-2">
                    ระบายความร้อนด้วยน้ำ (Water Cooled Water Chiller)
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default Products5;
