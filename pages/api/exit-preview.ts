import { exitPreview } from "@prismicio/next";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return exitPreview({ req, res });
}
