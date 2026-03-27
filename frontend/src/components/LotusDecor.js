export const LotusDivider = ({ className = '' }) => (
  <div className={`flex items-center justify-center gap-4 py-8 ${className}`}>
    <div className="w-16 h-px bg-gold-soft opacity-40" />
    <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold-soft">
      <path d="M50 10 C50 10, 30 35, 50 60 C70 35, 50 10, 50 10Z" fill="currentColor" opacity="0.3"/>
      <path d="M50 15 C50 15, 20 45, 50 75 C80 45, 50 15, 50 15Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M30 50 C30 50, 45 30, 50 55 C55 30, 70 50, 70 50" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
      <path d="M20 60 C20 60, 40 40, 50 65 C60 40, 80 60, 80 60" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    </svg>
    <div className="w-16 h-px bg-gold-soft opacity-40" />
  </div>
);

export const GoldLine = ({ className = '' }) => (
  <div className={`flex justify-center ${className}`}>
    <div className="w-20 h-px bg-gold-soft opacity-40" />
  </div>
);
