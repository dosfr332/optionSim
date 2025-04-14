import { Model } from "./ModelInterface";
import { ncdf, rnorm } from "./utils";

type BSMModelParams = {
  underlyingPrice: number;
  strikePrice: number;
  timeToMaturity: number;
  timeUnit: "days" | "years";
  variance: number;
  riskFreeRate: number;
};

// type BSMModelSensitivityParams = {
//   // call: number[][];
//   // put: number[][];
//   param1: {
//     min: number;
//     max: number;
//     paramName:
//       | "underlyingPrice"
//       | "strikePrice"
//       | "timeToMaturity"
//       | "variance"
//       | "riskFreeRate";
//   };
//   param2: {
//     min: number;
//     max: number;
//     paramName:
//       | "underlyingPrice"
//       | "strikePrice"
//       | "timeToMaturity"
//       | "variance"
//       | "riskFreeRate";
//   };
//   colorParam: "price" | "delta" | "gamma" | "vega" | "theta";
//   numberOfPoints: number;
// };

export class BSMModel
  implements Model<BSMModelParams>
{
  modelName: string = "Black-Scholes";

  constructor(
    public modelParams: BSMModelParams,
    // public sensitivityParams?: BSMModelSensitivityParams,
  ) {
    if (this.modelParams.timeUnit === "days") {
      this.modelParams.timeToMaturity = this.modelParams.timeToMaturity / 251;
    }
  }

  callPrice(): number {
    const d1 =
      (Math.log(
        this.modelParams.underlyingPrice / this.modelParams.strikePrice,
      ) +
        (this.modelParams.riskFreeRate +
          0.5 * Math.pow(this.modelParams.variance, 2)) *
          this.modelParams.timeToMaturity) /
      (this.modelParams.variance * Math.sqrt(this.modelParams.timeToMaturity));
    const d2 =
      d1 -
      this.modelParams.variance * Math.sqrt(this.modelParams.timeToMaturity);
    return (
      this.modelParams.underlyingPrice * ncdf(d1, 0, 1) -
      this.modelParams.strikePrice *
        ncdf(d2, 0, 1) *
        Math.exp(
          -this.modelParams.riskFreeRate * this.modelParams.timeToMaturity,
        )
    );
  }

  putPrice(): number {
    const d1 =
      (Math.log(
        this.modelParams.underlyingPrice / this.modelParams.strikePrice,
      ) +
        (this.modelParams.riskFreeRate +
          0.5 * Math.pow(this.modelParams.variance, 2)) *
          this.modelParams.timeToMaturity) /
      (this.modelParams.variance * Math.sqrt(this.modelParams.timeToMaturity));
    const d2 =
      d1 -
      this.modelParams.variance * Math.sqrt(this.modelParams.timeToMaturity);
    return (
      this.modelParams.strikePrice *
        ncdf(-d2, 0, 1) *
        Math.exp(
          -this.modelParams.riskFreeRate * this.modelParams.timeToMaturity,
        ) -
      this.modelParams.underlyingPrice * ncdf(-d1, 0, 1)
    );
  }

  callDelta(): number {
    const d1 =
      (Math.log(
        this.modelParams.underlyingPrice / this.modelParams.strikePrice,
      ) +
        (this.modelParams.riskFreeRate +
          0.5 * Math.pow(this.modelParams.variance, 2)) *
          this.modelParams.timeToMaturity) /
      (this.modelParams.variance * Math.sqrt(this.modelParams.timeToMaturity));
    return ncdf(d1, 0, 1);
  }

  putDelta(): number {
    const d1 =
      (Math.log(
        this.modelParams.underlyingPrice / this.modelParams.strikePrice,
      ) +
        (this.modelParams.riskFreeRate +
          0.5 * Math.pow(this.modelParams.variance, 2)) *
          this.modelParams.timeToMaturity) /
      (this.modelParams.variance * Math.sqrt(this.modelParams.timeToMaturity));
    return ncdf(d1, 0, 1) - 1;
  }

  generatePaths(numSteps: number, numPaths: number): number[][] {
    let paths = Array.from({ length: numPaths }, () => [
      this.modelParams.underlyingPrice,
    ]);

    const dt = this.modelParams.timeToMaturity / numSteps;

    for (let i = 0; i < numPaths; i++) {
      let path: number[] = paths[i];
      for (let j = 0; j < numSteps - 1; j++) {
        const S =
          path[path.length - 1] *
          Math.exp(
            (this.modelParams.riskFreeRate -
              0.5 * Math.pow(this.modelParams.variance, 2)) *
              dt +
              this.modelParams.variance * Math.sqrt(dt) * rnorm(),
          );
        path.push(S);
      }
    }
    return paths;
  }


}
