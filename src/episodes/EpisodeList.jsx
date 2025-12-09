import "./episodes.css";

/** A list of episode names that allows the user to select an episode */
const EpisodeList = ({
  episodes,
  selectedEpisode,
  setSelectedEpisode,
}) => {
  return (
    <nav className="episodes">
      <ol>
        <h3>Titles: </h3>
        {episodes.map((episode) => (
          <li
            key={episode.number}
            onClick={() => setSelectedEpisode(episode)}
            className={episode === selectedEpisode ? "selected" : ""}
          >
            {episode.number}:  {episode.title}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default EpisodeList;
