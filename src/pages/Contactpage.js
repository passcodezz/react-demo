import React from "react";
import "../css/contactpage.css";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

const Contactpage = () => {
  return (
    <div className="content">
      <div class="containerpage">
        <Container>
          <Card className="card my-5 mx-3 p-3">
            <Card.Body>
              <Card.Title>
                <h1 className="m-5">ติดต่อเรา Contact</h1>
                <hr></hr>
                <br></br>
              </Card.Title>
              <Card.Text>
                <h4>การติดต่อ</h4>
                <p>
                  บริษัท ภพ ออโตเมชั่น จำกัด PHOP AUTOMATION CO.,LTD <br></br>
                  ที่อยู่: 41/14 ม.12 ต.ลำลูกกา อ.ลำลูกกา จ. ปทุมธานี 12150{" "}
                  <br></br>
                  <a href="mailto:phopautomation@gmail.com">
                    phopautomation@gmail.com
                  </a>
                  <br></br>
                  087-260-7999, 085-108-4246 <br></br>
                  <a
                    href="http://www.phopautomation.co.th"
                    target="_blank"
                    itemprop="url"
                  >
                    http://www.phopautomation.co.th
                  </a>
                </p>
              </Card.Text>

              <hr></hr>
              <br></br>

              <Card.Text>
                <h4 className="mb-3">แบบฟอร์มการติดต่อ</h4>

                <Form>
                  <Row className="align-items-center">
                    <Col lg={6} md={12} xs="auto">
                      <Form.Label htmlFor="inlineFormInput">ชื่อ *</Form.Label>
                      <Form.Control
                        required
                        className="mb-2"
                        id="inlineFormInput"
                        placeholder="ชื่อ"
                      />
                    </Col>

                    <Col lg={6} md={12} xs="auto">
                      <Form.Label htmlFor="inlineFormInputGroup">
                        อีเมล *
                      </Form.Label>
                      <InputGroup className="mb-2">
                        <Form.Control
                          required
                          id="inlineFormInputGroup"
                          placeholder="อีเมล"
                          type="email"
                        />
                      </InputGroup>
                    </Col>

                    <Col lg={6} md={12} xs="auto">
                      <Form.Label htmlFor="inlineFormInput">
                        เรื่อง *
                      </Form.Label>
                      <Form.Control
                        required
                        className="mb-2"
                        id="inlineFormInput"
                        placeholder="เรื่อง"
                      />
                    </Col>

                    <Col lg={6} md={12} xs="auto">
                      <Form.Label htmlFor="inlineFormInput">
                        ข้อความ *
                      </Form.Label>
                      <Form.Control
                        required
                        className="mb-3"
                        id="inlineFormInput"
                        placeholder="ข้อความ"
                      />
                    </Col>

                    <Col lg={12} md={12} xs="auto">
                      <Form.Check
                        type="checkbox"
                        id="autoSizingCheck"
                        className="mb-3"
                        label="ส่งสำเนาให้ฉันด้วย (ไม่จำเป็น)"
                      />
                    </Col>
                    <Col lg={12} md={12} xs="auto">
                      <Button type="submit" className="mb-3">
                        ส่งอีเมล
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Text>

              <hr></hr>
              <br></br>

              <Card.Text>
                <h4 className="mb-4">ข้อมูลอื่นๆ</h4>

                <img
                  width="100%"
                  height="50%"
                  src="images/map.jpg"
                  className="d-inline-block align-top"
                  alt="logo"
                />

                {/* <br></br>
                <hr></hr>
                <br></br> */}
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default Contactpage;
