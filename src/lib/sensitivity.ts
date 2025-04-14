import { Model } from './ModelInterface'

type SensitivityType<ValidParameters> = {
  call: number[][];
  put: number[][];
  param1: {
    min: number;
    max: number;
    name: ValidParameters
  };
  param2: {
    min: number;
    max: number;
    name: ValidParameters 
  };
  colorParam: "price" | "delta" | "gamma" | "vega" | "theta";
  numberOfPoints: number;
};

export class SensitivityAnalysis<ModelParams> {
  constructor(public model: Model<ModelParams>, public sensitivityParams: SensitivityType<keyof ModelParams>) {
    this.model = model;
    this.sensitivityParams = sensitivityParams
  }

  calculateSensitivity(): number[][] {
    const n = this.sensitivityParams.numberOfPoints;

    const param1 = Array.from({ length: n }, (_, i) => {
      return (
        this.sensitivityParams.param1.min +
        ((this.sensitivityParams.param1.max - this.sensitivityParams.param1.min) * i) / (n - 1)
      );
    });

    const param2 = Array.from({ length: n }, (_, i) => {
      return (
        this.sensitivityParams.param2.min +
        ((this.sensitivityParams.param2.max - this.sensitivityParams.param2.min) * i) / (n - 1)
      );
    });
    
    const callArr: number[][] = [];
    const putArr: number[][] = [];

    for (let i = 0; i < n; i++) {
      callArr.push([]);
          putArr.push([]);
          for (let j = 0; j < n; j++) {
            let newBase = this.model.modelParams
            newBase[this.sensitivityParams.param1.name] = param1[j];
            newBase[this.sensitivityParams.param2.name] = param2[i];
            switch (this.sensitivityParams.colorParam) {
              case "price":
                const call = this.model.callPrice()
                const put = this.model.callPrice()
                callArr[i].push(call);
                putArr[i].push(put);
                break;
              case "delta":
                const callDelta = this.model.callDelta()
                const putDelta  = this.model.putDelta() 
                callArr[i].push(callDelta);
                putArr[i].push(putDelta);
                break;
              default:
                break;
            }
          }
        }

    return [[]]
  }
}
