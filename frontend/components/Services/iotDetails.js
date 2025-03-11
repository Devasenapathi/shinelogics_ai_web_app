import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import singleServiceImg from "../../public/images/services/single-service.jpg";

const iotDetails = () => {
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
                  At Shinelogics, we provide innovative IoT solutions that
                  connect devices, systems, and data to enhance decision-making
                  and boost operational efficiency. Our custom IoT systems
                  integrate seamlessly with your infrastructure, enabling
                  real-time monitoring and optimization. From smart homes to
                  industrial automation, we deliver scalable, secure, and
                  high-performance solutions that transform your operations and
                  keep you ahead of the competition.
                </p>
                <h3>Our Services:</h3>
                <ul>
                  <li>
                    Smart Home Automation: Intelligent systems for seamless
                    control of devices like lighting, security, HVAC, and
                    entertainment, improving comfort, energy efficiency, and
                    security.
                  </li>
                  <li>
                    Industrial Automation: Optimizing industrial processes
                    through real-time data and predictive analytics to reduce
                    downtime and improve efficiency.
                  </li>
                  <li>
                    Asset Tracking & Management: Real-time tracking of assets to
                    improve inventory management, reduce losses, and enhance
                    operational efficiency.
                  </li>
                  <li>
                    Data-Driven Decision-Making: Collecting and analyzing data
                    from devices to provide insights that drive smarter business
                    decisions.
                  </li>
                </ul>

                <h3>Our Approach:</h3>

                <ul>
                  <li>
                    Discovery & Consultation: Understand your needs and
                    infrastructure to develop the best IoT strategy.
                  </li>
                  <li>
                    Solution Design: Design customized IoT solutions that
                    integrate with your systems.
                  </li>
                  <li>
                    Development & Prototyping: Build and test IoT solutions,
                    ensuring functionality and refinement.
                  </li>
                  <li>
                    Integration: Ensure smooth integration with existing systems
                    for real-time data exchange.
                  </li>
                  <li>
                    Testing & Quality Assurance: Test for reliability, security,
                    and performance under various conditions.
                  </li>
                  <li>
                    Deployment: Deploy the IoT solution with full support for
                    smooth transition and adoption.
                  </li>
                  <li>
                    Ongoing Monitoring & Maintenance: Provide continuous
                    monitoring and updates based on evolving needs.
                  </li>
                </ul>

                <h3>Why Choose Shinelogics?</h3>

                <ul>
                  <li>
                    Custom Solutions: Tailored IoT solutions designed for your
                    business needs.
                  </li>
                  <li>
                    IoT Expertise: Experienced team delivering reliable
                    solutions across industries.
                  </li>
                  <li>
                    End-to-End Service: Full support from consultation to
                    ongoing maintenance.
                  </li>
                  <li>Scalability: Solutions that grow with your business.</li>
                  <li>
                    Data-Driven Insights: Turn complex data into actionable
                    insights for better operations and customer experiences.
                  </li>
                </ul>

                <p>
                  Get Started with Shinelogics’ IoT Solutions Leverage the power
                  of IoT to enhance your business operations. Contact us today
                  to discuss how we can help you optimize efficiency and stay
                  ahead of the competition.
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

export default iotDetails;
