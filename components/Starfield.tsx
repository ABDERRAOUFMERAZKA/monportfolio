'use client';

import { useMemo } from 'react';

// Deterministic pseudo-random so SSR and client render identical star fields
function seeded(i: number) {
  const x = Math.sin(i * 999.13) * 10000;
  return x - Math.floor(x);
}

export default function Starfield({ count = 90 }: { count?: number }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: seeded(i + 1) * 100,
        top: seeded(i + 42) * 100,
        size: seeded(i + 7) * 2 + 1,
        delay: seeded(i + 13) * 4,
        duration: 2.5 + seeded(i + 21) * 3,
        opacity: 0.3 + seeded(i + 5) * 0.6,
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
