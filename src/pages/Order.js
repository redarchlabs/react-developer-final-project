import React from "react";
import { withLayout } from "../components/withLayout"; // Import the HOC

// Page content for About
function Order() {
  return (
    <div>
      <h2>Welcome to the Order Page</h2>
      <p>This is the main content of the About page.</p>
    </div>
  );
}

// Customize the layout for this page
const customLayout = {
  Main:<div/>
};

// Wrap the About component with the Layout
export default withLayout(Order, customLayout);
