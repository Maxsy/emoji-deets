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

type ErrorType = {
  error: string;
};

export default (needle: string): ErrorType | EmojiiType => {
  if (needle.length !== 2) return { error: "Not found" };

  try {
    return haystack.filter((emo: EmojiiType) => emo.emojii === needle)[0];
  } catch {
    return { error: "Not found" };
  }
};
