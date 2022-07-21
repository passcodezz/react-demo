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
                <h1 className="m-5">อุโมงค์ฆ่าเชื้อโควิด COVID-19 series2</h1>
                <hr></hr>
                <br></br>
              </Card.Title>

              <Card.Text>
                <p>อุโมงค์พ่นน้ำยาฆ่าเชื้อโรค COVID-19</p>

                <ul>
                  <li className="mb-2">
                    อุโมงค์เต้นผ้าใบ ฆ่าเชื้อโควิด-19 เป็นอุโมงค์
                    ที่สามารถเคลื่อนที่
                  </li>
                  <li className="mb-2">
                    ติดตั้งได้ง่าย ในตัวอุโมงค์จะมีชุดพ่นน้ำยาฆ่าเชื้อ COVID -
                    19 -
                  </li>
                  <li className="mb-2">
                    อุโมงค์ฆ่าเชื้อโควิดเหมาะกับพื้นที่ชุมชน เช่น ตลาด อาคาร และ
                    จุดอื่นๆ
                  </li>
                </ul>

                <hr></hr>
                <br></br>

                <img
                  width="100%"
                  height="50%"
                  src="images/teable.png"
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
