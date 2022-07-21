import "../css/header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";

const Headers = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });
  return (
    <div className="header">
      {/* <div className="Navbar-top">
        <Navbar className="Navbarcolor" collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand className="mt-2">
              <h6 id="text-header" className="text-header">
                "มุ่งเน้นพัฒนาการผลิตที่ทันสมัยมีคุณภาพได้มาตรฐาน และ
                บริการที่ตรงความต้องการลูกค้า"
              </h6>
            </Navbar.Brand>
            <Nav>
              <p>
                <Image
                  id="text-header"
                  className="icon_phone"
                  src="images/icon_phone.jpg"
                ></Image>
              </p>

              <Nav id="text-header" className="text-white mt-3 ms-3">
                <p>087-260-7999, 085-108-4246</p>
              </Nav>
            </Nav>
          </Container>
        </Navbar>
      </div> */}

      <div className="Navbar-buttom">
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <img
                src="images/logo-new.png"
                width="auto"
                height="50"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="px-2 text-dark" href="/">
                  หน้าหลัก
                </Nav.Link>
                <Nav.Link className="px-2 text-dark" href="/aboutpage">
                  เกี่ยวกับบริษัท
                </Nav.Link>
                <NavDropdown
                  className="px-2 text-dark"
                  title="สินค้าและบริการ "
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="/Products1">
                    คอนเวเยอร์ Conveyor
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/Products2">
                    ชั้นวางสินค้าอุตสาหกรรม Heavy Rack
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/Products3">
                    รับออกแบบโปรแกรม Program Control
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/Products4">
                    หม้อต้มไอน้ำ Boiler
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/Products5">
                    เครื่องทำน้ำเย็น Chiller
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/Products6">
                    เครื่องจักร Machine
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/Products7">
                    อุโมงค์เต็นท์ผ้าใบ ฆ่าเชื้อโควิด (COVID - 19)
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/Products8">
                    อุโมงค์ฆ่าเชื้อโควิด COVID-19 series2
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link className="px-2 text-dark" href="/reference">
                  ผลงานที่ผ่านมา
                </Nav.Link>
                <Nav.Link className="px-2 text-dark" href="/contactpage">
                  ติดต่อเรา
                </Nav.Link>
                <Nav.Link className="px-2 text-dark" href="/sitemaps">
                  แผนผังเว็บไซต์
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Headers;
