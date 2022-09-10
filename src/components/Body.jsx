import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

import PageOne from "./PageOne";
import PageThree from "./PageThree";
import PageTwo from "./PageTwo";

export default function Body() {
  // const[(ref, inView, entry)] = useInView(options);

  return (
    <div className="main-body">
      <PageOne />
      <hr className="line" />
      <PageTwo />
      <hr className="line" />
      <PageThree />
      <hr className="line" />
    </div>
  );
}
