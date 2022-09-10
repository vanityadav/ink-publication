import React from "react";
import payment from "../media/4.jpg";
import publication from "../media/1.jpg";

export default function PageThree() {
  return (
    <>
      <div className="process-page">
        <div className="research-heading">
          <h1>How it Works</h1>
          <p className="text-box">
            We are unwavering in our mission and act with urgency to make all
            science openly available. Our role is to provide the world’s
            scientists with the best, the fastest, and the most efficient
            publishing experience.
          </p>
          <ul>
            <li> Speed </li>
            <li> Quality</li>
            <li> Innovation </li>
            <li> Collaboration </li>
          </ul>
          <button className="more-links">View More &#8663;</button>
        </div>
        <div className="guidance">
          <img src={publication} alt="rs" />
          <div className="research-info">
            <h2> Publication Process</h2>
            <p>
              Choose the most suitable research methodology based on the
              argument of your research.
            </p>
            <button className="view-more">View More</button>
          </div>
        </div>
        <div className="publication">
          <img src={payment} alt="rs" />
          <div className="research-info">
            <h2>Payment Process</h2>
            <p>
              Help the writing and formatting of the chapters with the correct
              format, style, and flow of the chapters
            </p>
            <button className="view-more">Check Plans</button>
          </div>
        </div>
      </div>
    </>
  );
}
