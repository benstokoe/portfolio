import { redirectToPreviewURL, setPreviewData } from "@prismicio/next";
import { NextApiRequest, NextApiResponse } from "next";

import { createClient } from "../../prismicio";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = createClient({ req });

  setPreviewData({ req, res });

  return redirectToPreviewURL({ req, res, client });
}
