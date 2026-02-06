import React from 'react';
import { PropertyProps } from '@/interfaces/index';
import ReviewSection from './ReviewSection'; // <--- Import the new component

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* ... (Your Header and Image Grid remain the same) ... */}
      <h1 className="text-3xl font-bold mb-4">{property.name}</h1>
      <div className="flex items-center text-gray-600 mb-6">
        <span className="text-yellow-500 mr-1">★</span>
        <span>{property.rating} ({property.reviews} reviews)</span>
        <span className="mx-2">•</span>
        <span>{property.location}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="md:col-span-2">
           <img src={property.image} alt={property.name} className="w-full h-96 object-cover rounded-lg mb-8" />
           
           <div className="border-b pb-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">About this place</h2>
            <p className="text-gray-700">{(property as any).description || "A beautiful stay."}</p>
           </div>
           
           {/* REVIEWS SECTION INSERTED HERE */}
           <div className="mt-8">
             <h2 className="text-2xl font-bold mb-6">Reviews</h2>
             <ReviewSection propertyId={property.id} />
           </div>
        </div>

        {/* Right Column (Booking Box) */}
        <div className="md:col-span-1">
          <div className="border p-6 rounded-xl shadow-lg sticky top-24">
             <div className="flex justify-between items-center mb-4">
               <span className="text-2xl font-bold">${property.price}</span>
               <span>/ night</span>
             </div>
             <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
               Reserve
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;