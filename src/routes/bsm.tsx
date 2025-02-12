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
import { useEffect, useState } from "react";
import { camelCaseToWords, getTheme } from "@/lib/utils";
import { calculateBSMPrice, sensitivityAnalysis } from "@/lib/black-scholes";

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
  numberOfPoints: number;
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
      numberOfPoints: 20,
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

  const [sensitivityData, setSensitivityData] = useState<SensitivityData>({
    call: [[]],
    put: [[]],
    param1: {
      min: 90,
      max: 110,
      name: "underlyingPrice",
    },
    param2: {
      min: 0.05,
      max: 0.4,
      name: "variance",
    },
    colourParam: "price",
    numberOfPoints: 20,
  });

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
      numberOfPoints: values.numberOfPoints,
    });
  };
  useEffect(() => {
    onSubmit(props.sensitivityForm.getValues());
  }, []);

  const useSliderParams = new Set(["riskFreeRate", "variance"]);

  return (
    <div className="h-full w-1/4 border-r">
      <Accordion type={"multiple"} className="w-full" defaultValue={["item-1"]}>
        <AccordionItem className="px-2" value="item-1">
          <AccordionTrigger className="px-2">Basic BSM Inputs</AccordionTrigger>
          <AccordionContent className="px-4">
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
                    control={props.basicForm.control}
                    name="strikePrice"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Strike Price</FormLabel>
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
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={props.basicForm.control}
                    name="timeToMaturity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Time to Maturity</FormLabel>
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
                            onChange={(e) =>
                              field.onChange(e.target.valueAsNumber)
                            }
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
                        <FormLabel>Risk Free Rate</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min={0}
                            max={1}
                            step={0.01}
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
              </form>
            </Form>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="px-2">
          <AccordionTrigger className="px-2">Sensitivity Analysis</AccordionTrigger>
          <AccordionContent className="px-4">
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
                              Risk Free Rate
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
                            <FormLabel>Range</FormLabel>
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
                              Risk Free Rate
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
                            <FormLabel>Range</FormLabel>
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
                <FormField
                  control={props.sensitivityForm.control}
                  name="numberOfPoints"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of points</FormLabel>
                      <FormControl>
                        <DualRangeSlider
                          className="pb-5"
                          label={(value) => <span>{value}</span>}
                          value={[field.value]}
                          labelPosition="bottom"
                          onValueChange={(values) => {
                            const [points] = values.sort((a, b) => a - b);
                            field.onChange(points);
                          }}
                          min={2}
                          max={100}
                          step={1}
                        />
                      </FormControl>
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
  sensitivityArr: SensitivityData | undefined;
}) {
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
      {props.sensitivityArr && (
        <div className="flex flex-row py-5 w-full items-center justify-center">
          <SensitivityHeatmap {...props.sensitivityArr} />
        </div>
      )}
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

  const [chartWidth, setChartWidth] = useState((window.innerWidth * 1) / 3);

  // Update width on window resize
  useEffect(() => {
    const handleResize = () => setChartWidth(window.innerWidth / 3);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const callData = [
    {
      x: xValues,
      y: yValues,
      z: call,
      type: "heatmap" as const,
      colorscale: "Viridis", // Changeable color scheme
      colorbar: { title: colourParam },
      hovertemplate: `${camelCaseToWords(param1.name)}: %{x}<br>${camelCaseToWords(param2.name)}: %{y}<br>${camelCaseToWords(colourParam)}: %{z}<extra></extra>`,
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
      hovertemplate: `${camelCaseToWords(param1.name)}: %{x}<br>${camelCaseToWords(param2.name)}: %{y}<br>${camelCaseToWords(colourParam)}: %{z}<extra></extra>`,
    },
  ];

  const currTheme = getTheme();

  const callLayout = {
    title: { text: `Call Option Sensitivity Analysis` },
    xaxis: { title: { text: camelCaseToWords(param1.name) } },
    yaxis: {
      title: { text: camelCaseToWords(param2.name) },
    },
    paper_bgcolor: currTheme === "dark" ? "hsl(222.2 84% 4.9%)" : "white",
    font: { color: currTheme === "dark" ? "white" : "black" },
    width: chartWidth,
    margin: {
      //   l: 80, // Left margin (axis labels)
      r: 0, // Right margin (less needed)
      t: 30, // Top margin (title spacing)
      b: 40, // Bottom margin (x-axis labels)
    },
  };

  const putLayout = {
    title: { text: `Put Option Sensitivity Analysis` },
    xaxis: { title: { text: camelCaseToWords(param1.name) } },
    yaxis: { title: { text: camelCaseToWords(param2.name) } },
    paper_bgcolor: currTheme === "dark" ? "hsl(222.2 84% 4.9%)" : "white",
    font: { color: currTheme === "dark" ? "white" : "black" },
    width: chartWidth,
    margin: {
      // l: 40, // Left margin (axis labels)
      r: 10, // Right margin (less needed)
      t: 30, // Top margin (title spacing)
      b: 40, // Bottom margin (x-axis labels)
    },
  };

  return (
    <>
      <div>
        <div>
          <Plot data={callData} layout={callLayout} />,
        </div>
      </div>
      <div>
        <div>
          <Plot data={putData} layout={putLayout} />
        </div>
      </div>
    </>
  );
};
