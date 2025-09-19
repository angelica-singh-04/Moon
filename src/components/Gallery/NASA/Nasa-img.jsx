import React, { useEffect, useState } from "react";
import Button from "@/components/Button/Button";

const NasaImageGallery = () => {
const [images, setImages] = useState([]);
useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("https://images-api.nasa.gov/search?q=moon&media_type=image");
        const data = await response.json();
        const items = data.collection.items;

        const imageData = items
          .map((item) => {
            if (
              item.links &&
              item.links[0].href &&
              item.data &&
              item.data[0].date_created
            ) {
              return {
                url: item.links[0].href,
                date: new Date(item.data[0].date_created).toDateString(),
              };
            }
            return null;
          })
          .filter(Boolean);

        setImages(imageData);
      } catch (error) {
        console.error("Error fetching NASA images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="px-15 py-35 bg-black">
        <div>
            <div className="text-yellow-500 pt-10 px-13 text-[4rem] font-bold">NASA.</div>
        </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 auto-rows-[200px] px-10 py-4">
    {images.map((img, index) => (
        <div
    key={index}
 className={`relative overflow-hidden shadow-lg group ${
    index % 3 === 0
    ? "row-span-2" 
    : index % 5 === 0
    ? "col-span-2" 
    : ""
    }`}
    >
            <img
              src={img.url}
              alt={`NASA ${index}`}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm mb-3">{img.date}</p>

              <div className="flex gap-3">
                {/* <button className="px-3 py-1 bg-white text-black font-semibold hover:bg-gray-300 transition">
                  Like
                </button> */}

                <a
                  href={img.url}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-yellow-500 text-xs text-black hover:bg-gray-300 transition"
                >
                  View Image
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NasaImageGallery;
