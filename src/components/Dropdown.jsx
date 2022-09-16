import React from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";

export default function Dropdown() {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [selected, setSecected] = useState();
  const dropRef = useRef();

  useEffect(() => {
    function handleDropdown(event) {
      console.log(dropRef.current);
      console.log(selected);
      console.log(dropdownActive);
      console.log(event.target);
      if (event.target !== dropRef.current) setDropdownActive(false);
    }

    document.addEventListener("click", handleDropdown);

    return () => {
      document.removeEventListener("click", handleDropdown);
    };
  });

  const items = ["array", "react", "hello", "item"];
  return (
    <div className="dropdown">
      <div
        ref={dropRef}
        onClick={() => setDropdownActive(!dropdownActive)}
        className="dropdown-button"
      >
        {selected ?? "Choose One"}
      </div>

      {dropdownActive && (
        <div className="dropdown-content">
          {items.map((item) => (
            <div
              key={item}
              onClick={() => {
                setSecected(item);
                setDropdownActive(false);
              }}
              className="dropdown-item"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
