
import React, { useState, useEffect } from "react";
import ControllerTabs from "./ControllerTabs";
import PresetSelector from "./PresetSelector";
import CornerControl from "./CornerControl";
import PressureGauge from "./PressureGauge";
import { Settings, Menu } from "lucide-react";

const AirSuspensionController: React.FC = () => {
  const [activeTab, setActiveTab] = useState("presets");
  const [activePreset, setActivePreset] = useState(2);
  const [cornerValues, setCornerValues] = useState({
    lf: 50.5,
    rf: 50.5,
    lr: 38.1,
    rr: 38.1,
  });
  const [pressure, setPressure] = useState(182);
  
  // Update values based on preset changes
  useEffect(() => {
    if (activePreset === 1) {
      setCornerValues({
        lf: 30.0,
        rf: 30.0,
        lr: 30.0,
        rr: 30.0,
      });
    } else if (activePreset === 2) {
      setCornerValues({
        lf: 50.5,
        rf: 50.5,
        lr: 38.1,
        rr: 38.1,
      });
    } else if (activePreset === 3) {
      setCornerValues({
        lf: 75.0,
        rf: 75.0,
        lr: 70.0,
        rr: 70.0,
      });
    }
  }, [activePreset]);

  const handleCornerChange = (corner: keyof typeof cornerValues, change: number) => {
    // Only allow changes in manual mode
    if (activeTab === "manual") {
      setCornerValues(prev => ({
        ...prev,
        [corner]: Math.min(100, Math.max(0, prev[corner] + change)),
      }));
      // Simulate pressure change
      setPressure(prev => Math.max(0, Math.min(220, prev + (change > 0 ? -1 : 1))));
    }
  };

  return (
    <div className="bg-black text-white w-full max-w-md mx-auto h-full min-h-[600px] flex flex-col p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="w-8"></div> {/* Spacer for alignment */}
        <ControllerTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="flex gap-4">
          <Settings className="text-suspension-gray cursor-pointer hover:text-white transition-colors" size={24} />
          <Menu className="text-suspension-yellow cursor-pointer hover:text-white transition-colors" size={24} />
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex flex-1">
        {/* Left column - presets */}
        <div className="w-1/4 flex justify-center">
          <PresetSelector activePreset={activePreset} onPresetChange={setActivePreset} />
        </div>
        
        {/* Right column - controls */}
        <div className="w-3/4">
          {/* Upper controls (LF / RF) */}
          <div className="flex justify-between mb-8">
            <CornerControl
              label="LF"
              value={cornerValues.lf}
              onIncrease={() => handleCornerChange("lf", 0.5)}
              onDecrease={() => handleCornerChange("lf", -0.5)}
            />
            <CornerControl
              label="RF"
              value={cornerValues.rf}
              onIncrease={() => handleCornerChange("rf", 0.5)}
              onDecrease={() => handleCornerChange("rf", -0.5)}
            />
          </div>
          
          {/* Lower controls (LR / RR) */}
          <div className="flex justify-between">
            <CornerControl
              label="LR"
              value={cornerValues.lr}
              onIncrease={() => handleCornerChange("lr", 0.5)}
              onDecrease={() => handleCornerChange("lr", -0.5)}
            />
            <CornerControl
              label="RR"
              value={cornerValues.rr}
              onIncrease={() => handleCornerChange("rr", 0.5)}
              onDecrease={() => handleCornerChange("rr", -0.5)}
            />
          </div>
        </div>
      </div>
      
      {/* Bottom - tank pressure */}
      <div className="mt-4">
        <PressureGauge value={pressure} maxValue={220} />
      </div>
    </div>
  );
};

export default AirSuspensionController;
