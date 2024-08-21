import { setTimeout } from "node:timers/promises";

export const maxDuration = 3;

export async function GET() {
  // should not timeout as per segment config but vercel.json will configure it to timeout.
  // let's see what happens
  await setTimeout(2_000);

  return new Response("Hello, Dave!", { status: 200 });
}
