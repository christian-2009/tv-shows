export interface IEpisode {
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
  rating: { average: number | null };
  image: null | {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}
