export const aminoAcidColorMap: Record<string, string[]> = {
  '#67E4A6': ['A', 'I', 'L', 'M', 'F', 'W', 'Y', 'V', 'P'],
  '#80BFFF': ['S', 'T', 'N', 'Q', 'H'],
  '#FC9CAC': ['D', 'E'],
  '#BB99FF': ['K', 'R'],
  '#FFEA00': ['C'],
  '#C4C4C4': ['G']
};

export const charToColor: Record<string, string> = Object.entries(aminoAcidColorMap).reduce<Record<string, string>>(
  (acc, [color, letters]) => {
    letters.forEach((letter) => {
      acc[letter] = color;
    });
    return acc;
  },
  {}
);

export const aminoAcidColorMapDark: Record<string, string[]> = {
  '#22C273': ['A', 'I', 'L', 'M', 'F', 'W', 'Y', 'V', 'P'],
  '#1A8BFF': ['S', 'T', 'N', 'Q', 'H'],
  '#F93959': ['D', 'E'],
  '#7733FF': ['K', 'R'],
  '#998C00': ['C'],
  '#919191': ['G']
};

export const charToColorDark: Record<string, string> = Object.entries(aminoAcidColorMapDark).reduce(
  (acc, [color, letters]) => {
    letters.forEach((letter) => {
      acc[letter] = color;
    });
    return acc;
  },
  {} as Record<string, string>
);
