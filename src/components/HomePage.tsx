import React from "react";
import CodePreview from "./test/CodePreview";
import InputBox from "./InputBox";
import StickyNavbar from "./test/Navbar";
import Slider from "./test/Slider";

const HomePage = () => {
  return (
    <div>
      {/* <StickyNavbar />
      <Slider /> */}
      <InputBox />
      <CodePreview />
    </div>
  );
};

export default HomePage;
