import { abs } from "https://deno.land/x/math@v1.1.0/mod.ts";

export class DistanceCalculator {
  public getTotalDistance(firstList: string[], secondList: string[]): number {
    const distances: number[] = this.getAllDistances(
      firstList.sort(),
      secondList.sort()
    );

    const totalDistance = this.addDistances(distances);

    return totalDistance;
  }

  public getAllDistances(firstList: string[], secondList: string[]): number[] {
    const distances: number[] = [];
    for (let i = 0; i < firstList.length; i++) {
      distances.push(this.getDistance(firstList[i], secondList[i]));
    }

    return distances;
  }

  public getDistance(firstLocation: string, secondLocation: string): number {
    const distance: number = parseInt(
      abs(parseInt(firstLocation) - parseInt(secondLocation))
    );
    return distance;
  }

  public addDistances(distances: number[]): number {
    let totalDistance: number = 0;

    distances.forEach((distance) => {
      totalDistance += distance;
    });

    return totalDistance;
  }

  public getSimilarityScore(firstList: string[], secondList: string[]): number {
    let similarityScore: number = 0;

    firstList.forEach((element) => {
      similarityScore =
        similarityScore +
        this.countOccurrences(parseInt(element), secondList) *
          parseInt(element);
    });

    return similarityScore;
  }

  public countOccurrences(
    leftListNumber: number,
    secondList: string[]
  ): number {
    let count: number = 0;

    secondList.forEach((locationNumber) => {
      if (parseInt(locationNumber) == leftListNumber) {
        count++;
      }
    });
    return count;
  }
}
