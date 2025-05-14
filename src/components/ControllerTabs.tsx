
import React from "react";

interface ControllerTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const ControllerTabs: React.FC<ControllerTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex justify-center border-b border-suspension-gray mb-6 pb-1">
      <button
        className={`tab-button ${activeTab === 'presets' ? 'active' : 'inactive'}`}
        onClick={() => onTabChange('presets')}
      >
        Presets
      </button>
      <button
        className={`tab-button ${activeTab === 'manual' ? 'active' : 'inactive'}`}
        onClick={() => onTabChange('manual')}
      >
        Manual
      </button>
    </div>
  );
};

export default ControllerTabs;
