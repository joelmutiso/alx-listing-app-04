import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Mock data mimicking a database response
  const properties = [
    {
      id: 1,
      name: "Villa Arrecife Beach House",
      price: 250,
      rating: 4.8,
      reviews: 34,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Bali, Indonesia"
    },
    {
      id: 2,
      name: "Modern Loft in City Center",
      price: 120,
      rating: 4.5,
      reviews: 12,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "New York, USA"
    },
    {
      id: 3,
      name: "Cozy Mountain Cabin",
      price: 180,
      rating: 4.9,
      reviews: 56,
      image: "https://images.unsplash.com/photo-1542718613-5495a04aeebe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Aspen, USA"
    },
    {
      id: 4,
      name: "Seaside Cottage",
      price: 200,
      rating: 4.7,
      reviews: 21,
      image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Cornwall, UK"
    },
    {
      id: 5,
      name: "Urban Apartment",
      price: 150,
      rating: 4.4,
      reviews: 8,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Tokyo, Japan"
    },
    {
      id: 6,
      name: "Countryside Villa",
      price: 300,
      rating: 4.9,
      reviews: 45,
      image: "https://images.unsplash.com/photo-1600596542815-22b5c1275efb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Tuscany, Italy"
    }
  ];

  res.status(200).json(properties);
}