export interface Model<ModelParams> {
  modelName: string;
  modelParams: ModelParams;
  // sensitivityParams?: SensitivityParams;

  generatePaths: (numSteps: number, numPaths: number) => number[][];

  callPrice: () => number

  putPrice: () => number

  callDelta: () => number

  putDelta: () => number
}