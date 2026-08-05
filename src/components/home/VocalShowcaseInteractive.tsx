import React, { useState, useRef, useEffect, useCallback } from 'react';
import { vocalists } from '../../data/vocalists';

export default function VocalShowcaseInteractive() {
  const [selectedId, setSelectedId] = useState<string>(vocalists[0].id);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setSelectedId(prevId => {
        const currentIndex = vocalists.findIndex(v => v.id === prevId);
        const nextIndex = (currentIndex + 1) % vocalists.length;
        
        // Auto scroll carousel if possible
        if (carouselRef.current) {
           const nextBtn = carouselRef.current.children[nextIndex] as HTMLElement;
           if (nextBtn) {
             const scrollPos = nextBtn.offsetLeft - carouselRef.current.offsetWidth / 2 + nextBtn.offsetWidth / 2;
             carouselRef.current.scrollTo({ left: Math.max(0, scrollPos), behavior: 'smooth' });
           }
        }
        
        return vocalists[nextIndex].id;
      });
    }, 8000);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [startAutoPlay]);

  const handleMouseEnter = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const handleMouseLeave = () => {
    startAutoPlay();
  };

  const selectedVocalist = vocalists.find(v => v.id === selectedId) || vocalists[0];

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="w-full mt-8 md:mt-12 flex flex-col gap-8 md:gap-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12">
        {/* Left Column (Poster) */}
        <div className="md:col-span-7 relative w-full aspect-[3/4] md:aspect-[4/5] rounded-3xl overflow-hidden group shadow-md">
          {/* Poster Container có key để trigger CSS animation khi đổi người */}
          <div key={`poster-${selectedId}`} className="absolute inset-0 w-full h-full animate-fade-in">
            {/* TODO: thay bằng ảnh poster thật */}
            <img 
              src={selectedVocalist.posterImageUrl} 
              alt={selectedVocalist.name} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-brand-950/90 to-transparent"></div>
            
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
              <p className="text-white/70 text-xs md:text-sm font-bold tracking-widest uppercase mb-2">
                {selectedVocalist.experienceYears} NĂM KINH NGHIỆM
              </p>
              <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                {selectedVocalist.name}
              </h3>
              
              <div>
              {/* TODO: Gắn link video thật sau */}
              <button 
                onClick={() => {}} 
                className="inline-flex items-center justify-center px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-full backdrop-blur-md transition-colors border border-white/20 shadow-sm"
              >
                <span className="mr-2 text-lg leading-none">▸</span> Xem video
              </button>
            </div>
          </div>
        </div>
        </div>

        {/* Right Column (Info Card) */}
        <div className="md:col-span-5 bg-neutral-surface rounded-3xl p-6 md:p-8 shadow-sm border border-neutral-text/5 flex flex-col h-full relative z-10">
          <div key={`info-${selectedId}`} className="mb-6 animate-fade-in">
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-brand-600 text-white mb-6 shadow-sm">
              {selectedVocalist.badgeLabel}
            </span>
            <div className="flex items-center justify-between mb-8">
              <h4 className="text-2xl font-bold text-brand-900">{selectedVocalist.name}</h4>
              <a href={`/vocal/${selectedVocalist.slug}`} className="text-sm font-medium text-brand-600 hover:underline">
                Xem vocal &rarr;
              </a>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold text-neutral-muted uppercase tracking-wider mb-1">Show / format hợp</p>
                <p className="text-base text-neutral-text font-medium">{selectedVocalist.formats}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-neutral-muted uppercase tracking-wider mb-1">Mood / vibe</p>
                <p className="text-base text-neutral-text font-medium">{selectedVocalist.mood}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-neutral-muted uppercase tracking-wider mb-1">Thể loại / gu hát</p>
                <p className="text-base text-neutral-text font-medium">{selectedVocalist.genres}</p>
              </div>
            </div>
          </div>

          <div key={`videos-${selectedId}`} className="mt-auto grid grid-cols-2 gap-4 pt-6 border-t border-neutral-text/10 animate-fade-in" style={{ animationDelay: '100ms' }}>
            {selectedVocalist.videos?.slice(0, 2).map((video) => (
              <div key={video.id} className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer shadow-sm">
                {/* TODO: thay bằng thumbnail video thật */}
                <img src={video.thumbnailUrl} alt={video.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-sm">
                    <span className="text-white text-lg ml-1 leading-none">▸</span>
                  </div>
                </div>
                {/* TODO: chức năng play video thật */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative flex items-center w-full group">
        <button 
          onClick={scrollLeft}
          className="hidden md:flex absolute left-0 z-10 w-10 h-10 -ml-5 items-center justify-center rounded-full bg-neutral-surface shadow-md border border-neutral-text/10 text-neutral-text hover:text-brand-600 hover:border-brand-300 transition-colors opacity-0 group-hover:opacity-100"
          aria-label="Scroll left"
        >
          &larr;
        </button>
        
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto gap-4 md:gap-5 pb-4 md:pb-0 scrollbar-hide snap-x w-full px-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {vocalists.map((vocalist) => (
            <button
              key={vocalist.id}
              onClick={() => setSelectedId(vocalist.id)}
              className={`flex-shrink-0 flex items-center gap-3 p-2 pr-5 rounded-full transition-all duration-300 snap-start border outline-none ${
                selectedId === vocalist.id
                  ? 'bg-brand-100/60 border-brand-300 shadow-sm'
                  : 'bg-neutral-surface border-neutral-text/5 hover:bg-neutral-bg hover:border-neutral-text/10 shadow-sm'
              }`}
            >
              <img 
                src={vocalist.avatarImageUrl} 
                alt={vocalist.name} 
                className={`w-12 h-12 rounded-full object-cover border-2 transition-colors ${
                  selectedId === vocalist.id ? 'border-brand-600' : 'border-transparent'
                }`}
              />
              <span className={`text-sm md:text-base font-medium whitespace-nowrap transition-colors ${
                selectedId === vocalist.id ? 'text-brand-900 font-bold' : 'text-neutral-muted'
              }`}>
                {vocalist.name}
              </span>
            </button>
          ))}
        </div>

        <button 
          onClick={scrollRight}
          className="hidden md:flex absolute right-0 z-10 w-10 h-10 -mr-5 items-center justify-center rounded-full bg-neutral-surface shadow-md border border-neutral-text/10 text-neutral-text hover:text-brand-600 hover:border-brand-300 transition-colors opacity-0 group-hover:opacity-100"
          aria-label="Scroll right"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}
