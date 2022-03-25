import Footer from "./Footer";
import { fixSummary } from "../utils/fixSummary";
import EpisodeEntry from "./EpisodeEntry";
import { useEffect, useState } from "react";
import { IEpisode } from "../utils/IEpisode";
import shows from "../shows.json";

interface ShowsProps {
  name: string;
  id: number;
}

export default function MainContent(): JSX.Element {
  //fetching the episode data from the URL
  const [data, setData] = useState<IEpisode[]>([]);
  const [dropDownData, setDropDownData] = useState("");

  //function that takes in dropDownData and shows.
  //returns the id of the dropDownData
  function findIdOfDropDownData(
    dropDownData: string,
    shows: ShowsProps[]
  ): ShowsProps {
    const object = shows.find((el) => el.name === dropDownData);
    if (object !== undefined) {
      return object;
    }

    return shows[0];
  }

  useEffect(() => {
    const clickedShow = findIdOfDropDownData(dropDownData, shows);
    const fetchSeries = async () => {
      const response = await fetch(
        `https://api.tvmaze.com/shows/${clickedShow.id}/episodes`
      );
      const jsonBody: IEpisode[] = await response.json();
      setData(jsonBody);
    };
    fetchSeries();
  }, [dropDownData]);
  //search bar
  const [text, setText] = useState("");

  function filterNames(object: IEpisode) {
    if (object.summary !== null) {
      if (
        object.summary.toLowerCase().includes(text.toLowerCase()) ||
        object.name.toLowerCase().includes(text.toLowerCase())
      ) {
        return true;
      }
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
      <p>{dropDownData}</p>
      <select
        name="shows"
        id="shows"
        value={dropDownData}
        onChange={(event) => {
          setDropDownData(event.target.value);
        }}
      >
        {shows.map((show) => (
          <option key={show.id}>{show.name}</option>
        ))}
      </select>
      <div>{episode}</div>
      <Footer />
    </>
  );
}
