import haystack from "../data/emojiis.json";

type EmojiiType = {
  emojii: string;
  unicodeEndpoint: string;
  occurrences: number;
  position: number;
  negative: number;
  neutral: number;
  positive: number;
  sentimentScore: number;
  unicodeName: string;
  unicodeBlock: string;
};

export default (needle: string): boolean | EmojiiType => {
  try {
    return haystack.filter((emo: EmojiiType) => emo.emojii === needle)[0];
  } catch {
    return false;
  }
};
