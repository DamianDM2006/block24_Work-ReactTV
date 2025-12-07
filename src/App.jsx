import { useState } from "react";
import EpisodeList from "./episodes/EpisodeList.jsx";
import EpisodeDetails from "./episodes/EpisodeDetails.jsx";
import { tvShows } from "./shows/data.js";
import ShowSelection from "./shows/ShowSelection.jsx";
import ShowDetails from "./shows/ShowDetails.jsx";
/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
*/
const App = () => {
  // const [tvShows, setTvShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState([]);
  
console.log(selectedShow);


  return (
    <>
      <header>
        <p>React TV</p>
      </header>
      <main>
        <ShowSelection 
          tvShows={tvShows}
          setSelectedShow={setSelectedShow}
          selectedShow={selectedShow}
        />
        <EpisodeList /> 
      </main>
    </>
  );
}

export default App;
