// Decorative wavy divider used between sections.
// `flip` mirrors the curve vertically; `color` is any CSS/Tailwind text color class
// (the wave is drawn with fill="currentColor").
export default function WaveDivider({
  className = '',
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <div className={`w-full leading-[0] ${className}`} aria-hidden>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`w-full h-[60px] md:h-[100px] ${flip ? 'rotate-180' : ''}`}
      >
        <path
          fill="currentColor"
          d="M0,64 C240,120 480,120 720,88 C960,56 1200,8 1440,40 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}
