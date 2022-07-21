import React from "react";
import "../css/header.css";
import { Typewriter } from "react-simple-typewriter";
import { useTypewriter, Cursor} from 'react-simple-typewriter'


const HeaderButtom = () => {
  const {text} = useTypewriter({
    loop:[0],

  })
  return (
    <div>
      <section id="hero" class="d-flex align-items-center">
        <div class="container f_flex top">
          <div class="row">
            {/* order-2 order-lg-1 */}
            <div
              class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
              // data-aos="fade-up"
              // data-aos-delay="200"
            >
              <h4>บริษัท ภพ ออโตเมชั่น จำกัด</h4>
              <h2>
                PHOP
                <span>
                <Typewriter words={[" AUTOMATION CO.,LTD."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1100} />
                </span>
              </h2>
              <p>
                ดำเนินธุรกิจเกี่ยวกับ การผลิตเครื่องจักร Partเครื่องจักร
                ชิ้นส่วน อะไหล่ รวมถึง Jig Test และงานประกอบเครื่องปรับอากาศ
                ประเภท Air Cooled Chiller / Water Cooled Chiller รวมถึงระบบไฟฟ้า
                ระบบคอนโทรล ระบบคอนโทรลควบคุมเครื่องจักร ระบบลำเลียงสายพาน
                (Conveyor) ด้วยเทคโนโลยีที่ทันสมัย และงานระบบอื่นๆ
                ที่เกี่ยวข้องกับเครื่องจักรในงานอุตสาหกรรม
                ทั้งในอาคารและสำนักงานต่างๆ
                รวมถึงการออกแบบตามความต้องการลูกค้าเป็นหลัก และในงานด้านบริการ
                งานติดตั้ง งานซ่อมบำรุงเครื่องจักร งานบริการหลังการขาย
                เรามีพร้อมให้บริการ ตามความพึงพอใจลูกค้า
              </p>

              <div class="d-flex justify-content-center justify-content-lg-start">
                <a href="/contactpage" class="btn-get-started scrollto me-2">
                  {/* Get Started */}
                  CONTACT
                </a>
                <a href="/reference" class="btn-get-started scrollto">
                  REFERENCE
                </a>
              </div>
            </div>

            {/* 
            <div
                class="col-lg-6 order-1 order-lg-2 hero-img"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <img src="images/team2.png" class="img-fluid animated" alt="" />
              </div> */}

            <div class="col-lg-6 order-1 order-lg-2 hero-img">
              <img src="images/team2.png" class="img-fluid float-end" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeaderButtom;
