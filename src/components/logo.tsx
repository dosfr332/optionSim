import { useTheme } from "./ui/theme-provider";

type LogoProps = { size: number } | { size: { width: number; height: number } };

export function Logo(props: LogoProps) {
  const theme = useTheme();


  let currTheme;
  if(theme.theme === "system") {
    currTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
  }  else {
    currTheme = theme.theme;
  }

  return (
    <svg
      width={typeof props.size === "number" ? props.size * 2 : props.size.width}
      height={typeof props.size === "number" ? props.size : props.size.height}
      viewBox="0 0 256 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100%" height="100%" fill="none" />
      <path
        stroke="#07c"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 50h20l25-35"
      />
      <path
        d="M5 50q15-20 30-10t18-20"
        stroke="#f80"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="3,3"
      />
      <g transform="matrix(1 0 0 1 160 32)">
        <text
          fontSize="50"
          fontFamily="Lato"
          fontStyle="normal"
          fontWeight="150"
          fill={currTheme === "dark" ? "#fff" : "#000"}
        >
          <tspan x="-101.45" y="15.71">
            O
          </tspan>
          <tspan x="-65.55" y="15.71">
            p
          </tspan>
          <tspan x="-41.95" y="15.71">
            t
          </tspan>
          <tspan x="-27.3" y="15.71">
            i
          </tspan>
          <tspan x="-18.5" y="15.71">
            o
          </tspan>
          <tspan x="5.3" y="15.71">
            n
          </tspan>
          <tspan x="29.1" y="15.71">
            S
          </tspan>
          <tspan x="51.6" y="15.71">
            i
          </tspan>
          <tspan x="60.4" y="15.71">
            m
          </tspan>
        </text>
      </g>
    </svg>
  );
}
