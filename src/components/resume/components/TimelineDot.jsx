import React, { useState, useEffect, useMemo } from "react";

const TimelineDot = ({ reference, timelineGradient }) => {
  const [progress, setProgress] = useState(0);
  const circumference = 125.66;

  useEffect(() => {
    const handleScroll = () => {
      if (reference && reference.current) {
        const rect = reference.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const startThreshold = viewportHeight * 1;

        let newProgress = (startThreshold - rect.top) / startThreshold;
        newProgress = Math.max(0, Math.min(1, newProgress));
        setProgress(newProgress);

        newProgress = Math.max(0, Math.min(1, newProgress)); 
        setProgress(newProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [reference]);

  const strokeDashoffset = circumference * (1 - progress);

  const { start, end } = useMemo(() => {
    const matches = timelineGradient.match(/#([0-9a-fA-F]{6})/g);
    if (matches && matches.length >= 2) {
      return { start: matches[0], end: matches[1] };
    }
    return { start: "blue", end: "blue" };
  }, [timelineGradient]);

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
        <circle
          cx="50"
          cy="50"
          r="20"
          stroke="gray"
          strokeWidth="2"
          fill="transparent"
        />
        <circle
          cx="50"
          cy="50"
          r="20"
          stroke={`url(#${gradientId})`}
          strokeWidth="5"
          fill="white"
          className="dark:fill-bodyColor"
          strokeDasharray={circumference}
          style={{
            strokeDashoffset,
            transition: "stroke-dashoffset 0.3s ease-out",
          }}
          transform="rotate(0 50 50)"
        />
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
