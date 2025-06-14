export const splitSequence = (seq: string, chunkSize: number): string[] => {
  return seq.split('').reduce<string[]>((acc, char, i) => {
    const chunkIndex = Math.floor(i / chunkSize);
    acc[chunkIndex] = (acc[chunkIndex] || '') + char;
    return acc;
  }, []);
};
