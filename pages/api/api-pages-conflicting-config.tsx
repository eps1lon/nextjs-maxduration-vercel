import { setTimeout } from "node:timers/promises";

export const config = {
  maxDuration: 3,
};

export default async function handler(request, response) {
  // should not timeout as per segment config but vercel.json will configure it to timeout.
  // let's see what happens
  await setTimeout(2_000);

  return response.status(200).json("Hello, Dave!");
}
