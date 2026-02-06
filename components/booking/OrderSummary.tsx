import React from 'react';

// Define the props interface for type safety
interface OrderSummaryProps {
  bookingDetails: {
    propertyName: string;
    price: number;
    bookingFee: number;
    totalNights: number;
    startDate: string;
  }
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ bookingDetails }) => (
  <div className="bg-white p-6 shadow-md rounded-lg border border-gray-100">
    <h2 className="text-xl font-semibold mb-4">Review Order Details</h2>
    <div className="flex items-start mt-4">
      <img 
        src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
        alt="Property" 
        className="w-32 h-32 object-cover rounded-md" 
      />
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
        <p className="text-sm text-gray-500">4.76 (345 reviews)</p>
        <p className="text-sm text-gray-500 mt-2">{bookingDetails.startDate} • {bookingDetails.totalNights} Nights</p>
      </div>
    </div>

    {/* Price Breakdown */}
    <div className="mt-6 border-t pt-4">
      <div className="flex justify-between">
        <p>Booking Fee</p>
        <p>${bookingDetails.bookingFee}</p>
      </div>
      <div className="flex justify-between mt-2">
        <p>Subtotal</p>
        <p>${bookingDetails.price}</p>
      </div>
      <div className="flex justify-between mt-4 font-semibold text-lg border-t pt-2">
        <p>Grand Total</p>
        <p>${bookingDetails.bookingFee + bookingDetails.price}</p>
      </div>
    </div>
  </div>
);

export default OrderSummary;