import "./shows.css";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";

/** Allows users to browse through the episodes of the given show */
const ShowDetails = ({selectedShow, selectedEpisode, episode}) => {

  console.log(`select episode`, selectedEpisode);
  console.log(`episode`, episode);

  if (selectedShow.length === 0) {
    return (
      <section className="show-details">
        <h3>Shows on React TV</h3>
        <p>Select a show to learn more.</p>
      </section>
    )
  }
  
  return (
    <section className="show">
      <h2>{selectedShow.name} </h2>
      <p>{selectedShow.genre} series</p>
       <EpisodeList episodes={selectedShow.episodes}/>
       <EpisodeDetails />
    </section>
  )
}

export default ShowDetails;