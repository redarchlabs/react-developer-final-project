import React from "react";
import { withLayout } from "../components/withLayout"; // Import the HOC
import OurDishes from "../components/OurDishes";
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";
// Page content for About
function Home() {

  
  return (
    <>
        <HeroSection/>
        <OurDishes/>
        <Testimonials/>
    </>
    
  );
}

// Customize the layout for this page
const customLayout = {
  Main:<div/>
};

// Wrap the About component with the Layout
export default withLayout(Home, customLayout);
