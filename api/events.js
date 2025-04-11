import ical from 'node-ical';
export default async function handler(req, res) {
  const url = 'https://notiontocalendar.com/api/calendars/17ed872b-594c-81f7-a7bd-000295b4ce8e/189a0594-6dd5-808c-b3a6-dd268976352b/c9d7801646c4079c01444cabfbbaf39b:4f0b58fd50c046798413d4fe7be47d27fb8fe831f002f98536f4d4807bd113bad516d66b222865a986ed200458d20db9735eed9ece3324192a5fabb29628f6d2c78a';
  const data = await ical.async.fromURL(url);
  const events = Object.values(data)
    .filter(e => e.type === 'VEVENT')
    .map(e => ({
      title: e.summary,
      date: e.start.toISOString().split('T')[0],
      location: e.location || 'Unbekannt'
    }));
  res.status(200).json(events);
}
