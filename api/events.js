export default function handler(req, res) {
  const events = [
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
  ];
  res.status(200).json({ events }); // 👈 wichtige Änderung
}
