import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { showcaseItems } from '../../data/showcaseItems';

export default function HomeMediaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Lấy ra 6 ảnh/video nổi bật nhất (ví dụ)
  const featuredItems = showcaseItems.slice(0, 6);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full relative group">
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {featuredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-4 relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl hover-media-container shadow-sm cursor-pointer block">
                <img 
                  src={item.thumbnailUrl} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="hover-media-overlay"></div>
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-sm transition-transform duration-300">
                      <span className="text-white text-xl ml-1 leading-none">▸</span>
                    </div>
                  </div>
                )}
                {/* Optional: Add caption on hover if desired */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 transform translate-y-4 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="bg-black/60 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={scrollPrev}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-white/90 shadow-md border border-neutral-text/10 text-neutral-text hover:text-brand-600 hover:border-brand-300 hover:scale-[1.05] active:scale-[0.98] transition-all opacity-0 group-hover:opacity-100"
        aria-label="Slide trước"
      >
        &larr;
      </button>
      
      <button 
        onClick={scrollNext}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-white/90 shadow-md border border-neutral-text/10 text-neutral-text hover:text-brand-600 hover:border-brand-300 hover:scale-[1.05] active:scale-[0.98] transition-all opacity-0 group-hover:opacity-100"
        aria-label="Slide tiếp theo"
      >
        &rarr;
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex ? 'bg-brand-600 w-6' : 'bg-brand-600/30 hover:bg-brand-600/50'
            }`}
            aria-label={`Đi đến slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
