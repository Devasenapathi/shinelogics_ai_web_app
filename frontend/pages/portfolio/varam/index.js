import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBanner from "../../../components/Common/PageBanner";
import PortfolioDetailsContent from "../../../components/Portfolio/varamPortfolioContent";
import CtaAreaTwo from "../../../components/Common/CtaAreaTwo";
import Footer from "../../../components/Layouts/Footer";

const varamDetails = () => {
    return (
        <>
          <NavbarTwo />
    
          <PageBanner pageTitle="Varam.app" BGImage="/images/new/varam.webp" />
    
          <PortfolioDetailsContent />
    
          <CtaAreaTwo />
    
          <Footer />
        </>
      );
}

export default varamDetails