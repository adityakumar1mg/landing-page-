import { useState, useEffect, useRef, useCallback } from 'react';
function Carousel({ banners, autoPlay = true, interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const carouselRef = useRef(null);
  const timerRef = useRef(null);

  // Create infinite items by duplicating banners
  const infiniteBanners = banners.length > 1 ? [...banners, banners[0]] : banners;

  // Handle smooth transition to next slide
  const goToNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex(prev => {
      if (prev >= infiniteBanners.length - 1) {
        // When reaching the end, we'll handle the reset after transition
        return prev + 1;
      }
      return prev + 1;
    });
  }, [infiniteBanners.length]);

  // Handle smooth transition to previous slide
  const goToPrev = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex(prev => {
      if (prev <= 0) {
        // When reaching the start, we'll handle the reset after transition
        return prev - 1;
      }
      return prev - 1;
    });
  }, []);

  // Handle transition end for infinite loop
  const handleTransitionEnd = useCallback(() => {
    if (currentIndex >= infiniteBanners.length - 1) {
      // Disable transition for instant reset
      setIsTransitioning(false);
      setCurrentIndex(0);
    } else if (currentIndex <= 0) {
      // Disable transition for instant reset
      setIsTransitioning(false);
      setCurrentIndex(infiniteBanners.length - 2);
    }
  }, [currentIndex, infiniteBanners.length]);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || infiniteBanners.length <= 1) return;

    timerRef.current = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(timerRef.current);
  }, [autoPlay, interval, infiniteBanners.length, goToNext]);

  // Re-enable transition after reset
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Touch event handlers for swipe
  const handleTouchStart = (e) => {
    clearInterval(timerRef.current);
    const touchX = e.touches[0].clientX;
    carouselRef.current.touchStartX = touchX;
  };

  const handleTouchMove = (e) => {
    const touchX = e.touches[0].clientX;
    carouselRef.current.touchEndX = touchX;
  };

  const handleTouchEnd = () => {
    if (!carouselRef.current.touchStartX || !carouselRef.current.touchEndX) return;

    const difference = carouselRef.current.touchStartX - carouselRef.current.touchEndX;
    if (difference > 50) {
      goToNext();
    } else if (difference < -50) {
      goToPrev();
    }

    // Restart autoplay if enabled
    if (autoPlay) {
      timerRef.current = setInterval(goToNext, interval);
    }
  };

  if (!banners || banners.length === 0) return null;

  // Calculate the real position for indicators
  const realPosition = currentIndex % banners.length;

  return (
    <div
      ref={carouselRef}
      className="relative w-screen h-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {infiniteBanners.map((banner, index) => (
          <div key={`${banner.heading}-${index}`} className="w-screen flex-shrink-0">
            {banner}
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      {banners.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition z-10"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition z-10"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${index === realPosition ? 'bg-white w-6' : 'bg-gray-400'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Carousel;
// Usage example:
/*
<BannerCarousel 
  banners={[
    {
      discount: 20,
      image_source: "/image1.jpg",
      heading: "Fashion",
      button_text: "Shop Now"
    },
    {
      discount: 30,
      image_source: "/image2.jpg",
      heading: "Electronics",
      button_text: "Explore Deals"
    },
    {
      discount: 15,
      image_source: "/image3.jpg",
      heading: "Home Decor",
      button_text: "View Offers"
    }
  ]}
/>
*/