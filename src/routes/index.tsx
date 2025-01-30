import { createFileRoute } from "@tanstack/react-router";
import photo from "@/assets/personal-photo.jpg";


export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-row h-full m-5">
      <div className=" mx-5 w-1/2">
        <p className="text-3xl">Welcome to OptionSim!</p>
        <p className="text-md mb-5">
          Hi, I’m Freddie Dossor, a master's student in finance at the
          University of Otago in New Zealand. I built this project to explore
          and showcase different quantitative finance models, combining theory
          with practical applications.
        </p>
        <p>
          This tool lets you simulate option prices using models like
          Black-Scholes-Merton for analytical pricing and Monte Carlo methods
          for complex scenarios. Adjust parameters, run simulations, and
          visualize option behavior in real time.
        </p>
        <p className="mt-10 text-3xl">Getting Started</p>
        <p className="text-md mb-5">
          To get started select a pricing model, input your option details, and
          explore the results. You can also adjust the simulation settings to
          see how different scenarios affect option prices.
        </p>
        <p>
          As I learn more in my studies, I’ll add more models and features to
          this to contunue to showcase my konlwedge and skills in quantitative
          finance.
        </p>
      </div>
      <div className="m-2 mx-5 w-1/2 flex itmes-center justify-center">
        <div className="w-1/2">
          <img src={photo} />
        </div>
      </div>
    </div>
  );
}
