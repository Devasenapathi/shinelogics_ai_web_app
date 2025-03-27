import React from 'react'
import NavbarTwo from '../../../components/Layouts/NavbarTwo';
import PageBanner from '../../../components/Common/PageBanner';

import CtaAreaTwo from '../../../components/Common/CtaAreaTwo';
import Footer from '../../../components/Layouts/Footer';
import AwsServiceDetailsContent from '../../../components/HomePages/Technology/aws';


const react = () => {
  return (
        <>
          <NavbarTwo />
    
          <PageBanner pageTitle="AWS" BGImage="/images/new/aws.webp" />
    
          <AwsServiceDetailsContent />
    
          <CtaAreaTwo />
    
          <Footer />
        </>
      );
}

export default react