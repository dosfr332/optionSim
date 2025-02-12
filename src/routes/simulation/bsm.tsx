import { BSMBaseFormula } from "@/components/equations/bsm/bsm-base-formula";
import {
  BSMGirsanov1,
  BSMGirsanov2,
  BSMGirsanov3,
} from "@/components/equations/bsm/bsm-girsanov";
import { Button } from "@/components/ui/button";
import { BSMModel } from "@/lib/simulate";
import { cn, getTheme } from "@/lib/utils";
import { Accordion } from "@radix-ui/react-accordion";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Plot from "react-plotly.js";

type tabs = "overview" | "simulation";

export const Route = createFileRoute("/simulation/bsm")({
  component: RouteComponent,
});

function RouteComponent() {
  const [currentTab, setCurrentTab] = useState<tabs>("overview");

  return (
    <div className="flex-1 flex flex-row">
      <Sidebar />
      <Main currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="h-full w-1/4 border-r">
      <Accordion
        type={"multiple"}
        className="w-full"
        defaultValue={["item-1"]}
      ></Accordion>
    </div>
  );
}

function Main({
  ...props
}: {
  setCurrentTab: (tab: tabs) => void;
  currentTab: tabs;
}) {
  const theme = getTheme();

  const [chartWidth, setChartWidth] = useState((window.innerWidth * 1) / 1.75);

  // Update width on window resize
  useEffect(() => {
    const handleResize = () => setChartWidth(window.innerWidth / 3);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bsmSimulation = new BSMModel({
    underlyingPrice: 95,
    strikePrice: 100,
    timeToMaturity: 1,
    timeUnit: "years",
    variance: 0.2,
    riskFreeRate: 0.05,
    numSteps: 1000,
  });

  const simulationData = bsmSimulation.generatePaths(5000);

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="px-10 p-5 ">
        <p className="text-3xl font-light">Black-Scholes Model</p>
        <div className="flex flex-row gap-5 items-center pt-2 pb-4">
          <Button
            className={cn(
              "text-xl text-muted-foreground hover:text-accent-foreground p-1 font-light",
              props.currentTab === "overview" &&
                "text-accent-foreground underline",
            )}
            variant={"link"}
            onClick={() => props.setCurrentTab("overview")}
          >
            {" "}
            Overview
          </Button>
          <Button
            className={cn(
              "text-xl text-muted-foreground hover:text-accent-foreground p-1 font-light",
              props.currentTab === "simulation" &&
                "text-accent-foreground underline",
            )}
            variant={"link"}
            onClick={() => props.setCurrentTab("simulation")}
          >
            {" "}
            Simulation
          </Button>
        </div>
        {props.currentTab === "overview" && (
          <div className="px-4 gap-5 flex flex-col w-full justify-center">
            <p className="text-sm">
              The Black-Scholes model is a mathematical model used for pricing
              options. The model assumes the price of the underlying asset
              follows a geometric Brownian motion with constant drift and
              volatility.
            </p>
            <p className="text-sm">
              The black-scholes model assumes the underlying assets price
              follows these stochastic differential equations:
            </p>
            <div className="flex flex-row justify-center">
              <BSMBaseFormula width={"25%"} />
            </div>
            <p className="text-sm">
              Using Girsanov's theorem we can transform the measure to one where
              the the expected return of the asset is the risk free rate. This
              allows us to use the risk free rate as the drift rather than
              estimaiting the future returns - which in practice is very
              difficult.
            </p>
            <div className="flex flex-row justify-center">
              <BSMGirsanov1 width={"35%"} />
            </div>
            <p className="text-sm">
              We know that the drift of the process under q must equal the risk
              free rate therefore:
            </p>
            <div className="flex flex-row justify-center">
              <BSMGirsanov2 width={"19%"} />
            </div>
            <p className="text-sm">
              Plugging lambda back into the original SDE we get the following:
            </p>
            <div className="flex flex-row justify-center">
              <BSMGirsanov3 width={"25%"} />
            </div>
            <p className="text-sm">
              Using these underlying dynamics we can simulate multiple paths of
              the underlying asset and calculate the payoff at maturity. Taking
              the average of the discounted payoffs then gives an estimate for
              the option price.
            </p>
          </div>
        )}
        {props.currentTab === "simulation" && (
          <>
            <div className="flex flex-row justify-center">
              <Plot
                data={simulationData.slice(0, 100).map((path, i) => ({
                  y: path,
                  name: `Path ${i + 1}`,
                }))}
                layout={{
                  title: {
                    text:
                      "Underlying Price Simulation" +
                      (simulationData.length > 100
                        ? " (First 100 Paths Shown)"
                        : ""),
                  },
                  yaxis: {
                    type: "log",
                    title: { text: "Price" },
                    gridcolor: "hsl(215 20.2% 20%)",
                  },
                  xaxis: {
                    title: { text: "Time" },
                    gridcolor: "hsl(215 20.2% 20%)",
                  },
                  paper_bgcolor:
                    theme === "dark" ? "hsl(222.2 84% 4.9%)" : "white",
                  plot_bgcolor:
                    theme === "dark" ? "hsl(222.2 25% 10.9%)" : "white",
                  font: { color: theme === "dark" ? "white" : "black" },
                  margin: { t: 50, b: 40, r: 60, l: 60 },
                  width: chartWidth,
                  showlegend: false,
                }}
              />
            </div>
            <div className="flex flex-row gap-10 p-5 w-full justify-center">
              <div className="w-1/3 bg-green-500 rounded p-5 text-center">
                <p className="text-lg font-light">
                  {" "}
                  Call Price:{" "}
                  {Math.round(
                    (simulationData
                      .map(
                        (path) =>
                          Math.exp(
                            bsmSimulation.modelParams.timeToMaturity *
                              -bsmSimulation.modelParams.riskFreeRate,
                          ) *
                          Math.max(
                            path[path.length - 1] -
                              bsmSimulation.modelParams.strikePrice,
                            0,
                          ),
                      )
                      .reduce((a, b) => a + b, 0) /
                      simulationData.length) *
                      1000,
                  ) / 1000}{" "}
                </p>
              </div>
              <div className="w-1/3 bg-red-500 rounded p-5 text-center">
                <p className="text-lg font-light">
                  {" "}
                  Put Price:{" "}
                  {Math.round(
                    (simulationData
                      .map(
                        (path) =>
                          Math.exp(
                            bsmSimulation.modelParams.timeToMaturity *
                              -bsmSimulation.modelParams.riskFreeRate,
                          ) *
                          Math.max(
                            bsmSimulation.modelParams.strikePrice -
                              path[path.length - 1],
                            0,
                          ),
                      )
                      .reduce((a, b) => a + b, 0) /
                      simulationData.length) *
                      1000,
                  ) / 1000}{" "}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
