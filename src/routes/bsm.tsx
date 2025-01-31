import { Input } from "@/components/ui/input";
import Plot from "react-plotly.js";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createFileRoute } from "@tanstack/react-router";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { BSMInputsSchema } from "@/schemas/basicBSMSchema";
import { BSMSensitivitySchema } from "@/schemas/sensitivityBSMSchema";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DualRangeSlider } from "@/components/ui/dual-range-slider";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { data as startingSensitivities } from "@/data/starting-sensitivity";

export const Route = createFileRoute("/bsm")({
  component: BSM,
});

type SensitivityData = {
  call: number[][];
  put: number[][];
  param1: {
    min: number;
    max: number;
    name:
      | "underlyingPrice"
      | "strikePrice"
      | "timeToMaturity"
      | "variance"
      | "riskFreeRate";
  };
  param2: {
    min: number;
    max: number;
    name:
      | "underlyingPrice"
      | "strikePrice"
      | "timeToMaturity"
      | "variance"
      | "riskFreeRate";
  };
  colourParam: "price" | "delta" | "gamma" | "vega" | "theta";
};

function BSM() {
  const basicForm = useForm<z.infer<typeof BSMInputsSchema>>({
    defaultValues: {
      underlyingPrice: 95,
      strikePrice: 100,
      timeToMaturity: 1,
      timeUnit: "years",
      variance: 0.2,
      riskFreeRate: 0.05,
    },
    resolver: zodResolver(BSMInputsSchema),
  });

  const sensitivityForm = useForm<z.infer<typeof BSMSensitivitySchema>>({
    defaultValues: {
      param1: {
        min: 90,
        max: 110,
        paramName: "underlyingPrice",
      },
      param2: {
        min: 0.05,
        max: 0.4,
        paramName: "variance",
      },
      colourParam: "price",
      colourScheme: "viridis",
    },
    resolver: zodResolver(BSMSensitivitySchema),
  });

  const { call, put } = calculateBSMPrice({
    underlyingPrice: basicForm.watch("underlyingPrice"),
    strikePrice: basicForm.watch("strikePrice"),
    timeToMaturity: basicForm.watch("timeToMaturity"),
    timeUnit: basicForm.watch("timeUnit"),
    variance: basicForm.watch("variance"),
    riskFreeRate: basicForm.watch("riskFreeRate"),
  });

  const [sensitivityData, setSensitivityData] = useState<SensitivityData>(
    startingSensitivities,
  );

  return (
    <div className="flex-1 flex flex-row">
      <Sidebar
        basicForm={basicForm}
        sensitivityForm={sensitivityForm}
        setSensitivityArr={setSensitivityData}
      />
      <Main {...{ call: call, put: put, sensitivityArr: sensitivityData }} />
    </div>
  );
}

function Sidebar(props: {
  basicForm: UseFormReturn<z.infer<typeof BSMInputsSchema>>;
  sensitivityForm: UseFormReturn<z.infer<typeof BSMSensitivitySchema>>;
  setSensitivityArr: (arr: SensitivityData) => void;
}) {
  const onSubmit = (values: z.infer<typeof BSMSensitivitySchema>) => {
    const { call, put } = sensitivityAnalysis(
      props.basicForm.getValues(),
      values,
    );
    props.setSensitivityArr({
      call: call,
      put: put,
      param1: {
        min: values.param1.min,
        max: values.param1.max,
        name: values.param1.paramName,
      },
      param2: {
        min: values.param2.min,
        max: values.param2.max,
        name: values.param2.paramName,
      },
      colourParam: values.colourParam,
    });
  };

  const useSliderParams = new Set(["riskFreeRate", "variance"]);

  return (
    <div className="h-full w-1/4 border-r">
      <Accordion type={"multiple"} className="w-full" defaultValue={["item-1"]}>
        <AccordionItem className="px-2" value="item-1">
          <AccordionTrigger>Basic BSM Inputs</AccordionTrigger>
          <AccordionContent className="px-2">
            <Form {...props.basicForm}>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={props.basicForm.control}
                    name="underlyingPrice"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Underlying Price</FormLabel>
                        <FormControl>
                          <Input type="number" min={0} {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={props.basicForm.control}
                    name="strikePrice"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Strike Price</FormLabel>
                        <FormControl>
                          <Input type="number" min={0} {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={props.basicForm.control}
                    name="timeToMaturity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Time to Maturity</FormLabel>
                        <FormControl>
                          <Input type="number" min={0} {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={props.basicForm.control}
                    name="timeUnit"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Units</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a unit" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="years">Years</SelectItem>
                              <SelectItem value="days">Days</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={props.basicForm.control}
                    name="variance"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Variance &sigma;</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min={0}
                            max={1}
                            step={0.01}
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={props.basicForm.control}
                    name="riskFreeRate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Risk-Free Rate</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min={-1}
                            max={1}
                            step={0.01}
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </form>
            </Form>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="px-2">
          <AccordionTrigger>Sensitivity Analysis</AccordionTrigger>
          <AccordionContent className="px-2">
            <Form {...props.sensitivityForm}>
              <form
                onSubmit={props.sensitivityForm.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={props.sensitivityForm.control}
                  name="param1.paramName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Parameter 1</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={(value) => {
                            if (useSliderParams.has(value)) {
                              props.sensitivityForm.setValue(
                                "param1.min",
                                0.05,
                              );
                              props.sensitivityForm.setValue("param1.max", 0.4);
                            } else if (value === "timeToMaturity") {
                              props.sensitivityForm.setValue("param1.min", 0);
                              props.sensitivityForm.setValue("param1.max", 2);
                            } else {
                              props.sensitivityForm.setValue("param1.min", 90);
                              props.sensitivityForm.setValue("param1.max", 110);
                            }
                            field.onChange(value);
                          }}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a parameter" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem
                              disabled={
                                props.sensitivityForm.watch(
                                  "param2.paramName",
                                ) === "underlyingPrice"
                              }
                              value="underlyingPrice"
                            >
                              Underlying Price
                            </SelectItem>
                            <SelectItem
                              disabled={
                                props.sensitivityForm.watch(
                                  "param2.paramName",
                                ) === "strikePrice"
                              }
                              value="strikePrice"
                            >
                              Strike Price
                            </SelectItem>
                            <SelectItem
                              disabled={
                                props.sensitivityForm.watch(
                                  "param2.paramName",
                                ) === "timeToMaturity"
                              }
                              value="timeToMaturity"
                            >
                              Time to Maturity
                            </SelectItem>
                            <SelectItem
                              disabled={
                                props.sensitivityForm.watch(
                                  "param2.paramName",
                                ) === "variance"
                              }
                              value="variance"
                            >
                              Variance
                            </SelectItem>
                            <SelectItem
                              disabled={
                                props.sensitivityForm.watch(
                                  "param2.paramName",
                                ) === "riskFreeRate"
                              }
                              value="riskFreeRate"
                            >
                              Risk-Free Rate
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {!useSliderParams.has(
                  props.sensitivityForm.watch("param1.paramName"),
                ) ? (
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={props.sensitivityForm.control}
                      name="param1.min"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Lower Bound</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              min={0}
                              {...field}
                              onChange={(e) =>
                                field.onChange(e.target.valueAsNumber)
                              }
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={props.sensitivityForm.control}
                      name="param1.max"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Upper Bound</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              min={0}
                              {...field}
                              onChange={(e) =>
                                field.onChange(e.target.valueAsNumber)
                              }
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                ) : (
                  <FormField
                    control={props.sensitivityForm.control}
                    name="param1.min"
                    render={({ field: fieldMin }) => (
                      <FormField
                        control={props.sensitivityForm.control}
                        name="param1.max"
                        render={({ field: fieldMax }) => (
                          <FormItem>
                            <FormLabel>Variance &sigma;</FormLabel>
                            <FormControl>
                              <DualRangeSlider
                                className="pb-4"
                                label={(value) => <span>{value}</span>}
                                value={[fieldMin.value, fieldMax.value]}
                                labelPosition="bottom"
                                onValueChange={(values) => {
                                  const [min, max] = values.sort(
                                    (a, b) => a - b,
                                  );
                                  fieldMin.onChange(min);
                                  fieldMax.onChange(max);
                                }}
                                min={0}
                                max={1}
                                step={0.01}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    )}
                  />
                )}
                <hr />
                <FormField
                  control={props.sensitivityForm.control}
                  name="param2.paramName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Parameter 2</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={(value) => {
                            if (useSliderParams.has(value)) {
                              props.sensitivityForm.setValue(
                                "param2.min",
                                0.05,
                              );
                              props.sensitivityForm.setValue("param2.max", 0.4);
                            } else if (value === "timeToMaturity") {
                              props.sensitivityForm.setValue("param2.min", 0);
                              props.sensitivityForm.setValue("param2.max", 2);
                            } else {
                              props.sensitivityForm.setValue("param2.min", 90);
                              props.sensitivityForm.setValue("param2.max", 110);
                            }
                            field.onChange(value);
                          }}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a parameter" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem
                              disabled={
                                props.sensitivityForm.watch(
                                  "param1.paramName",
                                ) === "underlyingPrice"
                              }
                              value="underlyingPrice"
                            >
                              Underlying Price
                            </SelectItem>
                            <SelectItem
                              disabled={
                                props.sensitivityForm.watch(
                                  "param1.paramName",
                                ) === "strikePrice"
                              }
                              value="strikePrice"
                            >
                              Strike Price
                            </SelectItem>
                            <SelectItem
                              disabled={
                                props.sensitivityForm.watch(
                                  "param1.paramName",
                                ) === "timeToMaturity"
                              }
                              value="timeToMaturity"
                            >
                              Time to Maturity
                            </SelectItem>
                            <SelectItem
                              disabled={
                                props.sensitivityForm.watch(
                                  "param1.paramName",
                                ) === "variance"
                              }
                              value="variance"
                            >
                              Variance
                            </SelectItem>
                            <SelectItem
                              disabled={
                                props.sensitivityForm.watch(
                                  "param1.paramName",
                                ) === "riskFreeRate"
                              }
                              value="riskFreeRate"
                            >
                              Risk-Free Rate
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {!useSliderParams.has(
                  props.sensitivityForm.watch("param2.paramName"),
                ) ? (
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={props.sensitivityForm.control}
                      name="param2.min"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Lower Bound</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              min={0}
                              {...field}
                              onChange={(e) =>
                                field.onChange(e.target.valueAsNumber)
                              }
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={props.sensitivityForm.control}
                      name="param2.max"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Upper Bound</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              min={0}
                              {...field}
                              onChange={(e) =>
                                field.onChange(e.target.valueAsNumber)
                              }
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                ) : (
                  <FormField
                    control={props.sensitivityForm.control}
                    name="param2.min"
                    render={({ field: fieldMin }) => (
                      <FormField
                        control={props.sensitivityForm.control}
                        name="param2.max"
                        render={({ field: fieldMax }) => (
                          <FormItem>
                            <FormLabel>Variance &sigma;</FormLabel>
                            <FormControl>
                              <DualRangeSlider
                                className="pb-5"
                                label={(value) => <span>{value}</span>}
                                value={[fieldMin.value, fieldMax.value]}
                                labelPosition="bottom"
                                onValueChange={(values) => {
                                  const [min, max] = values.sort(
                                    (a, b) => a - b,
                                  );
                                  fieldMin.onChange(min);
                                  fieldMax.onChange(max);
                                }}
                                min={0}
                                max={1}
                                step={0.01}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    )}
                  />
                )}
                <hr />
                <FormField
                  control={props.sensitivityForm.control}
                  name="colourParam"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Colour Parameter</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a parameter" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="price">Price</SelectItem>
                            <SelectItem value="delta">Delta</SelectItem>
                            {/* <SelectItem value="gamma">Gamma</SelectItem>
                            <SelectItem value="vega">Vega</SelectItem>
                            <SelectItem value="theta">Theta</SelectItem> */}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className=" w-full" type="submit">
                  Calculate
                </Button>
              </form>
            </Form>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

function Main({
  ...props
}: {
  call: number;
  put: number;
  sensitivityArr: SensitivityData;
}) {
  const [callHeatmap, putHeatmap] = SensitivityHeatmap(props.sensitivityArr);

  return (
    <div className="flex-1 overflow-y-auto">
      <p className="text-3xl px-10 p-5 font-light">
        Black-Scholes-Merton Calculator
      </p>
      <div className="flex flex-row gap-10 p-5 w-full justify-center">
        <div className="w-1/3 bg-green-500 rounded p-5 text-center">
          <p className="text-lg font-light">
            {" "}
            Call Price: {Math.round(props.call * 1000) / 1000}{" "}
          </p>
        </div>
        <div className="w-1/3 bg-red-500 rounded p-5 text-center">
          <p className="text-lg font-light">
            {" "}
            Put Price: {Math.round(props.put * 1000) / 1000}{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-10 p-5 w-full items-center justify-center">
        <div>
          <div>{callHeatmap}</div>
        </div>
        <div>
          <div>{putHeatmap}</div>
        </div>
      </div>
    </div>
  );
}

const SensitivityHeatmap = (sensitivityData: SensitivityData) => {
  const { call, put, param1, param2, colourParam } = sensitivityData;

  // Define x and y axis values (assuming uniform grid spacing)
  const xValues = Array.from(
    { length: call[0].length },
    (_, i) =>
      param1.min + (i / (call[0].length - 1)) * (param1.max - param1.min),
  );

  const yValues = Array.from(
    { length: call.length },
    (_, i) => param2.min + (i / (call.length - 1)) * (param2.max - param2.min),
  );

  const callData = [
    {
      x: xValues,
      y: yValues,
      z: call,
      type: "heatmap" as const,
      colorscale: "Viridis", // Changeable color scheme
      colorbar: { title: colourParam },
    },
  ];

  const putData = [
    {
      x: xValues,
      y: yValues,
      z: put,
      type: "heatmap" as const,
      colorscale: "Viridis", // Changeable color scheme
      colorbar: { title: colourParam },
    },
  ];

  const callLayout = {
    title: { text: `Call Option Sensitivity Analysis - ${colourParam}` },
    xaxis: { title: { text: param1.name} },
    yaxis: { title: { text: param2.name} },
  };

  const putLayout = {
    title: { text: `Put Option Sensitivity Analysis - ${colourParam}` },
    xaxis: { title: { text: param1.name} },
    yaxis: { title: { text: param2.name} },
  };

  return [
    <Plot data={callData} layout={callLayout} />,
    <Plot data={putData} layout={putLayout} />,
  ];
};

function ncdf(x: number, mean: number, std: number) {
  var x = (x - mean) / std;
  var t = 1 / (1 + 0.2315419 * Math.abs(x));
  var d = 0.3989423 * Math.exp((-x * x) / 2);
  var prob =
    d *
    t *
    (0.3193815 +
      t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  if (x > 0) prob = 1 - prob;
  return prob;
}

type BSMInputs = {
  underlyingPrice: number;
  strikePrice: number;
  timeToMaturity: number;
  timeUnit: "days" | "years";
  variance: number;
  riskFreeRate: number;
};

function calculateBSMPrice({
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
  const call =
    underlyingPrice * ncdf(d1, 0, 1) -
    strikePrice * Math.exp(-riskFreeRate * timeToMaturity) * ncdf(d2, 0, 1);
  const put =
    strikePrice * Math.exp(-riskFreeRate * timeToMaturity) * ncdf(-d2, 0, 1) -
    underlyingPrice * ncdf(-d1, 0, 1);
  return { call, put };
}

function calculateBSMDelta({
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
};

function sensitivityAnalysis(base: BSMInputs, sensitivity: BSMSensitivity) {
  const n = 10;

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
      newBase[sensitivity.param1.paramName] = param1[i];
      newBase[sensitivity.param2.paramName] = param2[j];
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
