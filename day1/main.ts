import { DistanceCalculator } from "./distanceCalculator.ts";

async function main() {
  const file: string = await Deno.readTextFile("input.txt");

  const firstList: string[] = [];
  const secondList: string[] = [];

  file
    .split("\n")
    .map((line) => line.trim())
    .forEach((line) => {
      const locationIds = line.split(/\s+/);
      if (locationIds.length >= 2) {
        firstList.push(locationIds[0]);
        secondList.push(locationIds[1]);
      }
    });

  const distanceCalculator: DistanceCalculator = new DistanceCalculator();

  console.log(distanceCalculator.getTotalDistance(firstList, secondList));
  console.log(distanceCalculator.getSimilarityScore(firstList, secondList));
}

main();
