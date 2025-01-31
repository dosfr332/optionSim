import { z } from "zod";

export const BSMInputsSchema = z.object({
  underlyingPrice: z.number().min(0),
  strikePrice: z.number().min(0),
  timeToMaturity: z.number().min(0),
  timeUnit: z.union([z.literal("years"), z.literal("days")]),
  variance: z.number().min(0).max(1),
  riskFreeRate: z.number().min(-1).max(1),
});