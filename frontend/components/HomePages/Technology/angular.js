import React from 'react'

const AngularServiceDetailsContent = () => {
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
                  Angular.js is an open-source JavaScript framework developed by Google for building dynamic, single-page web applications. It offers powerful features like two-way data binding, dependency injection, and a Model-View-Controller (MVC) architecture, making it ideal for developing scalable and maintainable applications.
                  </p>
                  <h3>Advantages:</h3>
                  <ul>
                    <li>
                      <strong>Fast Rendering:</strong> Thanks to the Virtual DOM
                      for efficient updates.
                    </li>
                    <li>
                      <strong>Reusable Components:</strong> Makes development more
                      modular and scalable.
                    </li>
                    <li>
                      <strong>Strong Community:</strong> Wide support, resources,
                      and libraries for faster development.
                    </li>
                    <li>
                      <strong>SEO-Friendly:</strong> Can be used with server-side
                      rendering to improve SEO.
                    </li>
                  </ul>
  
                  <h3>When to Use React.js:</h3>
  
                  <ul>
                    <li>
                      <strong>Building Single-Page Applications (SPAs):</strong>{" "}
                      With dynamic content.
                    </li>
                    <li>
                      <strong>Developing Interactive UIs:</strong> With real-time
                      updates.
                    </li>
                    <li>
                      <strong>Creating Modular, Scalable Applications.</strong>
                    </li>
                  </ul>
  
                  <p>
                    React.js provides a powerful, efficient way to build modern,
                    dynamic user interfaces. At Shinelogics, we use React.js to
                    deliver high-performance, user-friendly web applications.
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
}

export default AngularerviceDetailsContent