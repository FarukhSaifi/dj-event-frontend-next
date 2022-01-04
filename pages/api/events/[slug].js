const { events } = require("./data.json");

export default function (req, res) {
  const evt = events.filter((item) => item.slug === req.query.slug);

  if (req.method === "GET") {
    // Process a GET rst
    res.status(200).json(evt);
  } else {
    // Handle any other HTTP method
    res.status(405).json({ message: "Method is not allowed" });
  }
}
