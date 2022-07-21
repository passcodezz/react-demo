import React from "react";
import "../css/products.css";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const Products1 = () => {
  return (
    <div className="content">
      <div class="containerproducts">
        <Container>
          <Card className="card my-5 mx-3 p-3">
            <Card.Body>
              <Card.Title>
                <h1 className="m-5">คอนเวเยอร์ Conveyor</h1>
                <hr></hr>
                <br></br>
              </Card.Title>

              <Card.Text>
                <img
                  width="100%"
                  height="50%"
                  src="images/img1.png"
                  className="d-inline-block align-top mb-5"
                  alt="logo"
                />
                <p>
                  ผู้ผลิต จำหน่าย และนำเข้า
                  เครื่องจักรอุปกรณ์และนวัตกรรมด้านการขนส่งลำเลียง
                  ระบบจัดเก็บสินค้า ระบบชั้นวางสินค้าอุตสาหกรรม และงานโลจิสติกส์
                  สร้างไลน์การผลิต (Production Line) ไลน์คอนเวเยอร์ (Conveyor
                  line) โดยมืออาชีพ อย่างครบวงจรตั้งแต่เริ่มต้นจนเสร็จสิ้น
                </p>

                <ul>
                  <li className="mb-2">
                    ติดตั้งและออกแบบสายพานลำเลียง ตามแบบทุกชนิด ทุกสเป็ค
                    ทุกรูปแบบ{" "}
                  </li>
                  <li className="mb-2">
                    บริการตัดต่อสายพาน pvc belt conveyer lfda pvc pu rubber
                    assembly line belt conveyer (pvc plastic) wire mesh belt
                    conveyer (stainless steel)
                  </li>
                  <li className="mb-2">สายพานลำเลียง (conveyer belt)</li>
                  <li className="mb-2">
                    สายพานกะพ้อ elevator belt mini belt conveyer wire belt
                  </li>
                </ul>

                <hr></hr>
                <br></br>

                <img
                  width="100%"
                  height="50%"
                  src="images/Conveyor.jpg"
                  className="d-inline-block align-top mb-5"
                  alt="logo"
                />

                <hr></hr>
                <br></br>
                <img
                  width="100%"
                  height="50%"
                  src="images/Conveyor02.jpg"
                  className="d-inline-block align-top mb-5"
                  alt="logo"
                />

                <hr></hr>
                <br></br>

                <img
                  width="100%"
                  height="50%"
                  src="images/Conveyor03.jpg"
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

export default Products1;
