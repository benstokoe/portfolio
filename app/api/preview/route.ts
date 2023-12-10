import { redirectToPreviewURL } from "@prismicio/next";
import { draftMode } from "next/headers";
import { NextRequest } from "next/server";

import { createClient } from "@/prismicio";

export async function GET(request: NextRequest) {
  const client = createClient();

  draftMode().enable();

  await redirectToPreviewURL({ client, request });
}
