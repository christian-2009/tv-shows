import episodes from "../episodes.json";

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
  rating: {average : number}
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

export function fixSummary(array: IEpisode[]) {
  const newArr = [];
  for (const object of array) {
    object.summary = object.summary.slice(3, object.summary.length - 4);
    newArr.push(object);
  }
  return newArr;
}

const fixedSummaryEpisodes = fixSummary(episodes);
export {fixedSummaryEpisodes};
