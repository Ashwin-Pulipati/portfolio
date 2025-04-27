import React, { useState, useEffect, useMemo } from "react";

const TimelineDot = ({ reference, timelineGradient }) => {
  const [progress, setProgress] = useState(0);
  const circumference = 125.66; // For a circle with radius 20 (approx.)

  // Update the progress based on the card's position relative to the viewport.
  useEffect(() => {
    const handleScroll = () => {
      if (reference && reference.current) {
        const rect = reference.current.getBoundingClientRect();
        // Calculate progress: when the card’s top is at half the viewport height, progress=0;
        // when the card’s top is at 0, progress=1.
        const viewportHeight = window.innerHeight;
        const startThreshold = viewportHeight * 1; // Start when 80% of viewport is visible

        let newProgress = (startThreshold - rect.top) / startThreshold;
        newProgress = Math.max(0, Math.min(1, newProgress)); // Clamp between 0 and 1
        setProgress(newProgress);

        newProgress = Math.max(0, Math.min(1, newProgress)); // Clamp between 0 and 1.
        setProgress(newProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize immediately.
    return () => window.removeEventListener("scroll", handleScroll);
  }, [reference]);

  // Compute the stroke offset based on progress.
  const strokeDashoffset = circumference * (1 - progress);

  // Extract the two colors from the gradient string.
  // Example gradient: "linear-gradient(to bottom right, #ff9aad, #b78fff)"
  const { start, end } = useMemo(() => {
    const matches = timelineGradient.match(/#([0-9a-fA-F]{6})/g);
    if (matches && matches.length >= 2) {
      return { start: matches[0], end: matches[1] };
    }
    return { start: "blue", end: "blue" };
  }, [timelineGradient]);

  // Create a stable gradient ID (here we hash the gradient string)
  const gradientId = useMemo(() => {
    const hash = timelineGradient
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return `timeline-dot-gradient-${hash}`;
  }, [timelineGradient]);

  return (
    <figure
      className="relative w-6 h-6"
      style={{ marginLeft: "-5rem", marginTop: "5.5rem" }}
    >
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={start} />
            <stop offset="100%" stopColor={end} />
          </linearGradient>
        </defs>
        {/* Unfilled track */}
        <circle
          cx="50"
          cy="50"
          r="20"
          stroke="gray"
          strokeWidth="2"
          fill="transparent"
        />
        {/* Animated stroke fill (starts at 12 o’clock using transform) */}
        <circle
          cx="50"
          cy="50"
          r="20"
          stroke={`url(#${gradientId})`}
          strokeWidth="5"
          fill="white" // Default light mode
          className="dark:fill-bodyColor" // Dark mode fill
          strokeDasharray={circumference}
          style={{
            strokeDashoffset,
            transition: "stroke-dashoffset 0.3s ease-out",
          }}
          transform="rotate(0 50 50)"
        />
        {/* Center pulsing dot filled with the gradient */}
        <circle
          cx="50"
          cy="50"
          r="10"
          fill={`url(#${gradientId})`}
          className="animate-pulse"
        />
      </svg>
    </figure>
  );
};

export default React.memo(TimelineDot);
