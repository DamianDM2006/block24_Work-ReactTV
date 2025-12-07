import "./shows.css";

/** Allows users to browse through the episodes of the given show */
const ShowDetails = ({selectedShow}) => {
  const episodes = selectedShow.episodes;
  if (selectedShow.length === 0) {
    return (
      <section className="show-details">
        <h3>Shows on React TV</h3>
        <p>Select a show to learn more.</p>
      </section>
    )
  }

  return (
    <section className="show-details">
      <h3>{selectedShow.name}</h3>
      <p>Genre:  {selectedShow.genre}</p>
        <ol>
          {episodes.map((episode) => (
            <li
              key={episode.number}
            >
              {episode.title}
            </li>
          ))}
        </ol>
    </section>
  )

  return <div className="show-details"></div>;
}

export default ShowDetails;