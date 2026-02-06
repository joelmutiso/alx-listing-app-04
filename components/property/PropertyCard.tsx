import React from 'react';
import Link from 'next/link';

// Define the interface for the property object
export interface PropertyProps {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  location: string;
}

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <Link href={`/property/${property.id}`} className="block group">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
        {/* Image Section */}
        <div className="relative h-48 w-full">
          <img 
            src={property.image} 
            alt={property.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Content Section */}
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-gray-900 truncate">{property.name}</h3>
            <div className="flex items-center">
              <span className="text-yellow-500">★</span>
              <span className="ml-1 text-sm text-gray-600">{property.rating}</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 mt-1">{property.location}</p>
          
          <div className="mt-3 flex justify-between items-center">
             <p className="text-lg font-bold text-gray-900">${property.price} <span className="text-sm font-normal text-gray-500">/ night</span></p>
             <p className="text-xs text-gray-400">({property.reviews} reviews)</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;