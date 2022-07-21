import React from "react";
import "../css/products.css";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const Products2 = () => {
  return (
    <div className="content">
      <div class="containerproducts">
        <Container>
          <Card className="card my-5 mx-3 p-3">
            <Card.Body>
              <Card.Title>
                <h1 className="m-5">ชั้นวางสินค้าอุตสาหกรรม Heavy Rack</h1>
                <hr></hr>
                <br></br>
              </Card.Title>

              <Card.Text>
                <img
                  width="100%"
                  height="50%"
                  src="images/img2.png"
                  className="d-inline-block align-top mb-5"
                  alt="logo"
                />
                <p>
                  บริการออกแบบผลิต ชั้นวางสินค้าอุตสาหกรรม
                  ชั้นเก็บสินค้า,ชั้นวางของ,ชั้นสต็อกสินค้า,ชั้นเก็บของ
                  ชั้นวางอะไหล่ และวางสินค้าทั่วไป
                  ผู้ผลิตและจัดจำหน่ายชั้นวางสินค้า รับปรึกษาฟรี
                </p>

                <ul>
                  <li className="mb-2">ไมโครแร็ค (Micro Rack)</li>
                  <li className="mb-2">มีเดียมแร็ค (Medium Rack)</li>
                  <li className="mb-2">สายพานลำเลียง (conveyer belt)</li>
                </ul>

                <hr></hr>
                <br></br>

                <img
                  width="100%"
                  height="50%"
                  src="images/RACKING-AND-SHELT.jpg"
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

export default Products2;
