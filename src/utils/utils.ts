export const ellipsize = (sentence: string, limit: number) => {
  if (sentence.length <= limit) return sentence;
  return sentence.substring(0, limit) + "...";
};
