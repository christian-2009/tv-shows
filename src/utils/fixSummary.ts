import { IEpisode } from "../utils/IEpisode";

// export function fixSummary(array: IEpisode[]): IEpisode[] {
//   const newArr = [];
//   for (const object of array) {
//     object.summary = object.summary.slice(3, object.summary.length - 4);
//     newArr.push(object);
//   }
//   return newArr;
// }

export function fixSummary(array: IEpisode[]): IEpisode[] {
  for (const object of array) {
    object.summary = object.summary.replace(/(<([^>]+)>)/g, "")
  }
  return array;
}

