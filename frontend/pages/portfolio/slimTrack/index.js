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
    
          <PageBanner pageTitle="Keerthipumps ERP" BGImage="/images/page-banner2.jpg" />
    
          <PortfolioDetailsContent />
    
          <CtaAreaTwo />
    
          <Footer />
        </>
      );
}

export default KeerthipumpsDetails