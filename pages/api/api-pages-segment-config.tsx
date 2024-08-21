import { setTimeout } from "node:timers/promises";

export default async function handler(request, response) {
  await setTimeout(2_000);

  return response.status(200).json("Hello, Dave!");
}
