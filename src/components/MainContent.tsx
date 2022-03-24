import Footer from "./Footer";
import { fixSummary } from "../utils/fixSummary";
import EpisodeEntry from "./EpisodeEntry";
import { useEffect, useState } from "react";
import { IEpisode } from "../utils/IEpisode";

export default function MainContent(): JSX.Element {
  //fetching the episode data from the URL
  const [data, setData] = useState<IEpisode[]>([]);

  useEffect(() => {
    const fetchSeries = async () => {
      const response = await fetch("https://api.tvmaze.com/shows/83/episodes");
      const jsonBody: IEpisode[] = await response.json();
      setData(jsonBody);
    };
    fetchSeries();
  }, []);
  //search bar
  const [text, setText] = useState("");

  function filterNames(object: IEpisode) {
    if (
      object.summary.toLowerCase().includes(text.toLowerCase()) ||
      object.name.toLowerCase().includes(text.toLowerCase())
    ) {
      return true;
    }
  }

  const fixedSummaryEpisodes = fixSummary(data);

  const filteredEpisodes = fixedSummaryEpisodes.filter(filterNames);

  const episode = filteredEpisodes.map(EpisodeEntry);

  return (
    <>
      <input
        placeholder="search..."
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <p>
        Display {filteredEpisodes.length} /{fixedSummaryEpisodes.length}{" "}
        episodes
      </p>
      <div>{episode}</div>
      <Footer />
    </>
  );
}
