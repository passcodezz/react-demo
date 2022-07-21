import Image from "react-bootstrap/Image";
import "../css/homepage.css";

const Section_image = () => {
  return (
    <div className="">
      <div className="section_image">
        <div class="row">
          <div class="col-lg-3">
            <Image
              className="section_image_in float-center"
              src="images/icon1.png"
            ></Image>
            <div class="box-text-inner">
              <h5>PROFESSIONAL</h5>
              <p>Engineer Consultation Team</p>
            </div>
          </div>
          <div class="col-lg-3">
            {" "}
            <Image
              className="section_image_in float-center"
              src="images/icon2.png"
            ></Image>
            <div class="box-text-inner">
              <h5>AUTHORIZED DISTRIBUTOR</h5>
              <p>Genuine Product Guarantee</p>
            </div>
          </div>
          <div class="col-lg-3">
            {" "}
            <Image
              className="section_image_in float-center"
              src="images/icon3.png"
            ></Image>
            <div class="box-text-inner">
              <h5>SKILLFULL</h5>
              <p>Installation Team</p>
            </div>
          </div>
          <div class="col-lg-3">
            {" "}
            <Image
              className="section_image_in float-center"
              src="images/icon4.png"
            ></Image>
            <div class="box-text-inner">
              <h5>HIGH EXPERIENCE</h5>
              <p>After-Sale Service and Maintenance Team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_image;
