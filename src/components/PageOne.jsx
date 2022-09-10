import React from "react";
import home from "../media/Home.jpg";

import CountUp from "react-countup";

export default function PageOne() {
  return (
    <>
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
    </>
  );
}
