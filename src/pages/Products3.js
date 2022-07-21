import React from "react";
import "../css/products.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const Products3 = () => {
  return (
    <div className="content">
      <div class="containerproducts">
        <Container>
          <Card className="card my-5 mx-3 p-3">
            <Card.Body>
              <Card.Title>
                <h1 className="m-5">รับออกแบบโปรแกรม Program Control</h1>
                <hr></hr>
                <br></br>
              </Card.Title>

              <Card.Text>
                <img
                  width="100%"
                  height="50%"
                  src="images/img3.png"
                  className="d-inline-block align-top mb-5"
                  alt="logo"
                />

                <h5>AUTOMATION</h5>
                <p>
                  PROGRAMING AND CONTROL PANAL (โปรแกรมและตู้คอนโทรล) ออกแบบ
                  ติดตั้ง เขียนโปรแกรมควบคุมเครื่องจักร และ โปรแกรมใช้งานทั่วไป
                </p>

                <hr></hr>
                <br></br>

                <img
                  width="100%"
                  height="50%"
                  src="images/autometion.jpg"
                  className="d-inline-block align-top mb-5"
                  alt="logo"
                />

                <hr></hr>
                <br></br>

                <p>โปรแกรม Control เครื่องจักร</p>

                <ul>
                  <li className="mb-2">
                    วางระบบความคุมและ Monitor การทำงานของ Air Chiller
                    ทั้งหมดในโรงงาน
                  </li>
                  <li className="mb-2">
                    Monitor อุณหภูมิและความชื้น ภายในโรงงาน สามารถควาบคุมได้
                    ±1◦C
                  </li>
                  <li className="mb-2">
                    ควบคุมการใช้พลังงานโดยแยกประเภทของการผลิตและกลุ่มการใช้พลังงานเพื่อแสดงค่าการใช้พลังงานต่อหน่วยการผลิต
                  </li>
                  <li className="mb-2">
                    เพื่อเปรียบเทียบประสิทธิ์ภาพการใช้พลังงาน
                    ทำให้พนักงานสามาถรู้ถึงสถานการณ์ใช้พลังงาน
                    ณ.ขณะนั้นว่าใช้พลังงาน
                  </li>
                  <li className="mb-2">
                    คุ้มค่าต่อการผลิตหรือไม่ และมี Report
                    แจ้งปริมาณการใช้พลังงานเป็น Realtime
                  </li>
                </ul>

                <br></br>

                <img
                  width="100%"
                  height="50%"
                  src="images/Control.jpg"
                  className="d-inline-block align-top mb-5"
                  alt="logo"
                />

                <hr></hr>
                <br></br>

                <h3>ระบบควบคุมเครื่องจักร </h3>
                <br></br>
                <img
                  width="100%"
                  height="50%"
                  src="images/Control02.jpg"
                  className="d-inline-block align-top mb-5"
                  alt="logo"
                />

                <br></br>

                <p>
                  รับออกแบบ ติดตั้ง เขียนโปรแกรม ควบคุมเครื่องจักรอุตสาหกรรม
                  ปรึกษาซ่อมบำรุงเครื่องจักร ระบบควบคุมต่างๆ
                  โดยวิศวกรชำนาญงานของทางบริษัท
                </p>

                <ul>
                  <li className="mb-2">
                    ออกแบบระบบ นิวเมติกส์ และ นิวเมติกส์ไฟฟ้า
                  </li>
                  <li className="mb-2">
                    ออกแบบระบบ สายพานลำเลียงด้วยมอเตอร์ เกียร์
                    อินเวอร์เตอร์(Invertor) เซ็นเซอร์(Sensors)
                  </li>
                  <li className="mb-2">
                    ออกแบบเขียนโปรแกรม PLC SIEMENS , OMRON , KEYENCE ,
                    MITSUBISHI , DELTA
                  </li>
                  <li className="mb-2">ออกแบบเขียนโปรแกรม HMI TOUCH SCREEN</li>
                  <li className="mb-2">ออกแบบเขียนโปรแกรม SCADA</li>
                  <li className="mb-2">
                    ออกแบบสร้างเครื่องจักรต่างๆในโรงงานอุตสาหกรรม
                  </li>
                  <li className="mb-2">
                    รับประกอบตู้คอนโทรลไฟฟ้า , เดินสาย Main ในโรงงานอุตสาหกรรม
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

export default Products3;
