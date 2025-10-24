export default function handler(req, res) {
  res.status(200).json({
    name: "Lovable Project",
    status: "OK",
    timestamp: new Date().toISOString()
  });
}