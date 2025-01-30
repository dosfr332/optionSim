// import { Sidebar, SidebarProvider } from '@/components/ui/sidebar'
import { Input } from "@/components/ui/input";

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
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

const BSMInputsSchema = z.object({
  underlyingPrice: z.number().min(0),
  strikePrice: z.number().min(0),
  timeToMaturity: z.number().min(0),
  timeUnit: z.union([z.literal("years"), z.literal("days")]),
  variance: z.number().min(0).max(1),
  riskFreeRate: z.number().min(-1).max(1),
});

export const Route = createFileRoute("/bsm")({
  component: BSM,
});

function BSM() {
  const form = useForm<z.infer<typeof BSMInputsSchema>>({
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

  const { call, put } = calculateBSM({
    S: form.watch("underlyingPrice"),
    K: form.watch("strikePrice"),
    T: form.watch("timeToMaturity"),
    unit: form.watch("timeUnit"),
    sigma: form.watch("variance"),
    r: form.watch("riskFreeRate"),
  });

  const callArr: number[] = [];
  const putArr: number[] = [];

  return (
    <div className="flex-1 flex flex-row">
      <Sidebar form={form} />
      <Main {...{ call: call, put: put, callArr: callArr, putArr: putArr }} />
    </div>
  );
}

function Sidebar(props: {
  form: UseFormReturn<z.infer<typeof BSMInputsSchema>>;
}) {
  // const onSubmit = (values: z.infer<typeof BSMInputsSchema>) => {
  //   console.log(values);
  // };

  return (
    <div className="flex flex-col gap-4 w-1/4 border-r px-5 p-2 overflow-y-auto">
      <div>
        <p className="text-lg font-medium">Basic BSM Inputs</p>
        <Form {...props.form}>
          <form
            // onSubmit={props.form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={props.form.control}
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
                control={props.form.control}
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
                control={props.form.control}
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
                control={props.form.control}
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
                control={props.form.control}
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
                control={props.form.control}
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
      </div>
      <hr />
      <div>
        <p className="text-lg font-medium">Sensitivity Analysis</p>
      </div>
    </div>
  );
}

function Main({
  ...props
}: {
  call: number;
  put: number;
  callArr: number[];
  putArr: number[];
}) {
  return (
    <div className="flex-1 overflow-y-auto">
      <p className="text-3xl px-10 p-5 font-light">
        Black-Scholes-Merton Calculator
      </p>
      <div className="flex flex-row gap-10 p-5 w-full justify-center">
        <div className="w-1/3 bg-green-500 rounded p-5">
          <p className="text-lg font-light">
            {" "}
            Call Price: {Math.round(props.call * 1000) / 1000}{" "}
          </p>
        </div>
        <div className="w-1/3 bg-red-500 rounded p-5">
          <p className="text-lg font-light">
            {" "}
            Put Price: {Math.round(props.put * 1000) / 1000}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

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

function calculateBSM({
  S,
  K,
  T,
  unit,
  sigma,
  r,
}: {
  S: number;
  K: number;
  T: number;
  unit: string;
  sigma: number;
  r: number;
}) {
  if (unit === "days") {
    T = T / 251;
  }
  const d1 =
    (Math.log(S / K) + (r + sigma ** 2 / 2) * T) / (sigma * Math.sqrt(T));
  const d2 = d1 - sigma * Math.sqrt(T);
  const call = S * ncdf(d1, 0, 1) - K * Math.exp(-r * T) * ncdf(d2, 0, 1);
  const put = K * Math.exp(-r * T) * ncdf(-d2, 0, 1) - S * ncdf(-d1, 0, 1);
  return { call, put };
}
