import React from 'react';

const BookingForm: React.FC = () => (
  <div className="bg-white p-6 shadow-md rounded-lg border border-gray-100">
    <h2 className="text-xl font-semibold mb-4">Contact Detail</h2>
    <form>
      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
          <input type="text" className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
          <input type="text" className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Doe" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input type="email" className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="john@example.com" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
          <input type="tel" className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="+1 (555) 000-0000" />
        </div>
      </div>

      {/* Payment Information */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Pay with</h2>
      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Card Number</label>
        <input type="text" className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="1234 5678 9101 1121" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Expiration Date</label>
          <input type="text" className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="MM/YY" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">CVV</label>
          <input type="text" className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="123" />
        </div>
      </div>

      {/* Billing Address */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Billing Address</h2>
      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Street Address</label>
        <input type="text" className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">City</label>
          <input type="text" className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">State</label>
          <input type="text" className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Zip Code</label>
          <input type="text" className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Country</label>
          <input type="text" className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>

      {/* Submit Button */}
      <button className="mt-8 w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition duration-300">
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;