import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export function GlobalScrollDown() {
  const location = useLocation();
  const [hasScrollableContent, setHasScrollableContent] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScrollCheck = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );

      // Check if page has sufficient content to scroll
      const canScroll = documentHeight > windowHeight + 120;
      setHasScrollableContent(canScroll);

      // Check if user is near the bottom of the page (within 140px of bottom/footer)
      const atBottom = windowHeight + scrollY >= documentHeight - 140;
      setIsAtBottom(atBottom);
    };

    // Check on mount and route change after short delay for content to render
    handleScrollCheck();
    const timer = setTimeout(handleScrollCheck, 300);

    window.addEventListener('scroll', handleScrollCheck, { passive: true });
    window.addEventListener('resize', handleScrollCheck, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScrollCheck);
      window.removeEventListener('resize', handleScrollCheck);
    };
  }, [location.pathname]);

  const handleScrollDown = () => {
    const scrollAmount = window.innerHeight * 0.75;
    window.scrollBy({
      top: scrollAmount,
      behavior: 'smooth',
    });
  };

  const shouldShow = hasScrollableContent && !isAtBottom;

  return (
    <div
      className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-40 sm:hidden transition-all duration-300 ease-out pointer-events-auto ${
        shouldShow
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <button
        onClick={handleScrollDown}
        type="button"
        aria-label="Scroll down for more content"
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-maroon-950/95 text-cream-100 border border-gold-400/50 shadow-2xl backdrop-blur-md text-xs font-semibold active:scale-95 transition-all cursor-pointer select-none"
      >
        <div className="w-3.5 h-5 rounded-full border border-gold-400/80 flex items-start justify-center p-0.5 shrink-0">
          <div className="w-1 h-1.5 rounded-full bg-gold-400 animate-mouse-wheel" />
        </div>
        <span className="text-cream-100 whitespace-nowrap">Scroll Down</span>
        <ChevronDown className="w-4 h-4 text-gold-400 animate-bounce shrink-0" />
      </button>
    </div>
  );
}
