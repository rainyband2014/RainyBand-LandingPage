import React, { useEffect, useState } from 'react';

interface Props {
  images: string[];
  alt: string;
}

export default function ImageShuffleCard({ images, alt }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;
    if (isHovered) return;

    const intervalId = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length, isHovered]);

  if (images.length <= 1) {
    return (
      <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-md">
        <img 
          src={images[0]} 
          alt={alt} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-[25%] bg-gradient-to-t from-brand-950/50 to-transparent pointer-events-none"></div>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full aspect-[4/5] rounded-3xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setCurrentIndex(prev => (prev + 1) % images.length)}
    >
      {images.map((src, index) => {
        // Calculate relative position based on current index
        const diff = (index - currentIndex + images.length) % images.length;
        
        let zIndex = 10 - diff;
        let scale = 1;
        let translateY = '0%';
        let rotate = '0deg';
        let opacity = 1;

        if (diff === 0) {
          // Current image
          scale = 1;
          translateY = '0%';
          rotate = '0deg';
          opacity = 1;
        } else if (diff === 1) {
          // Next image (behind)
          scale = 0.95;
          translateY = '4%';
          rotate = '2deg';
          opacity = 0.8;
        } else if (diff === images.length - 1) {
          // Previous image (fading out / moving behind)
          scale = 0.9;
          translateY = '-4%';
          rotate = '-2deg';
          opacity = 0;
        } else {
          // Other images (hidden)
          opacity = 0;
          scale = 0.9;
        }

        // Respect prefers-reduced-motion using CSS media query class from Tailwind (if enabled)
        // Tailwind provides motion-safe and motion-reduce variants.
        return (
          <div 
            key={src}
            className="absolute inset-0 rounded-3xl overflow-hidden shadow-md motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out"
            style={{
              zIndex,
              opacity,
              transform: `translateY(${translateY}) scale(${scale}) rotate(${rotate})`
            }}
          >
            <img 
              src={src} 
              alt={alt} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-[25%] bg-gradient-to-t from-brand-950/50 to-transparent pointer-events-none"></div>
          </div>
        );
      })}
    </div>
  );
}
