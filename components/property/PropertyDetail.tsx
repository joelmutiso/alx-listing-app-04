import React from 'react';
import { PropertyProps } from '@/interfaces/index';

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{property.name}</h1>
      
      <div className="flex items-center text-gray-600 mb-6">
        <span className="text-yellow-500 mr-1">★</span>
        <span>{property.rating} ({property.reviews} reviews)</span>
        <span className="mx-2">•</span>
        <span>{property.location}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img 
            src={property.image} 
            alt={property.name} 
            className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
        
        <div className="border p-6 rounded-lg shadow-sm h-fit">
          <p className="text-2xl font-bold mb-4">${property.price} <span className="text-sm font-normal text-gray-500">/ night</span></p>
          <p className="text-gray-600 mb-6">
            {(property as any).description || "A beautiful place to stay."}
          </p>
          <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;