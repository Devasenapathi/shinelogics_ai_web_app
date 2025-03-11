import React from "react";
import Link from "next/link";
import Image from "next/image";

const UXProcessData = [
  {
    image: "/images/case-studies/studie1.jpg",
    shapeImage: "/images/case-studies/studie-shape1.png",
    title: "Digitalization Partnership",
    category: "The Hindu",
    viewDetails: "/portfolio/portfolio-details/",
    aosDelay: "100",
  },
  {
    image: "/images/case-studies/studie2.jpg",
    shapeImage: "/images/case-studies/studie-shape2.png",
    title: "Frontend development",
    category: "Farm2bag",
    viewDetails: "/portfolio/farm2bag/",
    aosDelay: "200",
  },
  {
    image: "/images/case-studies/studie3.jpg",
    shapeImage: "/images/case-studies/studie-shape3.png",
    title: "Revolutionizing Inventory and Operations Management with Shinelogics’ Custom SAP Alternative",
    category: "Keerthi Pumps pvt ltd",
    viewDetails: "/portfolio/keerthipumps/",
    aosDelay: "300",
  },
  {
    image: "/images/case-studies/studie4.jpg",
    shapeImage: "/images/case-studies/studie-shape4.png",
    title: "Matrimony App Development by ShineLogics",
    category: "Varam.app",
    viewDetails: "/portfolio/varam/",
    aosDelay: "400",
  },
  {
    image: "/images/case-studies/studie5.jpg",
    shapeImage: "/images/case-studies/studie-shape5.png",
    title: "Inventory Management Software by ShineLogics",
    category: "Stock Overflow",
    viewDetails: "/portfolio/portfolio-details/",
    aosDelay: "500",
  },
  {
    image: "/images/case-studies/studie6.jpg",
    shapeImage: "/images/case-studies/studie-shape6.png",
    title: "Calorie Tracking App by ShineLogics",
    category: "Slim Track",
    viewDetails: "/portfolio/portfolio-details/",
    aosDelay: "600",
  },
];

const UXProcess = () => {
  return (
    <>
      <div className="row justify-content-center">
        {UXProcessData &&
          UXProcessData.slice(0, 6).map((value, i) => (
            <div className="col-lg-4 col-md-6 mt-40" key={i}>
              <div
                className="single-case-studies"
                style={{
                  backgroundImage: `url(${value.image})`,
                }}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={value.aosDelay}
              >
                <div className="content">
                  <span>
                    <Link href={value.viewDetails}>{value.category}</Link>
                  </span>
                  <h3>
                    <Link href={value.viewDetails}>{value.title}</Link>
                  </h3>
                </div>

                <Link href={value.viewDetails} className="btn btn-primary">
                  View Case Study
                </Link>

                <div className="shape">
                  <Image
                    src={value.shapeImage}
                    alt="shape"
                    width={250}
                    height={250}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default UXProcess;
