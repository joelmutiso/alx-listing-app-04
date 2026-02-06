import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // In a real app, you would save req.body to a database here
    console.log("Booking Received:", req.body);
    
    // Simulate a short delay and return success
    setTimeout(() => {
      res.status(201).json({ message: "Booking confirmed successfully!" });
    }, 1000);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}