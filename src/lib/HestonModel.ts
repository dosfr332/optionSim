import { Model } from "./ModelInterface";

interface HestonInputs {
  timeUnit: string;
  variance: number;
  riskFreeRate: number;
}

export class HestonModel implements Model<HestonInputs> {
  modelName = "Heston";

  constructor(public modelParams: HestonInputs) {
    this.modelParams = modelParams;
  }

  callPrice() {
    return 0
  }

  putPrice(){
    return 0
  }

  callDelta() {
    return 0
  }

  putDelta () {
    return 0
  }


  generatePaths(): number[][] {
    return [];
  }
}
