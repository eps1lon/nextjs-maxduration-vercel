import { setTimeout } from "node:timers/promises";

export async function GET() {
  await setTimeout(2_000);

  return new Response("Hello, Dave!", { status: 200 });
}
