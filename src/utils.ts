export function getSrc(filename: string, isDay: number) {
  return `/weather/${filename}${
    isDay === 0 && filename == "clear" ? "-night" : ""
  }.svg`;
}
