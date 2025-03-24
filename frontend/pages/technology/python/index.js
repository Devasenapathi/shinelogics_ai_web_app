import React from 'react'
import NavbarTwo from '../../../components/Layouts/NavbarTwo';
import PageBanner from '../../../components/Common/PageBanner';

import CtaAreaTwo from '../../../components/Common/CtaAreaTwo';
import Footer from '../../../components/Layouts/Footer';
import NextServiceDetailsContent from '../../../components/HomePages/Technology/next';

const react = () => {
  return (
        <>
          <NavbarTwo />
    
          <PageBanner pageTitle="Python" BGImage="/images/page-banner1.jpg" />
    
          <NextServiceDetailsContent />
    
          <CtaAreaTwo />
    
          <Footer />
        </>
      );
}

export default react