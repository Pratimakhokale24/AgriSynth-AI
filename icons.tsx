import React from 'react';

// Using SVG props for flexible styling
type SVGProps = React.SVGProps<SVGSVGElement>;

export function LeafIcon(props: SVGProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M11 20A7 7 0 0 1 4 13V8a2 2 0 0 1 2-2h2" />
      <path d="M13 20a7 7 0 0 0 7-7V8a2 2 0 0 0-2-2h-2" />
      <path d="M4 13a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4" />
      <path d="M12 4v8" />
    </svg>
  );
}

export function SunIcon(props: SVGProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

export function DollarSignIcon(props: SVGProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

export function BrainCircuitIcon(props: SVGProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 5a3 3 0 1 0-5.993.296" />
        <path d="M18 11a3 3 0 1 0-5.223 2.108" />
        <path d="M14.5 5.5a3 3 0 1 0-2.65 4.38" />
        <path d="M12 18a3 3 0 1 0 5.993-.296" />
        <path d="M6 11a3 3 0 1 0 5.223 2.108" />
        <path d="M9.5 18.5a3 3 0 1 0 2.65-4.38" />
        <path d="M15 14v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" />
        <path d="M9 14v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
        <path d="M12 11V9" />
        <path d="M9 9h.01" />
        <path d="M15 9h.01" />
        <path d="M15 15h.01" />
        <path d="M9 15h.01" />
    </svg>
  );
}
