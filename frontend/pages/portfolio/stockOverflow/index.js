import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBanner from "../../../components/Common/PageBanner";
import PortfolioDetailsContent from "../../../components/Portfolio/stockoverflow";
import CtaAreaTwo from "../../../components/Common/CtaAreaTwo";
import Footer from "../../../components/Layouts/Footer";

const KeerthipumpsDetails = () => {
    return (
        <>
          <NavbarTwo />
    
          <PageBanner pageTitle="Stock Overflow" BGImage="/images/new/stockoverflow.webp" />
    
          <PortfolioDetailsContent />
    
          <CtaAreaTwo />
    
          <Footer />
        </>
      );
}

export default KeerthipumpsDetails