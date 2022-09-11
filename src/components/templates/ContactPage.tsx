import React from "react";

interface Props {
  second_content_block: string;
  address: string;
  city: string;
  postal_code: string;
  phone: string;
}

const ContactPage: React.FC<Props> = ({
  second_content_block,
  address,
  city,
  postal_code,
  phone,
}) => {
  return (
    <section className="section bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="section-title">Contact Us</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 mb-4 mb-lg-0">
            <form action="#">
              <input
                type="text"
                className="form-control mb-3"
                id="name"
                name="name"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="form-control mb-3"
                id="mail"
                name="mail"
                placeholder="Your Email"
              />
              <input
                type="text"
                className="form-control mb-3"
                id="subject"
                name="subject"
                placeholder="Subject"
              />
              <textarea
                name="message"
                id="message"
                className="form-control mb-3"
                placeholder="Your Message"
              />
              <button type="submit" value="send" className="btn btn-primary">
                SEND MESSAGE
              </button>
            </form>
          </div>
          <div className="col-lg-5">
            <p className="mb-5">{second_content_block}</p>
            <a href="#" className="text-color h5 d-block">
              {phone}
            </a>
            <p>
              {address}
              <br />
              {city} {postal_code}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
