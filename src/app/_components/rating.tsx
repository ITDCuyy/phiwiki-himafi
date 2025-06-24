"use client";

import { Star } from "lucide-react";
import { useState } from "react";
import { api } from "~/trpc/react";

export function Rating({ imageId }: { imageId: number }) {
  const [hoverRating, setHoverRating] = useState(0);
  const [currentRating, setCurrentRating] = useState(0);

  const { data: imageRating } = api.image.getImageRating.useQuery({ imageId });

  const utils = api.useUtils();
  const rateImage = api.image.rateImage.useMutation({
    onSuccess: () => {
      void utils.image.getImageRating.invalidate({ imageId });
    },
  });
  const handleRating = (rating: number) => {
    rateImage.mutate({ imageId, rating });
    setCurrentRating(rating);
  };

  return (
    <div className="flex items-center justify-center gap-2 px-6 pb-4">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <div key={star}>
            <Star
              className={`cursor-pointer ${
                (hoverRating || currentRating || (imageRating ?? 0)) >= star
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
              onClick={() => handleRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
            />
          </div>
        ))}
      </div>
      <span className="text-sm text-gray-500">
        {currentRating || imageRating}
      </span>
    </div>
  );
}
