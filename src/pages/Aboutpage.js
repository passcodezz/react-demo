import React from "react";
import "../css/aboutpage.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const Aboutpage = () => {
  return (
    <div className="content">
      <div class="containerpage">
        <Container>
          <Card className="card my-5 mx-3 p-3">
            <Card.Body>
              <Card.Title>
                <h1 className="m-5">เกี่ยวกับบริษัท</h1>
                <hr></hr>
                <br></br>
              </Card.Title>

              {/* <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle> */}

              <Card.Text>
                <h4>ประวัติความเป็นมาบริษัท</h4>
                <p>
                  บริษัท ภพ ออโตเมชั่น จำกัด ได้เริ่มก่อตั้ง วันที่ 19 กรกฏาคม
                  2561 บริษัท ภพ ออโตเมชั่น จำกัด จะดำเนินธุรกิจ มุ่งเน้นพัฒนา
                  การผลิตเครื่องจักร Partเครื่องจักร ชิ้นส่วน อะไหล่ รวมถึง Jig
                  Test และงานประกอบเครื่องปรับอากาศ ประเภท Air Cooled Chiller /
                  Water Cooled Chiller รวมถึงระบบไฟฟ้า ระบบคอนโทรล
                  ระบบคอนโทรลควบคุมเครื่องจักร ระบบลำเลียงสายพาน (Conveyor)
                  ด้วยเทคโนโลยีที่ทันสมัย และงานระบบอื่นๆ
                  ที่เกี่ยวข้องกับเครื่องจักรในงานอุตสาหกรรม
                  ทั้งในอาคารและสำนักงานต่างๆ
                  รวมถึงการออกแบบตามความต้องการลูกค้าเป็นหลัก และในงานด้านบริการ
                  งานติดตั้ง งานซ่อมบำรุงเครื่องจักร งานบริการหลังการขาย
                  เรามีพร้อมให้บริการ ตามความพึงพอใจลูกค้า
                </p>
              </Card.Text>

              <Card.Text>
                <h4>
                  บริษัท ภพ ออโตเมชั่น จำกัด
                  มีความยินดีและภาคภูมิใจเป็นอย่างยิ่งที่ได้มีโอกาสได้บริการลูกค้า
                </h4>

                <br></br>

                <h4>นโยบาย</h4>
                <p>
                  "มุ่งเน้นพัฒนาการผลิตที่ทันสมัยมีคุณภาพได้มาตรฐาน และ บริการ
                  ที่ตรงความต้องการลูกค้า"
                </p>
              </Card.Text>

              <Card.Text>
                <h4>วัตถุประสงค์</h4>
                <ul>
                  <li>
                    มุ่งเน้นงานผลิตที่ได้คุณภาพ และส่งมอบงานตามความต้องการลูกค้า
                  </li>
                  <li>
                    พัฒนาบุคลากร เป็นคนเก่ง คนดี มีความสุข และทำงานเป็นทีม
                  </li>
                  <li>
                    มุ่งเน้นจิตสำนึกสิ่งแวดล้อม อาชีวะอนามัย และความปลอดภัย
                  </li>
                  <li>นำเทคโนโลยีมาปรับปรุงและพัฒนาอย่างต่อเนื่อง</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>

          <div className="aboutpage_card">
            <div class="row align-equal align-center row-cols-1 row-cols-md-4 g-4">
              <div class="col-lg-4 col-md-12">
                <div class="card">
                  <a href="/">
                    <img
                      src="https://www.automation.co.th/wp-content/uploads/2022/02/manager-1.png"
                      className="d-inline-block align-top"
                      alt="logo"
                    />
                  </a>
                  <div class="card-body">
                    <h5 class="card-title">
                      <b>PROFESSIONAL</b>
                    </h5>
                    <p class="card-text">Engineer Consultation Team</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-12">
                <div class="card">
                  <a href="/">
                    <img
                      src="https://www.automation.co.th/wp-content/uploads/2022/02/application-1.png"
                      className="d-inline-block align-top"
                      alt="logo"
                    />
                  </a>
                  <div class="card-body ">
                    <h5 class="card-title">
                      <b>SKILLFULL</b>
                    </h5>
                    <p class="card-text">Installation Team</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-12">
                <div class="card">
                  <a href="/">
                    <img
                      height="200"
                      src="https://www.automation.co.th/wp-content/uploads/2022/02/settings.png"
                      className="d-inline-block align-top"
                      alt="logo"
                    />
                  </a>
                  <div class="card-body">
                    <h5 class="card-title">
                      {" "}
                      <b>HIGH EXPERIENCE</b>
                    </h5>
                    <p class="card-text">
                      After – Sales Service & Maintenance Team
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Aboutpage;
