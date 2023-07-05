import useFetch from "./useFetch";
import { useState } from "react";

import ListItem from "../listItem";

export default function SearchBox({ placeholder, label }) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const handleKeyUp = (e) => {
    if (e.keyCode == 38) {
      if (activeIndex == 0) {
        setActiveIndex(4);
      } else {
        setActiveIndex((prev) => prev - 1);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode == 40) {
      if (activeIndex == 4) {
        setActiveIndex(0);
      } else {
        setActiveIndex((prev) => prev + 1);
      }
    }
  };

  const [data, error] = useFetch(query);

  return (
    <>
      <label>{label}</label>
      <div>
        <input
          placeholder={placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
        />
        <ListItem items={data} activeIndex={activeIndex} />
      </div>
    </>
  );
}
