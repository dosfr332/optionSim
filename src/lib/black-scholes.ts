import { ncdf } from "./utils";

type BSMInputs = {
  underlyingPrice: number;
  strikePrice: number;
  timeToMaturity: number;
  timeUnit: "days" | "years";
  variance: number;
  riskFreeRate: number;
};

export function calculateBSMPrice({
  underlyingPrice,
  strikePrice,
  timeToMaturity,
  timeUnit,
  variance,
  riskFreeRate,
}: BSMInputs) {
    
  if (timeUnit === "days") {
    timeToMaturity = timeToMaturity / 251;
  }
  const d1 =
    (Math.log(underlyingPrice / strikePrice) +
      (riskFreeRate + variance ** 2 / 2) * timeToMaturity) /
    (variance * Math.sqrt(timeToMaturity));
  const d2 = d1 - variance * Math.sqrt(timeToMaturity);
  if(d1 < -.8 || d2 < -.8){
    console.log("d1: ", d1, "d2: ", d2)
  }
  const call =
    underlyingPrice * ncdf(d1, 0, 1) -
    strikePrice * Math.exp(-riskFreeRate * timeToMaturity) * ncdf(d2, 0, 1);
  const put =
    strikePrice * Math.exp(-riskFreeRate * timeToMaturity) * ncdf(-d2, 0, 1) -
    underlyingPrice * ncdf(-d1, 0, 1);
  return { call, put };
}

export function calculateBSMDelta({
  underlyingPrice,
  strikePrice,
  timeToMaturity,
  timeUnit,
  variance,
  riskFreeRate,
}: BSMInputs) {
  if (timeUnit === "days") {
    timeToMaturity = timeToMaturity / 251;
  }
  const d1 =
    (Math.log(underlyingPrice / strikePrice) +
      (riskFreeRate + variance ** 2 / 2) * timeToMaturity) /
    (variance * Math.sqrt(timeToMaturity));

  const callDelta = ncdf(d1, 0, 1);
  const putDelta = -ncdf(-d1, 0, 1);
  return { callDelta, putDelta };
}

type BSMSensitivity = {
  param1: {
    min: number;
    max: number;
    paramName:
      | "underlyingPrice"
      | "strikePrice"
      | "timeToMaturity"
      | "variance"
      | "riskFreeRate";
  };
  param2: {
    min: number;
    max: number;
    paramName:
      | "underlyingPrice"
      | "strikePrice"
      | "timeToMaturity"
      | "variance"
      | "riskFreeRate";
  };
  colourParam: "price" | "delta" | "gamma" | "vega" | "theta";
  colourScheme: string;
  numberOfPoints: number;
};

export function sensitivityAnalysis(base: BSMInputs, sensitivity: BSMSensitivity) {
  const n = sensitivity.numberOfPoints;

  const param1 = Array.from({ length: n }, (_, i) => {
    return (
      sensitivity.param1.min +
      ((sensitivity.param1.max - sensitivity.param1.min) * i) / (n - 1)
    );
  });

  const param2 = Array.from({ length: n }, (_, i) => {
    return (
      sensitivity.param2.min +
      ((sensitivity.param2.max - sensitivity.param2.min) * i) / (n - 1)
    );
  });

  const callArr: number[][] = [];
  const putArr: number[][] = [];

  for (let i = 0; i < n; i++) {
    callArr.push([]);
    putArr.push([]);
    for (let j = 0; j < n; j++) {
      const newBase = { ...base };
      newBase[sensitivity.param1.paramName] = param1[j];
      newBase[sensitivity.param2.paramName] = param2[i];
      switch (sensitivity.colourParam) {
        case "price":
          const { call, put } = calculateBSMPrice(newBase);
          callArr[i].push(call);
          putArr[i].push(put);
          break;
        case "delta":
          const { callDelta, putDelta } = calculateBSMDelta(newBase);
          callArr[i].push(callDelta);
          putArr[i].push(putDelta);
          break;
        default:
          break;
      }
    }
  }

  console.log([callArr, putArr]);
  return { call: callArr, put: putArr };
}
