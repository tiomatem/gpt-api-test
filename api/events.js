export default function handler(req, res) {
  res.status(200).json([
    {
      title: "Latte Art Schulung",
      date: "2025-04-13",
      location: "Kaffee Simov"
    },
    {
      title: "Barista Basic",
      date: "2025-04-20",
      location: "Simov Werkstatt"
    }
  ]);
}
