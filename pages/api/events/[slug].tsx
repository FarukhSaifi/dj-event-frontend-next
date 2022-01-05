import type { NextApiRequest, NextApiResponse } from "next";
const { events } = require("./data.json");

export default function (req: NextApiRequest, res: NextApiResponse) {
  const evt = events.filter(
    (item: { slug: string | string[] }) => item.slug === req.query.slug
  );

  if (req.method === "GET") {
    // Process a GET rst
    res.status(200).json(evt);
  } else {
    // Handle any other HTTP method
    res.status(405).json({ message: "Method is not allowed" });
  }
}
