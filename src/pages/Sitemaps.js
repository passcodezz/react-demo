import React from "react";
import "../css/sitemaps.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const Sitemaps = () => {
  return (
    <div className="content">
      <div class="containersitemaps">
        <Container>
          <Card className="card my-5 mx-3 p-3">
            <Card.Body>
              <Card.Title>
                <h1 className="m-5">แผนผังเว็บไซต์</h1>
                <hr></hr>
                <br></br>
              </Card.Title>

              <Card.Text>
                <ul>
                  <li className="mb-2">
                    <a href="/">หน้าหลัก Home</a>
                  </li>
                  <li className="mb-2">
                    <a href="/aboutpage">เกี่ยวกับบริษัท About s</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">สินค้าและบริการ Products and Service</a>
                    <ul>
                      <li className="mb-2">
                        <a href="#">รับออกแบบโปรแกรม Program Control</a>
                      </li>
                      <li className="mb-2">
                        <a href="#">เครื่องจักร Machine</a>
                      </li>
                      <li className="mb-2">
                        <a href="#">เครื่องทำน้ำเย็น Chiller</a>
                      </li>
                      <li className="mb-2">
                        <a href="#">คอนเวเยอร์ Conveyor</a>
                      </li>
                      <li className="mb-2">
                        <a href="#">หม้อต้มไอน้ำ Boiler</a>
                      </li>
                      <li className="mb-2">
                        <a href="#">ชั้นวางสินค้าอุตสาหกรรม Heavy Rack</a>
                      </li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    <a href="/reference">ผลงาน Reference</a>
                  </li>
                  <li className="mb-2">
                    <a href="/contactpage">ติดต่อเรา Contact</a>
                  </li>
                  <li className="mb-2">
                    <a href="/sitemaps">แผนผังเว็บไซต์ Sitemap</a>
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

export default Sitemaps;
