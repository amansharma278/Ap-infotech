import React from "react";

const videos = [
  { id: 1, src: "/video1.mkv" },
  { id: 2, src: "/video2.mp4" },
  { id: 3, src: "/assets/video3.mp4" },
  { id: 4, src: "/assets/video4.mp4" },
  { id: 5, src: "/assets/video5.mp4" },
  { id: 6, src: "/assets/video6.mp4" },
];

export default function VideoGrid() {
  return (
    <div className="px-6 py-10 boder-black">
      <h1 className="text-5xl font-bold mb-6 text-center">Our <span className="text-[#009560]">Work</span></h1>

      {/* Masonry Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="break-inside-avoid overflow-hidden rounded-2xl shadow-lg bg-black"
          >
            {/* Mobile 9:16 Frame */}
            <div className="aspect-[9/16] w-full">
              <video
                src={video.src}
                controls
                muted
                loop
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
