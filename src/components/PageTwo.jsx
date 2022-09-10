import React from "react";
import guidance from "../media/rs.jpg";
import research from "../media/rs1.jpg";

export default function PageTwo() {
  return (
    <>
      <div className="research">
        <div className="research-heading">
          <h1>What we offer</h1>
          <p className="text-box">
            Over the years, we have streamlined the process of consulting. Here
            are some noteworthy points pertaining to this process
          </p>
          <ul>
            <li> Open access</li>
            <li> Researcher-centric </li>
            <li> Rigorous peer review</li>
            <li> Dedicated support teams</li>
            <li> Custom-built technology</li>
            <li> Transparency and accountability</li>
          </ul>
          <button className="more-links">View More &#8663;</button>
        </div>
        <div className="guidance">
          <img src={guidance} alt="rs" />
          <div className="research-info">
            <h2> Research Guidance</h2>
            <p>
              Choose the most suitable research methodology based on the
              argument of your research.
            </p>
            <button className="view-more">Get Guidance</button>
          </div>
        </div>
        <div className="publication">
          <img src={research} alt="rs" />
          <div className="research-info">
            <h2> Research Publication</h2>
            <p>
              Help the writing and formatting of the chapters with the correct
              format, style, and flow of the chapters
            </p>
            <button className="view-more">Publish Help</button>
          </div>
        </div>
      </div>
    </>
  );
}
