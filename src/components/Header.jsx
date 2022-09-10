import React, { useState } from "react";
import light from "../media/light.svg";
import dark from "../media/dark.svg";
import searchIcon from "../media/search.svg";
import closeIcon from "../media/close.svg";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ theme, handleTheme }) {
  const animation = {
    initial: { y: "-10vw", opacity: 0 },
    animate: { y: "0", opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0 } },
    transition: { type: "spring", stiffness: 50 },
  };
  const [search, setSearchBar] = useState(false);
  function handleSearch() {
    setSearchBar(!search);
  }
  return (
    <>
      <header>
        <div className="header-items">
          <AnimatePresence>
            {!search && (
              <>
                <div>
                  <motion.div {...animation} className="org">
                    Ink Publication
                  </motion.div>
                </div>
                <div>
                  <motion.div {...animation} className="header-item">
                    <div className="dropdown">
                      <span id="#journal">Journals</span>
                      <div className="journal-menu">
                        <p>Recent</p>
                        <p>Updated</p>
                        <p>Trending</p>
                        <p>Favorites</p>
                        <p>Categories</p>
                      </div>
                    </div>
                    <div className="dropdown">
                      <span id="#publish">Publications</span>
                      <div className="publish-menu">
                        <p>Status</p>
                        <p>Guidance</p>
                        <p>Research</p>
                        <p>Submitted</p>
                        <p>Publish Now</p>
                      </div>
                    </div>

                    <div className="dropdown">
                      <span id="#payment">Payment</span>
                      <div className="payment-menu">
                        <p>Discounts</p>
                        <p>View Plans</p>
                        <p>Student Aid</p>
                        <p>Referral Code</p>
                        <p>Redeem Coupons</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </>
            )}
          </AnimatePresence>

          <div className={search ? "search" : "search-gap"}>
            <AnimatePresence>
              {search && (
                <>
                  <motion.img
                    {...animation}
                    className="search-icon-in"
                    src={searchIcon}
                    alt="search-icon"
                  ></motion.img>
                  <motion.input
                    {...animation}
                    className="search-box"
                    type="text"
                    placeholder="Search inkpublisher.com"
                  />
                </>
              )}
            </AnimatePresence>

            <motion.img
              {...animation}
              className="search-icon"
              src={search ? closeIcon : searchIcon}
              alt="search-icon"
              onClick={handleSearch}
            ></motion.img>

            <AnimatePresence>
              {!search && (
                <motion.img
                  {...animation}
                  className="theme"
                  onClick={handleTheme}
                  src={theme === "light" ? light : dark}
                  alt="theme"
                ></motion.img>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>
    </>
  );
}
