import React from "react";
import Map from "./Map";
import SendMail from "./SendMail";

export default function Contact({ theme }) {
  return (
    <>
      <div className="contact-page">
        <h1>
          Get in touch <br />
          with us
        </h1>

        <div className="contact-contents">
          <div>
            <p>Ink Publisher</p>
            <p>274, Geo-Building, Gurgoan 122001, India</p>
            <Map theme={theme} />
            <div className="contact-info-below-map">
              <div>
                <p>Phone Number</p>
                <p>+91 2504521534</p>
              </div>
              <div>
                <p>Email</p>
                <p>inkpublication@gmail.com</p>
              </div>
            </div>
          </div>
          <SendMail />
        </div>
      </div>
    </>
  );
}
