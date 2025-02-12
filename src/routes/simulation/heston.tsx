import { HestonBaseFormula } from "@/components/equations/heston/heston-base-formula";
import { HestonGirsanov } from "@/components/equations/heston/heston-girsanov";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Accordion } from "@radix-ui/react-accordion";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

type tabs = "overview" | "simulation" | "sensitivity";

export const Route = createFileRoute("/simulation/heston")({
  component: Heston,
});

function Heston() {
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
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="px-10 p-5 ">
        <p className="text-3xl font-light">Heston Model</p>
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
          <Button
            className={cn(
              "text-xl text-muted-foreground hover:text-accent-foreground p-1 font-light",
              props.currentTab === "sensitivity" &&
                "text-accent-foreground underline",
            )}
            variant={"link"}
            onClick={() => props.setCurrentTab("sensitivity")}
          >
            {" "}
            Sensitivity{" "}
          </Button>
        </div>
        {props.currentTab === "overview" && (
          <div className="px-4 gap-5 flex flex-col w-full justify-center">
            <p className="text-sm">
              The Heston model is a common extention of the black-scholes model
              that removes the assumption of constant volatility. Instead the
              asset's exposure to diffusion (it's volatility) is itself a
              stochastic process - more specifically a mean reverting
              (Ornstein-Uhlenbeck) stocastic process. This model is used to
              price options and other derivatives and presents a more accurate
              representation of the real-world.
            </p>
            <p className="text-sm">
              The heston model is defined by the following stochastic
              differential equations:
            </p>
            <div className="flex flex-row justify-center">
              <HestonBaseFormula width={"30%"} />
            </div>
            <p className="text-sm">
              Using Girsanov's theorem we can transform the measure to one where
              the the expected return of the asset is the risk free rate. This
              allows us to use the risk free rate as the drift rather than
              estimaiting the future returns - which in practice is very
              difficult.
            </p>
            <div className="flex flex-row justify-center">
              <HestonGirsanov width={"40%"} />
            </div>
            <p className="text-sm">
              Using these underlying dynamics we can simulate multiple paths of
              the underlying asset and calculate the payoff at maturity. Taking
              the average of the discounted payoffs then gives an estimate for
              the option price.
            </p>
          </div>
        )}
        {props.currentTab === "simulation" && <></>}
        {props.currentTab === "sensitivity" && <></>}
      </div>
    </div>
  );
}
