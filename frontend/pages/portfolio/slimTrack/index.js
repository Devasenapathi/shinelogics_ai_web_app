import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBanner from "../../../components/Common/PageBanner";
import PortfolioDetailsContent from "../../../components/Portfolio/slimtrack";
import CtaAreaTwo from "../../../components/Common/CtaAreaTwo";
import Footer from "../../../components/Layouts/Footer";

const KeerthipumpsDetails = () => {
    return (
        <>
          <NavbarTwo />
    
          <PageBanner pageTitle="Slim Tracker" BGImage="/images/new/slimtrack.webp" />
    
          <PortfolioDetailsContent />
    
          <CtaAreaTwo />
    
          <Footer />
        </>
      );
}

export default KeerthipumpsDetails