
import React from "react";

interface PresetSelectorProps {
  activePreset: number;
  onPresetChange: (preset: number) => void;
}

const PresetSelector: React.FC<PresetSelectorProps> = ({ activePreset, onPresetChange }) => {
  const presets = [3, 2, 1];

  return (
    <div className="flex flex-col items-center justify-center my-2">
      {presets.map((preset) => (
        <button
          key={preset}
          className={`preset-button ${activePreset === preset ? 'active' : ''}`}
          onClick={() => onPresetChange(preset)}
        >
          {preset}
        </button>
      ))}
    </div>
  );
};

export default PresetSelector;
