import "../css/header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

const Headertop = () => {
  return (
    <div className="top">

      <div className="Navbar-top">
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
      </div>
      
    </div>
  );
};

export default Headertop;
