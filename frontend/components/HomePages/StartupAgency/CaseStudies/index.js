import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import UXProcess from "./UXProcess";
import UserExperience from "./UserExperience";
import UserInterface from "./UserInterface";
import Brand from "./Brand";
import Product from "./Product";

const CaseStudies = () => {
  return (
    <>
      <section className="case-studies-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Case Studies</h2>
            <p>
              Explore our case studies to see how we’ve helped businesses
              achieve success with innovative solutions.
            </p>
          </div>

          <div className="case-studies-tabs">
            <Tabs>
              {/* <TabList>
                <Tab>UX Process</Tab>
                <Tab>User Experience</Tab>
                <Tab>User Interface</Tab>
                <Tab>Brand</Tab>
                <Tab>Product</Tab>
              </TabList> */}

              <TabPanel>
                <UXProcess />
              </TabPanel>

              <TabPanel>
                <UserExperience />
              </TabPanel>

              <TabPanel>
                <UserInterface />
              </TabPanel>

              <TabPanel>
                <Brand />
              </TabPanel>

              <TabPanel>
                <Product />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
