import { useState } from "react";
import "./shows.css";
import { tvShows } from "./data";

/** A navbar that allows users to choose between a list of shows */
const ShowSelection = () => {
  const [selectedShow, setSelectedShow] = useState([]);
  return (
    <nav className="shows">
      <ol>
        {tvShows.map((show) => (
          <li
            key={show.name}
            onClick={() => setSelectedShow(show)}
            className={show === selectedShow ? "selected" : ""}
          >
            {show.name}
          </li>
        ))}
      </ol>
    </nav>
  );
}
export default ShowSelection;