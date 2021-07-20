import React from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_byi5juf",
        "template_29bm57y",
        e.target,
        "user_L91EjUFu8Ogph7svnjdgI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <div className="container-fluid">
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto" id="contact">
            <div className="col-10 form-group mx-auto">
              <h2 className="pb-3">Contact Me</h2>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="col-10 pt-2 form-group mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
              />
            </div>
            <div className="col-10 pt-2 form-group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div className="col-10 pt-2 form-group mx-auto">
              <textarea
                className="form-control"
                name="message"
                placeholder="Your message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="col-10 pt-3 mx-auto">
              <input
                type="submit"
                className="btn btn-info"
                value="Send Message"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
