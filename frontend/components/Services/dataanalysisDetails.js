import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import singleServiceImg from "../../public/images/services/single-service.jpg";

const dataAnalysisDetails = () => {
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
            {/* <div className="col-lg-12 col-md-12">
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
            </div> */}

            <div className="col-lg-8 col-md-12">
              <div className="services-details-desc">
                <h2>Services Description</h2>
                <p>
                  At Shinelogics, we harness the power of Artificial
                  Intelligence (AI), Data Science, and Data Analytics to help
                  businesses unlock the full potential of their data. Our
                  innovative solutions are designed to extract meaningful
                  insights from complex datasets, enabling data-driven
                  decision-making and predictive capabilities that fuel growth
                  and innovation. Whether you're seeking to optimize processes,
                  uncover patterns, or enhance performance across your
                  operations, our team works closely with you to tailor
                  AI-powered solutions that align with your
                </p>
                <h3>Our Services:</h3>
                <p>
                  At Shinelogics, we provide advanced Data Science and Analytics
                  solutions to help businesses turn data into actionable
                  insights. By leveraging machine learning and predictive
                  analytics, we enable smarter decision-making and uncover
                  emerging trends.
                </p>
                <h3>Data Science Solutions</h3>
                <ul>
                  <li>
                    Predictive Modeling: Develop models to forecast trends and
                    aid proactive decision-making.
                  </li>
                  <li>
                    Machine Learning: Algorithms that learn and optimize
                    processes, driving automation.
                  </li>
                  <li>
                    Advanced Analytics: Discover hidden insights in data to make
                    informed business decisions.
                  </li>
                </ul>

                <h3>Data Analytics Solutions:</h3>

                <ul>
                  <li>
                    Descriptive Analytics: Summarize past data to identify key
                    trends.
                  </li>
                  <li>
                    Diagnostic Analytics: Analyze data to find the causes of
                    issues and provide solutions.
                  </li>
                  <li>
                    Prescriptive Analytics: Recommend actions to optimize
                    processes and outcomes.
                  </li>
                </ul>

                <h3>Our Approach:</h3>

                <ul>
                  <li>
                    Discovery & Consultation: Understand your business
                    challenges and data to identify the best solution.
                  </li>
                  <li>
                    Data Collection & Preparation: Gather, clean, and structure
                    data for efficient analysis.
                  </li>
                  <li>
                    Model Development: Design custom models and algorithms to
                    meet your needs.
                  </li>
                  <li>
                    Analytics & Insights: Extract insights from data using
                    statistical methods and visualization.
                  </li>
                  <li>
                    Integration: Implement data-driven insights into your
                    business systems.
                  </li>
                  <li>
                    Testing & Validation: Ensure the solution provides accurate
                    predictions and insights.
                  </li>
                  <li>
                    Deployment & Monitoring: Deploy solutions and monitor
                    performance for improvements.
                  </li>
                  <li>
                    Ongoing Support: Continuously optimize models and analytics
                    based on evolving data.
                  </li>
                </ul>

                <h3>Why Choose Shinelogics?</h3>

                <ul>
                  <li>
                    Tailored Solutions: Customized data solutions for your
                    unique business challenges.
                  </li>
                  <li>
                    Expert Team: Experienced data scientists and AI experts
                    delivering actionable insights.
                  </li>
                  <li>
                    End-to-End Service: Comprehensive support from data
                    collection to ongoing optimization.
                  </li>
                  <li>
                    Cutting-Edge Technology: Using the latest AI and machine
                    learning technologies.
                  </li>
                  <li>
                    Continuous Improvement: Ongoing optimization of solutions
                    for sustained performance.
                  </li>
                </ul>

                <p>
                  Transform your data into a strategic asset with AI-powered
                  solutions. Contact us today to unlock the potential of your
                  data and drive innovation.
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

export default dataAnalysisDetails;
