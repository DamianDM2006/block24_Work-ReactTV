import "./shows.css";
import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";

/** Allows users to browse through the episodes of the given show */
const ShowDetails = ({
  selectedShow,
  // selectedEpisode,
  // setSelectedEpisode,
  episode,
}) => {

  const [selectedEpisode, setSelectedEpisode] = useState();
  console.log(selectedEpisode);
  console.log(episode);

  if (selectedShow.length === 0) {
    return (
      <section className="show-details">
        <h3>Shows on React TV</h3>
        <p>Select a show to learn more.</p>
      </section>
    );
  }

  return (
    <section className="show">
      <h2>{selectedShow.name} </h2>
      <p>{selectedShow.genre} series</p>
      <EpisodeList
        episodes={selectedShow.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails
        episode={selectedEpisode}
      />
    </section>
  );
};

export default ShowDetails;
