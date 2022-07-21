import React from "react";
import "../css/products.css";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const Products6 = () => {
  return (
    <div className="content">
      <div class="containerproducts">
        <Container>
          <Card className="card my-5 mx-3 p-3">
            <Card.Body>
              <Card.Title>
                <h1 className="m-5">เครื่องจักร Machine</h1>
                <h6>
                  รับผลิตเครื่องจักร และออกแบบเครื่องจักรตาม Concept
                  พร้อมให้คำแนะนำ เพื่อตอบสนองต่อทุกการใช้งาน
                  ให้เครื่องจักรและระบบเหมาะสมกับการใช้งานของลูกค้า งานออกแบบ 3D
                  เครื่อง ไลน์พ่นสีออโต
                </h6>
                <hr></hr>
                <br></br>
              </Card.Title>

              <Card.Text>
                <img
                  width="100%"
                  height="50%"
                  src="images/img6.jpg"
                  className="d-inline-block align-top mb-5"
                  alt="logo"
                />
               
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default Products6;
