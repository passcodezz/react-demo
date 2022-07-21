import React from "react";
import "../css/products.css";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const Products4 = () => {
  return (
    <div className="content">
      <div class="containerproducts">
        <Container>
          <Card className="card my-5 mx-3 p-3">
            <Card.Body>
              <Card.Title>
                <h1 className="m-5">หม้อต้มไอน้ำ Boiler</h1>
                <hr></hr>
                <br></br>
              </Card.Title>

              <Card.Text>
                <img
                  width="100%"
                  height="50%"
                  src="images/machine.png"
                  className="d-inline-block align-top mb-5"
                  alt="logo"
                />
                <p>
                  Water Tube Boiler (หม้อต้มไอน้ำ) เป็นระบบ หม้อต้มไอน้ำ
                  แบบแยกน้ำเผาให้ความร้อน ซึ่งจะช่วยประหยัดเชื้อเพลิงมากข้น
                  และให้ความร้อนเร็ว กว่าระบบหม้อต้มไอน้ำ
                  เชื้อเพลิงที่ใช้ในการเผาไหม้ คือ แก๊ส ไม้ ถ่านหิน ประโยชน์
                  เครื่องนี้ผลิตไอน้ำได้คงที่และรวดเร็ว พร้อมทั้งให้ความร้อนสูง
                  เหมาะกับ โรงงานอุตสาหกรรม โรงแรม โรงพยาบาล
                  เกี่ยวกับล้างเครื่องมือทางการแพทย์ หรือจะเป็นโรงอบไม้ให้แห้ง
                  ห้องอบที่ใช้ไอน้ำให้ความร้อน
                </p>

                <hr></hr>
                <br></br>

                <img
                  width="100%"
                  height="50%"
                  src="images/WaterTubeBoiler.jpg"
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

export default Products4;
