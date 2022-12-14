export const useRandom = (min: number, max: number) => {
  return Math.random() * (max - min) + min
}
