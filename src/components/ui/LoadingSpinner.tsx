import { siteConfig } from '@/data/siteConfig';

export function LoadingSpinner() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16">
      <div className="relative flex items-center justify-center">
        {/* Outer glowing pulse */}
        <div className="absolute h-20 w-20 animate-ping rounded-full bg-gold-400/20 duration-1000" />
        
        {/* Spinning decorative ring */}
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-gold-200 border-t-maroon-700" />
        
        {/* Center spiritual glyph */}
        <div className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-maroon-900 text-lg font-bold text-gold-400 shadow-md">
          ॐ
        </div>
      </div>
      
      <p className="mt-4 animate-pulse font-heading text-sm font-medium tracking-wide text-maroon-800">
        {siteConfig.brandNameHindi} लोड हो रहा है...
      </p>
    </div>
  );
}
