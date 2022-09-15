import React from "react";
import { useState } from "react";

export default function Dropdown() {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [selected, setSecected] = useState();

  const items = ["array", "react", "hello", "item"];
  return (
    <div className="dropdown">
      <div
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
