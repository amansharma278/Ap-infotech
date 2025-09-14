import React from "react";

const images = [
  { id: 1, src: "/image2.png" },
  { id: 2, src: "/image2.png" },
  { id: 3, src: "/image3.png" },
  { id: 4, src: "/image3.png" },
  { id: 5, src: "/image2.png" },
  { id: 6, src: "/image.png" },

];

export default function ImageGrid() {
  return (
    <div className="px-6 py-20  flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold mb-6 mb-10">OUR <span className="text-[#009560] ">WORK</span></h1>

      {/* Masonry Layout */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-8 space-y-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="break-inside-avoid overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300 "
          >
            {/* Aspect ratio for mobile (9:16 frame) */}
            <div className="aspect-[9/16] w-full bg-gray-200">
              <img
                src={image.src}
                alt="grid"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
