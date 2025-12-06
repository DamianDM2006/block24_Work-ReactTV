import { useState } from "react";
import EpisodeList from "./episodes/EpisodeList.jsx";
import EpisodeDetails from "./episodes/EpisodeDetails.jsx";
import { tvShows } from "./shows/data.js";
import ShowSelection from "./shows/ShowSelection.jsx";
/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
const App = () => {
  const [selectedEpisode, setSelectedEpisode] = useState([]);
  

  return (
    <>
      <header>
        <p>React TV</p>
      </header>
      <main>
        <ShowSelection />
      </main>
    </>
  );
}

export default App;
