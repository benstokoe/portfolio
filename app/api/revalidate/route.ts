/* eslint-disable no-console */
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST() {
  console.log("Revalidating cache for tag: prismic");

  revalidateTag("prismic");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
