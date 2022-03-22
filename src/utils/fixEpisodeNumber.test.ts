import {fixEpisodeNumber} from "./fixEpisodeNumber"

test("7 to be 07", () => {
    expect(fixEpisodeNumber(7)).toBe('07');
  });