export default function YellowDesktopBanner() {
  return (
    <div className="w-full bg-amber-50 border-l-4 border-amber-500 p-4 flex items-center gap-4">
      <div className="flex-shrink-0">
        <svg 
          className="w-6 h-6 text-amber-600" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
          />
        </svg>
      </div>
      <div className="flex-1">
        <p className="font-medium text-amber-900 text-sm">
          Service Update
        </p>
        <p className="text-amber-800 text-sm mt-1">
          Planned maintenance scheduled for this weekend. Some services may be temporarily unavailable between 2:00 AM - 6:00 AM GMT.
        </p>
      </div>
      <button 
        className="flex-shrink-0 text-amber-600 hover:text-amber-800 transition-colors"
        aria-label="Dismiss notification"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
