"use client";

import { useState, useEffect } from 'react';

export function Sqwiggle() {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rotation = scrollY / 20;
      const translateY = scrollY / 5;
      setStyle({
        transform: `translateY(${translateY}px) rotate(${rotation}deg)`,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 -z-10 transition-transform duration-75 ease-out"
      style={style}
    >
      <svg
        className="h-[50rem] w-[50rem] text-primary/10 dark:text-primary/5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
      >
        <defs>
          <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="30" />
          </filter>
        </defs>
        <g filter="url(#blur)">
            <path
            d="M313.626 123.364C362.244 80.89 455.541 40.518 535.152 107.728C614.764 174.938 619.66 295.962 559.397 348.068C499.135 400.174 416.033 348.068 381.229 280.858C346.425 213.649 265.008 165.839 313.626 123.364Z"
            fill="currentColor"
            />
            <path
            d="M685.257 884.093C730.345 929.215 819.53 971.936 892.203 913.61C964.876 855.284 947.473 742.66 877.017 692.748C806.561 642.836 732.062 692.748 702.392 755.864C672.722 818.98 640.169 838.971 685.257 884.093Z"
            fill="currentColor"
            />
            <path
            d="M110.222 717.388C64.95 765.312 28.528 854.54 99.206 923.67C169.884 992.8 274.698 966.758 316.592 905.15C358.487 843.541 316.592 765.312 280.17 706.986C243.748 648.66 155.494 669.464 110.222 717.388Z"
            fill="currentColor"
            />
        </g>
      </svg>
    </div>
  );
}
