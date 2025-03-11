import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import singleServiceImg from "../../public/images/services/single-service.jpg";

const seoDetails = () => {
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
                  At Shinelogics, we help you stand out in the competitive
                  digital landscape through our SEO and ASO services. Our
                  strategies are designed to enhance your online and app store
                  visibility, driving qualified traffic and increasing
                  engagement.
                </p>
                <h3>Search Engine Optimization (SEO):</h3>
                <p>
                  Our SEO services improve your website’s ranking on search
                  engines, boosting organic traffic and conversions.
                </p>
                <ul>
                  <li>
                    Website Audit & Analysis: Identify key areas for
                    improvement.
                  </li>
                  <li>Keyword Research: Target high-value search terms.</li>
                  <li>
                    On-Page Optimization: Enhance content, meta tags, and site
                    structure.
                  </li>
                  <li>
                    Technical SEO: Ensure mobile-friendliness and improved site
                    performance.
                  </li>
                  <li>
                    Link Building: Increase domain authority with quality
                    backlinks.
                  </li>
                  <li>
                    Monitoring & Reporting: Track performance and provide
                    actionable insights.
                  </li>
                </ul>
                <h3>App Search Optimization (ASO):</h3>

                <p>
                  We optimize your app’s visibility in app stores like Google
                  Play and the Apple App Store to increase downloads and
                  retention.
                </p>

                <ul>
                  <li>
                    App Audit & Market Research: Analyze app performance and
                    competitors.
                  </li>
                  <li>
                    Keyword Optimization: Identify high-traffic keywords for app
                    categories.
                  </li>
                  <li>
                    Metadata Optimization: Refine app title, description, and
                    tags.
                  </li>
                  <li>
                    Icon & Screenshot Optimization: Improve visual appeal and
                    CTR.
                  </li>
                  <li>
                    Rating & Review Management: Encourage positive ratings to
                    boost credibility.
                  </li>
                  <li>
                    Performance Tracking: Monitor rankings and refine strategies
                    for better results.
                  </li>
                </ul>

                <h3>Our Approach:</h3>

                <p>
                  We follow a data-driven, collaborative approach to align SEO
                  and ASO strategies with your business goals. From discovery to
                  optimization, we ensure a results-driven process.
                </p>

                <ul>
                  <li>
                    Discovery & Consultation: Understand your business and
                    target audience.
                  </li>
                  <li>
                    Strategy Development: Customize strategies based on
                    research.
                  </li>
                  <li>
                    Implementation & Optimization: Execute and optimize both
                    website and app strategies.
                  </li>
                  <li>
                    Performance Tracking & Reporting: Continuous monitoring and
                    regular reports.
                  </li>
                </ul>

                <h3>Why Choose Shinelogics?</h3>

                <ul>
                  <li>
                    Proven Expertise: Experienced team delivering significant
                    results.
                  </li>
                  <li>
                    Tailored Strategies: Custom solutions based on your unique
                    business needs.
                  </li>
                  <li>
                    Holistic Approach: Integrated SEO and ASO for maximum
                    visibility.
                  </li>
                  <li>
                    Results-Driven: Focus on driving measurable traffic,
                    downloads, and conversions.
                  </li>
                </ul>

                <p>
                  Let Shinelogics be your trusted partner in maximizing your
                  digital presence and reaching your audience through effective
                  SEO and ASO strategies. We help you achieve higher rankings,
                  improved visibility, and better engagement, whether it's on
                  search engines or within app stores.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default seoDetails;
