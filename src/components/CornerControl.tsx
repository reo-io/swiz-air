
import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

interface CornerControlProps {
  label: string;
  value: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const CornerControl: React.FC<CornerControlProps> = ({
  label,
  value,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className="corner-control">
      <div className="control-arrow" onClick={onIncrease}>
        <ArrowUp size={24} />
      </div>
      <div className="flex flex-col items-center">
        <span className="value-display">{value.toFixed(1)}</span>
        <span className="corner-label">{label} %</span>
      </div>
      <div className="control-arrow" onClick={onDecrease}>
        <ArrowDown size={24} />
      </div>
    </div>
  );
};

export default CornerControl;
