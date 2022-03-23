import { fixEpisodeNumber } from "../utils/fixEpisodeNumber";
import { IEpisode } from "../utils/IEpisode";

export default function EpisodeEntry(props: IEpisode): JSX.Element {
  return (
    <>
      <h1>{props.name}</h1>
      <h3>
        S{fixEpisodeNumber(props.season)}E{fixEpisodeNumber(props.number)}
      </h3>
      {props.image && <img src={props.image.medium} alt="GOT" />}
      <p>{props.summary}</p>
    </>
  );
}
