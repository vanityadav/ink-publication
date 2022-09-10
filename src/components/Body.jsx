import React, { useEffect, useRef, useState } from "react";
import home from "../media/Home.jpg";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import guidance from "../media/rs.jpg";
import research from "../media/rs1.jpg";
import payment from "../media/4.jpg";
import publication from "../media/1.jpg";

export default function Body() {
  // const[(ref, inView, entry)] = useInView(options);

  return (
    <div className="main-body">
      <div className="about-us">
        <div className="heading">
          <h1>
            Your gateway to <br />
            world-class <br />
            research journals
          </h1>
        </div>
        <div className="content-info">
          <p>
            All author needs to get their research published with a tight
            schedule with minimal budget in indexed and reputed journal. Many
            institutions require different journals indexed in different
            databases. So for all these issue we come forward to assist in best
            way we can
          </p>
        </div>
      </div>
      <div className="home-items">
        <div className="counters">
          <div className="countries">
            <CountUp
              className="big-numbers"
              start={0}
              end={180}
              duration={3}
              delay={1}
            />
            <span>Countries</span>
          </div>
          <div className="customers">
            <CountUp
              className="big-numbers"
              start={0}
              end={10000}
              duration={3}
              delay={1}
            />
            <span>Customers</span>
          </div>
        </div>
        <div className="img-container">
          <img className="home-image" src={home} alt="" />
        </div>
      </div>

      <hr className="line" />

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

      <hr className="line" />

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
      <hr className="line" />
    </div>
  );
}
