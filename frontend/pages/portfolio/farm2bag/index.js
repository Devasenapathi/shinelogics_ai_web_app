import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBanner from "../../../components/Common/PageBanner";
import PortfolioDetailsContent from "../../../components/Portfolio/farm2bagPortfolioContent";
import CtaAreaTwo from "../../../components/Common/CtaAreaTwo";
import Footer from "../../../components/Layouts/Footer";

const farm2bagDetails = () => {
    return (
        <>
          <NavbarTwo />
    
          <PageBanner pageTitle="The Farm2bag" BGImage="/images/page-banner2.jpg" />
    
          <PortfolioDetailsContent />
    
          <CtaAreaTwo />
    
          <Footer />
        </>
      );
}

export default farm2bagDetails