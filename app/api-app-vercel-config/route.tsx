import { setTimeout } from "node:timers/promises";

export const dynamic = "force-dynamic";

export async function GET() {
  await setTimeout(2_000);

  return new Response("Hello, Dave!", { status: 200 });
}
