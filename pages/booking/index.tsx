import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-8">Confirm and pay</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Form and Policy */}
          <div className="lg:col-span-2 space-y-8">
            <BookingForm />
            
            {/* Cancellation Policy Section */}
            <div className="bg-white p-6 shadow-md rounded-lg border border-gray-100">
               <CancellationPolicy />
            </div>
          </div>
          
          {/* Right Column: Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummary bookingDetails={bookingDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}