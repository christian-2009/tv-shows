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
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

export default function EpisodeEntry(props: IEpisode): JSX.Element {
  return (
    <>
      <h1>{props.name}</h1>
      <h3>
        {props.season}, {props.number}
      </h3>
      <img src={props.image.medium} alt="GOT" />
      <p>{props.summary}</p>
    </>
  );
}
