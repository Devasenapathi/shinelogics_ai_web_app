import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const { name, email, number, subject, text } = contact;
      const payload = { name, email, number, subject, text };
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="contact-form">
        <div className="contact-title">
          <h2>Get In Touch</h2>
          <p>
            Have a project in mind? We’d love to hear from you! Reach out to us
            today and let’s collaborate to turn your ideas into reality with
            Shinelogics.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="contact-form-box">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      value={contact.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="number"
                      placeholder="Phone number"
                      className="form-control"
                      value={contact.number}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="form-control"
                      value={contact.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea
                      name="text"
                      cols="30"
                      rows="6"
                      placeholder="Write your message..."
                      className="form-control"
                      value={contact.text}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-sm-12">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
