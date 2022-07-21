import React from "react";
import Section_image from "../component/Section_image";
import Section_Image_Carousel from "../component/Section_Image_Carousel";
import Section_card from "../component/Section_card";

const Homepage = () => {
  return (
    <div>
      <Section_card />
      <Section_image />
      <Section_Image_Carousel />
    </div>
  );
};

export default Homepage;
