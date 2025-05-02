import React from "react";
import { withLayout } from "../components/withLayout"; // Import the HOC
import HeroSection from "../components/HeroSection";

// Page content for About
function ReservationSuccess() {
  return (
    <>
    <HeroSection titleOnly={true}/>
      <section>
      <h2>Success!</h2>
      <p>Your reservation is confirmed!  You will receive an email shortly with details.</p>
      </section>
      </>
      );
}

// Customize the layout for this page
const customLayout = {
  Main:<div/>
};

// Wrap the About component with the Layout
export default withLayout(ReservationSuccess, customLayout);
