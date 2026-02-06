import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const propertyId = Number(id);

  // Mock Reviews Data
  const allReviews = [
    { id: 1, propertyId: 1, author: "John Doe", rating: 5, comment: "Amazing place! The view was spectacular.", date: "2024-01-15" },
    { id: 2, propertyId: 1, author: "Jane Smith", rating: 4, comment: "Very comfortable, but the wifi was a bit slow.", date: "2024-02-10" },
    { id: 3, propertyId: 2, author: "Alice Johnson", rating: 5, comment: "Perfect location for exploring the city.", date: "2024-03-05" },
    { id: 4, propertyId: 1, author: "Mike Brown", rating: 5, comment: "Highly recommended for families.", date: "2024-04-20" },
  ];

  // Filter reviews for the requested property ID
  const propertyReviews = allReviews.filter((r) => r.propertyId === propertyId);

  res.status(200).json(propertyReviews);
}