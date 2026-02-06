import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function BookingPage() {
  const router = useRouter();
  
  // 1. Define State for Form Data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // 2. Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 3. Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await axios.post("/api/bookings", formData);
      setMessage("Booking confirmed! Redirecting...");
      
      // Optional: Clear form or redirect home after 2 seconds
      setTimeout(() => {
        router.push("/"); 
      }, 2000);
      
    } catch (err) {
      setError("Failed to submit booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Confirm Your Booking</h2>
        
        {/* Success/Error Messages */}
        {message && <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">{message}</div>}
        {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Personal Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input 
                type="text" name="firstName" required 
                value={formData.firstName} onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input 
                type="text" name="lastName" required 
                value={formData.lastName} onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input 
              type="email" name="email" required 
              value={formData.email} onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input 
              type="tel" name="phoneNumber" required 
              value={formData.phoneNumber} onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Payment Info */}
          <div className="border-t pt-4 mt-4">
            <h3 className="text-lg font-medium mb-4">Payment Details</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Card Number</label>
              <input 
                type="text" name="cardNumber" required placeholder="0000 0000 0000 0000"
                value={formData.cardNumber} onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                <input 
                  type="text" name="expirationDate" required placeholder="MM/YY"
                  value={formData.expirationDate} onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">CVV</label>
                <input 
                  type="text" name="cvv" required placeholder="123"
                  value={formData.cvv} onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Billing Address</label>
            <textarea 
              name="billingAddress" required 
              value={formData.billingAddress} onChange={handleChange as any}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 h-20"
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={loading}
            className={`w-full py-3 px-4 text-white font-bold rounded-md transition duration-200 
              ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            {loading ? "Processing..." : "Confirm & Pay"}
          </button>
        </form>
      </div>
    </div>
  );
}