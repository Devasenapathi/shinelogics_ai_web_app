import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import singleServiceImg from "../../public/images/services/single-service.jpg";

const CyberSecurityDetails = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="services-details-image">
                <Image
                  src={singleServiceImg}
                  alt="image"
                  width={1250}
                  height={700}
                />

                <div className="video-box">
                  <div
                    onClick={() => setToggler(!toggler)}
                    className="video-btn"
                  >
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <div className="services-details-desc">
                <h2>Services Description</h2>
                <p>
                  At Shinelogics, we provide comprehensive cybersecurity
                  services to safeguard your business from growing cyber
                  threats. Our solutions protect your data, systems, and
                  infrastructure, ensuring business continuity, regulatory
                  compliance, and peace of mind in a digital-first world.
                </p>
                <h3>Our Cybersecurity Services:</h3>
                <ul>
                  <li>
                    Network Security: Protect your network with firewalls,
                    intrusion detection, and secure design.
                  </li>
                  <li>
                    Data Protection & Encryption: Safeguard sensitive data with
                    advanced encryption and secure storage.
                  </li>
                  <li>
                    Threat Monitoring & Response: 24/7 monitoring and rapid
                    response to security threats.
                  </li>
                  <li>
                    Vulnerability Management: Identify and remediate system
                    weaknesses to prevent breaches.
                  </li>
                  <li>
                    Compliance & Risk Management: Ensure compliance with
                    regulations like GDPR, HIPAA, and PCI-DSS.
                  </li>
                  <li>
                    Security Audits & Penetration Testing: Simulate attacks to
                    uncover and address vulnerabilities.
                  </li>
                  <li>
                    Cloud Security: Secure cloud infrastructure and applications
                    from potential threats.
                  </li>
                  <li>
                    Employee Training & Awareness: Educate employees on
                    cybersecurity best practices.
                  </li>
                </ul>

                <h3>Our Approach:</h3>

                <ul>
                  <li>
                    Discovery & Consultation: Assess your cybersecurity needs
                    and identify vulnerabilities.
                  </li>
                  <li>
                    Risk Assessment & Security Audit: Evaluate your security
                    posture and potential threats.
                  </li>
                  <li>
                    Customized Strategy Development: Create a tailored plan to
                    protect your data and systems.
                  </li>
                  <li>
                    Solution Implementation: Deploy firewalls, encryption, and
                    monitoring systems.
                  </li>
                  <li>
                    Threat Monitoring & Continuous Protection: Monitor for
                    threats 24/7 and respond in real-time.
                  </li>
                  <li>
                    Incident Response & Remediation: Swiftly handle breaches,
                    recover data, and prevent recurrence.
                  </li>
                  <li>
                    Ongoing Support & Maintenance: Provide continuous updates,
                    patches, and monitoring.
                  </li>
                  <li>
                    Employee Awareness & Training: Offer training to recognize
                    threats and maintain security hygiene.
                  </li>
                  <li>
                    Compliance & Reporting: Ensure adherence to regulatory
                    standards and provide detailed security reports.
                  </li>
                </ul>

                <h3>Why Choose Shinelogics?</h3>

                <ul>
                  <li>
                    Comprehensive Protection: End-to-end services covering
                    proactive defense, monitoring, and incident response.
                  </li>
                  <li>
                    Expertise: Deep knowledge of current threats and industry
                    best practices.
                  </li>
                  <li>
                    Customized Solutions: Tailored services to meet your
                    specific business needs.
                  </li>
                  <li>
                    Compliance Assurance: Ensure regulatory compliance to
                    minimize risk and penalties.
                  </li>
                  <li>
                    Continuous Support: Ongoing monitoring, updates, and support
                    for long-term security.
                  </li>
                </ul>

                <p>
                  Safeguard your business’s digital assets with our
                  cybersecurity solutions. Contact us today to learn how we can
                  protect your organization from evolving cyber threats.
                </p>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-12">
              <div className="services-details-info">
                <h3>Our Working Process</h3>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </li>
                  <li>
                    Creative Team Sed ut perspiciatis unde omnis iste natus
                    error sit voluptatem.
                  </li>
                  <li>
                    Branding But I must explain to you how all this mistaken
                    idea of denouncing.
                  </li>
                  <li>
                    Clean Code At vero eos et accusamus et iusto odio
                    dignissimos ducimus qui.
                  </li>
                  <li>
                    UX/UI Friendly On the other hand, we denounce with righteous
                    indignation.
                  </li>
                  <li>
                    24/7 Support There are many variations of passages of Lorem
                    Ipsum available.
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CyberSecurityDetails;
