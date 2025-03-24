import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import singleServiceImg from "../../../public/images/services/single-service.jpg";

const AwsServiceDetailsContent = () => {
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
                <h2>Technology Description</h2>
                <p>
                  Amazon Web Services (AWS) offers a comprehensive suite of
                  cloud services for deploying, managing, and scaling
                  applications. Among the most widely used AWS services in
                  product development are EC2, S3, and Lambda.
                </p>

                <h2>EC2 (Elastic Compute Cloud)</h2>
                <p>
                  EC2 provides scalable virtual servers in the cloud. It allows
                  you to run applications on-demand with customizable computing
                  power, storage, and networking capacity.
                </p>
                <h3>Key Features:</h3>
                <ul>
                  <li>
                    <strong>Scalability:</strong> Scale up or down based on
                    demand.
                  </li>
                  <li>
                    <strong>Variety of Instance Types:</strong> Choose from a
                    wide range of instance types based on workload needs.
                  </li>
                  <li>
                    <strong>Pay-as-you-go:</strong> Flexible pricing based on
                    usage.
                  </li>
                </ul>

                <h2>S3 (Simple Storage Service)</h2>
                <p>
                  S3 is a highly scalable object storage service designed to
                  store and retrieve large amounts of data.
                </p>
                <h3>Key Features:</h3>
                <ul>
                  <li>
                    <strong>Durability:</strong> Offers 99.999999999%
                    durability.
                  </li>
                  <li>
                    <strong>Scalability:</strong> Store an unlimited amount of
                    data without worrying about capacity.
                  </li>
                  <li>
                    <strong>Security:</strong> Built-in encryption and access
                    control features.
                  </li>
                </ul>

                <h2>Lambda</h2>
                <p>
                  AWS Lambda is a serverless compute service that automatically
                  runs your code in response to events without provisioning or
                  managing servers.
                </p>
                <h3>Key Features:</h3>
                <ul>
                  <li>
                    <strong>Event-Driven:</strong> Runs code triggered by events
                    (e.g., file uploads, database updates).
                  </li>
                  <li>
                    <strong>Automatic Scaling:</strong> Scales automatically
                    based on the number of requests.
                  </li>
                  <li>
                    <strong>Cost-Efficient:</strong> Pay only for the compute
                    time consumed by your code.
                  </li>
                </ul>

                <h3>Advantages:</h3>
                <ul>
                  <li>
                    <strong>Scalability:</strong> Easily scale resources up or
                    down based on demand.
                  </li>
                  <li>
                    <strong>Reliability:</strong> High availability and uptime,
                    backed by AWS’s global infrastructure.
                  </li>
                  <li>
                    <strong>Cost-Efficiency:</strong> Pay-as-you-go pricing,
                    saving costs on infrastructure.
                  </li>
                  <li>
                    <strong>Security:</strong> Robust security measures,
                    including encryption and access control.
                  </li>
                </ul>

                <h3>When to Use AWS:</h3>

                <ul>
                  <li>
                    <strong>Web Applications:</strong> Host and scale websites
                    with ease.
                  </li>
                  <li>
                    <strong>Data Storage:</strong> Securely store and retrieve
                    large datasets using S3.
                  </li>
                  <li>
                    <strong>Serverless Computing:</strong> Run event-driven
                    applications with Lambda, eliminating the need for managing
                    servers.
                  </li>
                  <li>
                    <strong>Enterprise-Level Applications:</strong> AWS provides
                    the flexibility and power needed for large-scale,
                    mission-critical applications.
                  </li>
                </ul>

                <p>
                  At Shinelogics, we leverage AWS EC2, S3, and Lambda to deliver
                  highly scalable, secure, and efficient cloud-based solutions
                  that drive business growth and innovation.
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

export default AwsServiceDetailsContent;
