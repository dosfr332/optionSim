import { rnorm } from "./utils";

interface SimulationModel<ModelParams> {
  modelName: string;
  modelParams: ModelParams;

  generatePaths: (numPaths: number) => number[][];
}

interface HestonInputs {
  timeUnit: string;
  variance: number;
  riskFreeRate: number;
}

export class HestonModel implements SimulationModel<HestonInputs> {
  modelName: string = "Heston";

  constructor(public modelParams: HestonInputs) {
    this.modelParams = modelParams;
  }

  generatePaths(): number[][] {
    return [];
  }
}

interface BSMInputs {
  underlyingPrice: number;
  strikePrice: number;
  timeToMaturity: number;
  timeUnit: "days" | "years";
  variance: number;
  riskFreeRate: number;
  numSteps: number;
}

export class BSMModel implements SimulationModel<BSMInputs> {
  modelName: string = "Black-Scholes";

  constructor(public modelParams: BSMInputs) {
    this.modelParams = modelParams;
    if (this.modelParams.timeUnit === "days") {
      this.modelParams.timeToMaturity = this.modelParams.timeToMaturity / 251;
    }
  }

  generatePaths(numPaths: number): number[][] {
    let paths = Array.from({ length: numPaths }, () => [
      this.modelParams.underlyingPrice,
    ]);

    const dt = this.modelParams.timeToMaturity / this.modelParams.numSteps;

    for (let i = 0; i < numPaths; i++) {
      let path: number[] = paths[i];
      for (let j = 0; j < this.modelParams.numSteps - 1; j++) {
        const S =
          path[path.length - 1] *
          Math.exp(
            (this.modelParams.riskFreeRate -
              (0.5 * Math.pow(this.modelParams.variance, 2))) *
              dt +
              this.modelParams.variance * Math.sqrt(dt) * rnorm(),
          );
        path.push(S);
      }
    }
    return paths;
  }
}
