import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import singleServiceImg from "../../../public/images/services/single-service.jpg";

const AzureServiceDetailsContent = () => {
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
                  Microsoft Azure offers a wide range of cloud services to help
                  businesses build, deploy, and manage applications. Key
                  services like Azure Virtual Machines (VMs) and Azure Cloud
                  Storage are critical for deploying scalable, secure, and
                  efficient applications.
                </p>

                <h3>Azure Virtual Machine (VM):</h3>
                <p>
                  Azure VM allows you to run virtualized servers in the cloud,
                  providing on-demand computing resources.
                </p>
                <h4>Key Features:</h4>
                <ul>
                  <li>
                    <strong>Scalability:</strong> Scale up or down based on
                    workloads.
                  </li>
                  <li>
                    <strong>Customizable:</strong> Choose from a variety of VM
                    sizes and configurations to meet your application’s needs.
                  </li>
                  <li>
                    <strong>Cost-Effective:</strong> Pay only for the compute
                    resources you use.
                  </li>
                </ul>

                <h3>Azure Cloud Storage:</h3>
                <p>
                  Azure Storage is a secure and scalable cloud storage solution
                  for storing various types of data, including files, databases,
                  and backups.
                </p>
                <h4>Key Features:</h4>
                <ul>
                  <li>
                    <strong>Durability:</strong> High durability with
                    geo-redundant storage options.
                  </li>
                  <li>
                    <strong>Scalable:</strong> Store unlimited amounts of data
                    with flexibility to scale as needed.
                  </li>
                  <li>
                    <strong>Security:</strong> Advanced encryption and access
                    control features.
                  </li>
                </ul>

                <h3>Advantages:</h3>
                <ul>
                  <li>
                    <strong>Scalability:</strong> Easily scale virtual machines
                    and storage to handle growing data and workloads.
                  </li>
                  <li>
                    <strong>Security:</strong> Built-in security measures,
                    including encryption and advanced threat protection.
                  </li>
                  <li>
                    <strong>Integration:</strong> Seamlessly integrates with
                    Microsoft tools and services.
                  </li>
                  <li>
                    <strong>Cost Efficiency:</strong> Pay-as-you-go pricing and
                    flexible billing options.
                  </li>
                </ul>

                <h3>When to Use Azure:</h3>

                <ul>
                  <li>
                    <strong>Virtualized Computing:</strong> Run virtual servers
                    and applications with Azure VM.
                  </li>
                  <li>
                    <strong>Data Storage:</strong> Store and manage large
                    amounts of data securely using Azure Cloud Storage.
                  </li>
                  <li>
                    <strong>Enterprise Solutions:</strong> Ideal for businesses
                    relying on Microsoft technologies and seeking seamless
                    integration.
                  </li>
                </ul>

                <p>
                  At Shinelogics, we utilize Azure Virtual Machines and Azure
                  Cloud Storage to deploy scalable, reliable, and secure
                  cloud-based applications that optimize performance and
                  business operations.
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

export default AzureServiceDetailsContent;
