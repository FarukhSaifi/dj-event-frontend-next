// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { events } from "./data.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // Process a GET request
    res.status(200).json(events);
  } else {
    // Handle any other HTTP method
    res.status(405).json({ message: "Method is not allowed" });
  }
}
