import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // 1. Get the ID from the URL
  const { id } = req.query;
  const propertyId = Number(id);

  // 2. Define the data (Same data as your main list)
  const properties = [
    {
      id: 1,
      name: "Villa Arrecife Beach House",
      price: 250,
      rating: 4.8,
      reviews: 34,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Bali, Indonesia",
      description: "Experience luxury living in this stunning beach house with ocean views and private pool."
    },
    {
      id: 2,
      name: "Modern Loft in City Center",
      price: 120,
      rating: 4.5,
      reviews: 12,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "New York, USA",
      description: "A stylish and modern loft located in the heart of the city, perfect for urban explorers."
    },
    {
      id: 3,
      name: "Cozy Mountain Cabin",
      price: 180,
      rating: 4.9,
      reviews: 56,
      image: "https://images.unsplash.com/photo-1542718613-5495a04aeebe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Aspen, USA",
      description: "Escape to the mountains in this cozy cabin, featuring a fireplace and breathtaking views."
    },
    {
      id: 4,
      name: "Seaside Cottage",
      price: 200,
      rating: 4.7,
      reviews: 21,
      image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Cornwall, UK",
      description: "A charming cottage right by the sea, perfect for a relaxing getaway."
    },
    {
      id: 5,
      name: "Urban Apartment",
      price: 150,
      rating: 4.4,
      reviews: 8,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Tokyo, Japan",
      description: "Experience the vibrant city life in this modern apartment located in downtown Tokyo."
    },
    {
      id: 6,
      name: "Countryside Villa",
      price: 300,
      rating: 4.9,
      reviews: 45,
      image: "https://images.unsplash.com/photo-1600596542815-22b5c1275efb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Tuscany, Italy",
      description: "Relax in the beautiful Tuscan countryside in this spacious and elegant villa."
    }
  ];

  // 3. Find the specific property requested
  const property = properties.find((p) => p.id === propertyId);

  // 4. Return it
  if (property) {
    res.status(200).json(property);
  } else {
    res.status(404).json({ message: "Property not found" });
  }
}