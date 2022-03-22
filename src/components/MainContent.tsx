import Footer from "./Footer";
import { fixedSummaryEpisodes } from "../utils/fixSummary";
import EpisodeEntry from "./EpisodeEntry";


export default function MainContent(): JSX.Element {
  const episode = fixedSummaryEpisodes.map(EpisodeEntry);
  return (
    <>
      <div>{episode}</div>
      <Footer />
    </>
  );
}
