import React from 'react'
import NavbarTwo from '../../../components/Layouts/NavbarTwo';
import PageBanner from '../../../components/Common/PageBanner';

import CtaAreaTwo from '../../../components/Common/CtaAreaTwo';
import Footer from '../../../components/Layouts/Footer';
import NodeServiceDetailsContent from '../../../components/HomePages/Technology/node';

const react = () => {
  return (
        <>
          <NavbarTwo />
    
          <PageBanner pageTitle="Node JS" BGImage="/images/new/nodejs.webp" />
    
          <NodeServiceDetailsContent />
    
          <CtaAreaTwo />
    
          <Footer />
        </>
      );
}

export default react