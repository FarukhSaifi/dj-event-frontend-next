// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { events } = require("./data.json");

export default function (req, res) {
  if (req.method === "GET") {
    // Process a GET request
    res.status(200).json(events);
  } else {
    // Handle any other HTTP method
    res.status(405).json({ message: "Method is not allowed" });
  }
}
