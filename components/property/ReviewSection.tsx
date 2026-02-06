import axios from "axios";
import React, { useState, useEffect } from "react";

interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

const ReviewSection: React.FC<{ propertyId: number }> = ({ propertyId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      if (!propertyId) return;
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <div className="text-gray-500 py-4">Loading reviews...</div>;
  }

  if (reviews.length === 0) {
    return <div className="text-gray-500 py-4">No reviews yet. Be the first to leave one!</div>;
  }

  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <div key={review.id} className="border-b pb-4 last:border-b-0">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">
                {review.author.charAt(0)}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{review.author}</h4>
                <span className="text-xs text-gray-500">{review.date}</span>
              </div>
            </div>
            <div className="flex text-yellow-500">
               {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            </div>
          </div>
          <p className="text-gray-700 mt-2">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;