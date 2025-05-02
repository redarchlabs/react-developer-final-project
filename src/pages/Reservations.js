import React from "react";
import { withLayout } from "../components/withLayout"; // Import the HOC
import HeroSection from "../components/HeroSection";
import TableReservation from "../components/TableReservation";
// Page content for About
function Reservations() {

    return (
      <>
            <HeroSection titleOnly={true}/>
            <TableReservation/>
      </>
    );
  }

// Customize the layout for this page
const customLayout = {
  Main:<div/>
};

// Wrap the About component with the Layout
export default withLayout(Reservations, customLayout);
