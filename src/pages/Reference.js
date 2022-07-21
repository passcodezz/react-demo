import React from "react";
import "../css/reference.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const Reference = () => {
  return (
    <div className="content">
      <div class="containerref">
        <div className="card my-5 mx-1 p-0">
          <Container>
            <h1 className="m-5">ผลงาน Reference</h1>
            <hr></hr>
            <dic className="">
              <Card className="card my-5 mx-3 p-0">
                <Card.Header className="p-3" as="h5">
                  อุโมงค์ฆ่าเชื้อโควิด (COVID - 19)
                  สแกนวัดอุณหภูมิร่างกายพร้อมทั้งระบบเตือนอัตโนมัติ
                </Card.Header>
                <Card.Body className="p-4">
                  <Card.Text>
                    <img
                      width="100%"
                      height="50%"
                      src="images/img7.png"
                      className="d-inline-block align-top"
                      alt="logo"
                    />
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>

              <Card className="card my-5 mx-3 p-0">
                <Card.Header className="p-3" as="h5">
                  ผลงานการออกแบบโปรแกรม Program Control เครื่องจักร Machine
                </Card.Header>
                <Card.Body className="p-4">
                  <Card.Text>
                    <img
                      width="100%"
                      height="50%"
                      src="images/img3.png"
                      className="d-inline-block align-top"
                      alt="logo"
                    />
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>

              <Card className="card my-5 mx-3 p-0">
                <Card.Header className="p-3" as="h5">
                  ผลงานคอนเวเยอร์ (Conveyor)
                </Card.Header>
                <Card.Body className="p-4">
                  <Card.Text>
                    <img
                      width="100%"
                      height="50%"
                      src="images/Conveyor.jpg"
                      className="d-inline-block align-top"
                      alt="logo"
                    />
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>

              <Card className="card my-5 mx-3 p-0">
                <Card.Header className="p-3" as="h5">
                  ผลงานการผลิตเครื่องหม้อต้มไอน้ำ Boiler
                </Card.Header>
                <Card.Body className="p-4">
                  <Card.Text>
                    <img
                      width="100%"
                      height="50%"
                      src="images/WaterTubeBoiler.jpg"
                      className="d-inline-block align-top"
                      alt="logo"
                    />
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>

              <Card className="card my-5 mx-3 p-0">
                <Card.Header className="p-3" as="h5">
                  ผลงานชั้นวางสินค้าอุตสาหกรรม Heavy Rack
                </Card.Header>
                <Card.Body className="p-4">
                  <Card.Text>
                    <img
                      width="100%"
                      height="50%"
                      src="images/RACKING-AND-SHELT.jpg"
                      className="d-inline-block align-top"
                      alt="logo"
                    />
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </dic>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Reference;
