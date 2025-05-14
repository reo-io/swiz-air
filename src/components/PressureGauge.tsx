
import React from "react";

interface PressureGaugeProps {
  value: number;
  maxValue: number;
}

const PressureGauge: React.FC<PressureGaugeProps> = ({ value, maxValue }) => {
  const percentage = (value / maxValue) * 100;
  // Calculate stroke-dasharray and stroke-dashoffset for arc
  const circumference = 2 * Math.PI * 40; // r=40
  const arcLength = (percentage / 100) * circumference * 0.75; // use 3/4 of the circle
  const dashOffset = circumference * 0.25 / 2; // start from the left side

  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <div className="pressure-gauge">
        <svg width="100" height="100" viewBox="0 0 100 100">
          {/* Background arc */}
          <path
            d="M10,50 A40,40 0 1,1 90,50"
            fill="none"
            stroke="#333333"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Value arc */}
          <path
            d="M10,50 A40,40 0 1,1 90,50"
            fill="none"
            stroke="#FFD700"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={`${arcLength} ${circumference}`}
            strokeDashoffset={dashOffset}
          />
        </svg>
        <div className="absolute text-white text-2xl font-bold">
          {value}
        </div>
      </div>
      <div className="text-center mt-2">
        <span className="text-suspension-lightgray text-sm">PSI</span>
        <br />
        <span className="text-suspension-lightgray text-sm">TANK</span>
      </div>
    </div>
  );
};

export default PressureGauge;
