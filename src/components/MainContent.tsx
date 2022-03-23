import Footer from "./Footer";
import { fixedSummaryEpisodes } from "../utils/fixSummary";
import EpisodeEntry from "./EpisodeEntry";
import React, { useState } from "react";

interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: { average: number };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

export default function MainContent(): JSX.Element {
  const [text, setText] = useState("");

  function filterNames(object: IEpisode) {
    if (
      object.summary.toLowerCase().includes(text.toLowerCase()) ||
      object.name.toLowerCase().includes(text.toLowerCase())
    ) {
      return true;
    }
  }

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
      <div>{episode}</div>
      <Footer />
    </>
  );
}
