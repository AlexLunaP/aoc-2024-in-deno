import { DistanceCalculator } from "./distanceCalculator.ts";
import { expect } from "jsr:@std/expect";

Deno.test(
  "getTotalDistance should return the sum of all distances between locations",
  () => {
    // Arrange
    const distanceCalculator: DistanceCalculator = new DistanceCalculator();
    const firstList: string[] = ["3", "4", "2", "1", "3", "3"];
    const secondList: string[] = ["4", "3", "5", "3", "9", "3"];

    // Act
    const totalDistance: number = distanceCalculator.getTotalDistance(
      firstList,
      secondList
    );

    // Assert
    expect(totalDistance).toBe(11);
  }
);

Deno.test(
  "getAllDistances should return a list containing all the distances",
  () => {
    // Arrange
    const distanceCalculator: DistanceCalculator = new DistanceCalculator();
    const firstList: string[] = ["3", "4", "6"];
    const secondList: string[] = ["4", "5", "8"];

    // Act
    const distances: number[] = distanceCalculator.getAllDistances(
      firstList,
      secondList
    );

    // Assert
    expect(distances).toEqual([1, 1, 2]);
  }
);

Deno.test(
  "getDistance should return the difference between two locations",
  () => {
    // Arrange
    const distanceCalculator: DistanceCalculator = new DistanceCalculator();
    const firstLocation: string = "5";
    const secondLocation: string = "7";

    // Act
    const distance: number = distanceCalculator.getDistance(
      firstLocation,
      secondLocation
    );

    // Assert
    expect(distance).toEqual(2);
  }
);

Deno.test("addDistances should return the sum of all distances", () => {
  // Arrange
  const distanceCalculator: DistanceCalculator = new DistanceCalculator();
  const distances: number[] = [3, 4, 6];

  // Act
  const totalDistance: number = distanceCalculator.addDistances(distances);

  // Assert
  expect(totalDistance).toBe(13);
});

Deno.test(
  "countOccurrences should return the number of times that a number appears in a list",
  () => {
    // Arrange
    const distanceCalculator: DistanceCalculator = new DistanceCalculator();
    const element: number = 3;
    const list: string[] = ["3", "4", "6", "3"];

    // Act
    const count: number = distanceCalculator.countOccurrences(element, list);

    // Assert
    expect(count).toBe(2);
  }
);

Deno.test(
  "getSimilarityScore should return the sum of each element occurrences multiplied by the element",
  () => {
    // Arrange
    const distanceCalculator: DistanceCalculator = new DistanceCalculator();
    const firstList: string[] = ["3", "4", "6"];
    const secondList: string[] = ["4", "5", "8"];

    // Act
    const similarityScore: number = distanceCalculator.getSimilarityScore(
      firstList,
      secondList
    );

    // Assert
    expect(similarityScore).toBe(4);
  }
);
