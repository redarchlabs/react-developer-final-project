import React from "react";
import { Layout } from "./Layout";  // Import Layout
import Header from "./Header";
import Footer from "./Footer";
// The HOC function
export function withLayout(PageComponent, customLayout = {}) {
  return function WithLayoutWrapper(props) {
    return (
      <Layout
        Header={customLayout.Header || <Header />}
        Footer={customLayout.Footer || <Footer />}
        Main={<PageComponent {...props} />}  // Pass the page component as the main content
      />
    );
  };
}
