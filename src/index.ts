import haystack from "../data/emojis.json";

type EmojiType = {
  emoji: string;
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

export default (needle: string): ErrorType | EmojiType => {
  if (needle.length !== 2) return { error: "Not found" };

  try {
    return haystack.filter((emo: EmojiType) => emo.emoji === needle)[0];
  } catch {
    return { error: "Not found" };
  }
};
