import "../css/footer.css";

const Footer = () => {
  return (      
    <footer id="footer">
      <div class="footer-newsletter">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <h4>SERVICE IS OUR MAIN PRODUCT</h4>
              <h5>
                บริษัท ภพ ออโตเมชั่น จำกัด
                มีความยินดีและภาคภูมิใจเป็นอย่างยิ่งที่ได้มีโอกาสได้บริการลูกค้า
              </h5>

              {/* <form>
                <input readonly type="text" name="text" />
                <input disabled type="submit" value="PRODUCT" />
              </form> */}

            </div>
          </div>
        </div>
      </div>
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 footer-contact">
              <h3>Phopautomation</h3>

              <div class="social-links mt-3">
                {" "}
                <a href="#" class="twitter">
                  <i class="bx bxl-twitter"></i>
                </a>{" "}
                <a href="#" class="facebook">
                  <i class="bx bxl-facebook"></i>
                </a>{" "}
                <a href="#" class="instagram">
                  <i class="bx bxl-instagram"></i>
                </a>{" "}
                <a href="#" class="google-plus">
                  <i class="bx bxl-skype"></i>
                </a>{" "}
                <a href="#" class="linkedin">
                  <i class="bx bxl-linkedin"></i>
                </a>
                <a href="#" class="linkedin">
                  <i class="bx bxl-linkedin"></i>
                </a>
              </div>

              {/* <p>
                {" "}
                Ludhiana <br /> Punjab
                <br /> India <br />
                <br /> <strong>Phone:</strong> +91 **** **** **
                <br /> <strong>Email:</strong>{" "}
                <a href="#" class="__cf_email__">
                  [email&#160;protected]
                </a>
                <br />
              </p> */}
            </div>
            <div class="col-lg-4 col-md-6 footer-links">
              <h4>CONTACT</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i> ที่อยู่ : 41/14 ม.12
                  ต.ลำลูกกา อ.ลำลูกกา จ. ปทุมธานี 12150
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> Tel : 087-260-7999,
                  085-108-4246
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> Email :
                  phopautomation@gmail.com
                </li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-6 footer-links">
              <h4>SERVICE</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i> รับออกแบบโปรแกรม Program
                  Control
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> เครื่องจักร Machine
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> เครื่องทำน้ำเย็น Chiller
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> คอนเวเยอร์ (Conveyor)
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> หม้อต้มไอน้ำ Boiler
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> ชั้นวางสินค้าอุตสาหกรรม
                  Heavy Rack
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container footer-bottom clearfix">
        <div class="copyright">
          {" "}
          &copy; Copyright 2016{" "}
          <strong>
            <span>Phopautomation</span>
          </strong>
          {/* . All Rights Reserved */}
        </div>
        <div class="credits">
          {" "}
          with love{" "}
          <a href="https://www.phopautomation.co.th/">Phopautomation</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
