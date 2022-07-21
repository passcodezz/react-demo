import "../css/homepage.css";
import Carousel from "react-bootstrap/Carousel";

// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

export default class Section_card extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="Section_card g-4">
        <h4>สินค้าบริการ PRODUCTS & SERVICE</h4>
        <div class="row">
          {/* align-equal align-center row-cols-1 row-cols-md-4 g-4 */}

          <Slider {...settings}>
            {/* <div class="col-lg-3 col-md-6 p-3"> */}
            <div class="col-lg-3 col-md-6 ">
              <a href="/Products1">
                <div class="card">
                  <img
                    height="200"
                    src="images/img1.png"
                    className="img"
                    alt="logo"
                  />
                  <div class="card-body">
                    <h5 class="card-title">คอนเวเยอร์ Conveyor</h5>
                    <p class="card-text">
                      ผู้ผลิต จำหน่าย และนำเข้า
                      เครื่องจักรอุปกรณ์และนวัตกรรมด้านการขนส่งลำเลียง
                      ระบบจัดเก็บสินค้า ระบบชั้นวางสินค้าอุตสาหกรรม
                      และงานโลจิสติกส์ สร้างไลน์การผลิต (Production Line)
                      ไลน์คอนเวเยอร์ (Conveyor line) โดยมืออาชีพ
                      อย่างครบวงจรตั้งแต่เริ่มต้นจนเสร็จสิ้น
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-lg-3 col-md-6 ">
              <a href="/Products2">
                <div class="card">
                  <img
                    height="200"
                    src="images/img2.png"
                    className="img"
                    alt="logo"
                  />
                  <div class="card-body ">
                    <h5 class="card-title">
                      ชั้นวางสินค้าอุตสาหกรรม Heavy Rack
                    </h5>
                    <p class="card-text">
                      บริการออกแบบผลิต ชั้นวางสินค้าอุตสาหกรรม
                      ชั้นเก็บสินค้า,ชั้นวางของ,ชั้นสต็อกสินค้า,ชั้นเก็บของ
                      ชั้นวางอะไหล่ และวางสินค้าทั่วไป
                      ผู้ผลิตและจัดจำหน่ายชั้นวางสินค้า รับปรึกษาฟรี
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-lg-3 col-md-6">
              <a href="/Products3">
                <div class="card">
                  <img
                    height="200"
                    src="images/img3.png"
                    className="img"
                    alt="logo"
                  />

                  <div class="card-body">
                    <h5 class="card-title">รับออกแบบโปรแกรม Program Control</h5>
                    <p class="card-text">
                      รับออกแบบ ติดตั้ง เขียนโปรแกรม ควบคุมเครื่องจักรอุตสาหกรรม
                      ปรึกษาซ่อมบำรุงเครื่องจักร ระบบควบคุมต่างๆ
                      โดยวิศวกรชำนาญงานของทางบริษัท
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-lg-3 col-md-6">
              <a href="/Products4">
                <div class="card">
                  <img
                    height="200"
                    src="images/img4.png"
                    className="img"
                    alt="logo"
                  />

                  <div class="card-body">
                    <h5 class="card-title">หม้อต้มไอน้ำ Boiler</h5>
                    <p class="card-text">
                      Water Tube Boiler (หม้อต้มไอน้ำ) เป็นระบบ หม้อต้มไอน้ำ
                      แบบแยกน้ำเผาให้ความร้อน ซึ่งจะช่วยประหยัดเชื้อเพลิงมากข้น
                      และให้ความร้อนเร็ว กว่าระบบหม้อต้มไอน้ำ
                      เชื้อเพลิงที่ใช้ในการเผาไหม้ คือ แก๊ส ไม้ ถ่านหิน ประโยชน์
                      เครื่องนี้ผลิตไอน้ำได้คงที่และรวดเร็ว
                      พร้อมทั้งให้ความร้อนสูง
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-lg-3 col-md-6 ">
              <a href="/Products5">
                <div class="card">
                  <img
                    height="200"
                    src="images/img5.png"
                    className="img"
                    alt="logo"
                  />

                  <div class="card-body">
                    <h5 class="card-title">เครื่องทำน้ำเย็น Chiller</h5>
                    <p class="card-text">
                      ระบายความร้อนด้วยอากาศ (Air Cooled Water Chiller)
                      <br></br>
                      ระบายความร้อนด้วยน้ำ (Water Cooled Water Chiller)
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-lg-3 col-md-6 ">
              <a href="/Products6">
                <div class="card">
                  <img
                    height="200"
                    src="images/img6.jpg"
                    className="img"
                    alt="logo"
                  />

                  <div class="card-body">
                    <h5 class="card-title">เครื่องจักร Machine</h5>
                    <p class="card-text">
                      รับผลิตเครื่องจักร และออกแบบเครื่องจักรตาม Concept
                      พร้อมให้คำแนะนำ เพื่อตอบสนองต่อทุกการใช้งาน
                      ให้เครื่องจักรและระบบเหมาะสมกับการใช้งานของลูกค้า
                      งานออกแบบ 3D เครื่อง ไลน์พ่นสีออโต
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-lg-3 col-md-6 ">
              <a href="/Products7">
                <div class="card">
                  <img
                    height="200"
                    src="images/img7.png"
                    className="img"
                    alt="logo"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      อุโมงค์เต็นท์ผ้าใบ ฆ่าเชื้อโควิด (COVID - 19)
                    </h5>
                    <p class="card-text">
                      อุโมงค์เต็นท์ผ้าใบ ฆ่าเชื้อโควิด (COVID - 19)
                      สแกนวัดอุณหภูมิร่างกายพร้อมทั้งระบบเตือนอัตโนมัติ
                      และในตัวอุโมงค์ จะมีชุดพ่นน้ำยาฆ่าเชื้อ เป็นสเปรย์ละอองฝอย
                      สั่งงานอัตโนมัติ อุโมงค์เต็นท์ผ้าใบ ฆ่าเชื้อโควิด (COVID -
                      19)
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-lg-3 col-md-6 p-1">
              <a href="/Products8">
                <div class="card">
                  <img
                    height="200"
                    src="images/img8.png"
                    className="img"
                    alt="logo"
                  />

                  <div class="card-body">
                    <h5 class="card-title">
                      อุโมงค์ฆ่าเชื้อโควิด COVID-19 series2
                    </h5>
                    <p class="card-text">
                      อุโมงค์พ่นน้ำยาฆ่าเชื้อโรค COVID-19 <br></br>
                      อุโมงค์เต้นผ้าใบฆ่าเชื้อโควิด-19 เป็นอุโมงค์
                      ที่สามารถเคลื่อนที่
                      <br></br>
                      ติดตั้งได้ง่าย ในตัวอุโมงค์จะมีชุดพ่นน้ำยาฆ่าเชื้อ COVID
                      19 <br></br>
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

// const Section_card = () => {
//   return (
//     <div className="Section_card">
//       <h4>สินค้าบริการ PRODUCTS & SERVICE</h4>
//       <div class="row align-equal align-center row-cols-1 row-cols-md-4 g-4">
//         <div class="col-lg-3 col-md-6">
//           <a href="/Products1">
//             <div class="card">
//               <img
//                 height="200"
//                 src="images/img1.png"
//                 className="d-inline-block align-top"
//                 alt="logo"
//               />
//               <div class="card-body">
//                 <h5 class="card-title">คอนเวเยอร์ Conveyor</h5>
//                 <p class="card-text">
//                   ผู้ผลิต จำหน่าย และนำเข้า
//                   เครื่องจักรอุปกรณ์และนวัตกรรมด้านการขนส่งลำเลียง
//                   ระบบจัดเก็บสินค้า ระบบชั้นวางสินค้าอุตสาหกรรม และงานโลจิสติกส์
//                   สร้างไลน์การผลิต (Production Line) ไลน์คอนเวเยอร์ (Conveyor
//                   line) โดยมืออาชีพ อย่างครบวงจรตั้งแต่เริ่มต้นจนเสร็จสิ้น
//                 </p>
//               </div>
//             </div>
//           </a>
//         </div>

//         <div class="col-lg-3 col-md-6">
//           <a href="/Products2">
//             <div class="card">
//               <img
//                 height="200"
//                 src="images/img2.png"
//                 className="d-inline-block align-top"
//                 alt="logo"
//               />
//               <div class="card-body ">
//                 <h5 class="card-title">ชั้นวางสินค้าอุตสาหกรรม Heavy Rack</h5>
//                 <p class="card-text">
//                   บริการออกแบบผลิต ชั้นวางสินค้าอุตสาหกรรม
//                   ชั้นเก็บสินค้า,ชั้นวางของ,ชั้นสต็อกสินค้า,ชั้นเก็บของ
//                   ชั้นวางอะไหล่ และวางสินค้าทั่วไป
//                   ผู้ผลิตและจัดจำหน่ายชั้นวางสินค้า รับปรึกษาฟรี
//                 </p>
//               </div>
//             </div>
//           </a>
//         </div>

//         <div class="col-lg-3 col-md-6">
//           <a href="/Products3">
//             <div class="card">
//               <img
//                 height="200"
//                 src="images/img3.png"
//                 className="d-inline-block align-top"
//                 alt="logo"
//               />

//               <div class="card-body">
//                 <h5 class="card-title">รับออกแบบโปรแกรม Program Control</h5>
//                 <p class="card-text">
//                   รับออกแบบ ติดตั้ง เขียนโปรแกรม ควบคุมเครื่องจักรอุตสาหกรรม
//                   ปรึกษาซ่อมบำรุงเครื่องจักร ระบบควบคุมต่างๆ
//                   โดยวิศวกรชำนาญงานของทางบริษัท
//                 </p>
//               </div>
//             </div>
//           </a>
//         </div>

//         <div class="col-lg-3 col-md-6">
//           <a href="/Products4">
//             <div class="card">
//               <img
//                 height="200"
//                 src="images/img4.png"
//                 className="d-inline-block align-top"
//                 alt="logo"
//               />

//               <div class="card-body">
//                 <h5 class="card-title">หม้อต้มไอน้ำ Boiler</h5>
//                 <p class="card-text">
//                   Water Tube Boiler (หม้อต้มไอน้ำ) เป็นระบบ หม้อต้มไอน้ำ
//                   แบบแยกน้ำเผาให้ความร้อน ซึ่งจะช่วยประหยัดเชื้อเพลิงมากข้น
//                   และให้ความร้อนเร็ว กว่าระบบหม้อต้มไอน้ำ
//                   เชื้อเพลิงที่ใช้ในการเผาไหม้ คือ แก๊ส ไม้ ถ่านหิน ประโยชน์
//                   เครื่องนี้ผลิตไอน้ำได้คงที่และรวดเร็ว พร้อมทั้งให้ความร้อนสูง
//                 </p>
//               </div>
//             </div>
//           </a>
//         </div>

//         <div class="col-lg-3 col-md-6">
//           <a href="/Products5">
//             <div class="card">
//               <img
//                 height="200"
//                 src="images/img5.png"
//                 className="d-inline-block align-top"
//                 alt="logo"
//               />

//               <div class="card-body">
//                 <h5 class="card-title">เครื่องทำน้ำเย็น Chiller</h5>
//                 <p class="card-text">
//                   ระบายความร้อนด้วยอากาศ (Air Cooled Water Chiller)
//                   <br></br>
//                   ระบายความร้อนด้วยน้ำ (Water Cooled Water Chiller)
//                 </p>
//               </div>
//             </div>
//           </a>
//         </div>

//         <div class="col-lg-3 col-md-6">
//           <a href="/Products6">
//             <div class="card">
//               <img
//                 height="200"
//                 src="images/img6.jpg"
//                 className="d-inline-block align-top"
//                 alt="logo"
//               />

//               <div class="card-body">
//                 <h5 class="card-title">เครื่องจักร Machine</h5>
//                 <p class="card-text">
//                   รับผลิตเครื่องจักร และออกแบบเครื่องจักรตาม Concept
//                   พร้อมให้คำแนะนำ เพื่อตอบสนองต่อทุกการใช้งาน
//                   ให้เครื่องจักรและระบบเหมาะสมกับการใช้งานของลูกค้า งานออกแบบ 3D
//                   เครื่อง ไลน์พ่นสีออโต ...
//                 </p>
//               </div>
//             </div>
//           </a>
//         </div>

//         <div class="col-lg-3 col-md-6">
//           <a href="/Products7">
//             <div class="card">
//               <img
//                 height="200"
//                 src="images/img7.png"
//                 className="d-inline-block align-top"
//                 alt="logo"
//               />
//               <div class="card-body">
//                 <h5 class="card-title">
//                   อุโมงค์เต็นท์ผ้าใบ ฆ่าเชื้อโควิด (COVID - 19)
//                 </h5>
//                 <p class="card-text">
//                   อุโมงค์เต็นท์ผ้าใบ ฆ่าเชื้อโควิด (COVID - 19)
//                   สแกนวัดอุณหภูมิร่างกายพร้อมทั้งระบบเตือนอัตโนมัติ
//                   และในตัวอุโมงค์ จะมีชุดพ่นน้ำยาฆ่าเชื้อ เป็นสเปรย์ละอองฝอย
//                   สั่งงานอัตโนมัติ อุโมงค์เต็นท์ผ้าใบ ฆ่าเชื้อโควิด (COVID - 19)
//                   ...
//                 </p>
//               </div>
//             </div>
//           </a>
//         </div>

//         <div class="col-lg-3 col-md-6">
//           <a href="/Products8">
//             <div class="card">
//               <img
//                 height="200"
//                 src="images/img8.png"
//                 className="d-inline-block align-top"
//                 alt="logo"
//               />

//               <div class="card-body">
//                 <h5 class="card-title">
//                   อุโมงค์ฆ่าเชื้อโควิด COVID-19 series2
//                 </h5>
//                 <p class="card-text">
//                   อุโมงค์พ่นน้ำยาฆ่าเชื้อโรค COVID-19 <br></br>
//                   อุโมงค์เต้นผ้าใบฆ่าเชื้อโควิด-19 เป็นอุโมงค์
//                   ที่สามารถเคลื่อนที่
//                   <br></br>
//                   ติดตั้งได้ง่าย ในตัวอุโมงค์จะมีชุดพ่นน้ำยาฆ่าเชื้อ COVID 19
//                   ... <br></br>
//                 </p>
//               </div>
//             </div>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Section_card;
