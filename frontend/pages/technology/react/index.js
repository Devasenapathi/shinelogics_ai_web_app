import React from 'react'
import NavbarTwo from '../../../components/Layouts/NavbarTwo';
import PageBanner from '../../../components/Common/PageBanner';

import CtaAreaTwo from '../../../components/Common/CtaAreaTwo';
import Footer from '../../../components/Layouts/Footer';
import ReactServiceDetailsContent from '../../../components/HomePages/Technology/react';

const react = () => {
  return (
        <>
          <NavbarTwo />
    
          <PageBanner pageTitle="React JS" BGImage="/images/new/REACTJS.webp" />
    
          <ReactServiceDetailsContent />
    
          <CtaAreaTwo />
    
          <Footer />
        </>
      );
}

export default react