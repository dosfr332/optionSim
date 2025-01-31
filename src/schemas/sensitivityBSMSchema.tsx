import { z } from "zod";

const validParams = [
  "underlyingPrice",
  "strikePrice",
  "timeToMaturity",
  "variance",
  "riskFreeRate",
] as const;

const validColourParams = ["price", "delta", "gamma", "vega", "theta"] as const;


export const BSMSensitivitySchema = z
  .object({
    param1: z.object({
      min: z.number(),
      max: z.number(),
      paramName: z.enum(validParams),
    }),
    param2: z.object({
      min: z.number(),
      max: z.number(),
      paramName: z.enum(validParams),
    }),
    colourParam: z.enum(validColourParams),
    colourScheme: z.string(),
  })
  .refine(
    (data) => {
      const params = [data.param1, data.param2];

      return params.every((param) => {
        const { min, max, paramName } = param;

        // Underlying & Strike Price: Only min >= 0 is enforced
        if (
          paramName === "underlyingPrice" ||
          paramName === "strikePrice" ||
          paramName === "timeToMaturity"
        ) {
          return min >= 0;
        }

        // Risk-Free Rate & Volatility: min >= 0 and max <= 1
        if (paramName === "riskFreeRate" || paramName === "variance") {
          return min >= 0 && max <= 1;
        }

        // Default case: No specific restrictions
        return true;
      });
    },
    {
      message:
        "Invalid range: Underlying & Strike price must have min >= 0, Risk-Free Rate & Volatility must have 0 ≤ min ≤ max ≤ 1",
      path: ["param1", "param2"], // Attach the error to the parameter fields
    },
  );