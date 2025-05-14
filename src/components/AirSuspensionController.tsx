
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import ControllerTabs from "./ControllerTabs";
import PresetSelector from "./PresetSelector";
import CornerControl from "./CornerControl";
import PressureGauge from "./PressureGauge";
import { Settings, Menu } from "lucide-react-native";

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
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.spacer}></View>
        <ControllerTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Settings color="#999999" size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Menu color="#FFD700" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Main content */}
      <View style={styles.content}>
        {/* Left column - presets */}
        <View style={styles.presetsColumn}>
          <PresetSelector activePreset={activePreset} onPresetChange={setActivePreset} />
        </View>
        
        {/* Right column - controls */}
        <View style={styles.controlsColumn}>
          {/* Upper controls (LF / RF) */}
          <View style={styles.cornerRow}>
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
          </View>
          
          {/* Lower controls (LR / RR) */}
          <View style={styles.cornerRow}>
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
          </View>
        </View>
      </View>
      
      {/* Bottom - tank pressure */}
      <View style={styles.gaugeContainer}>
        <PressureGauge value={pressure} maxValue={220} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  spacer: {
    width: 32,
  },
  iconContainer: {
    flexDirection: "row",
    gap: 16,
  },
  iconButton: {
    padding: 4,
  },
  content: {
    flex: 1,
    flexDirection: "row",
  },
  presetsColumn: {
    width: "25%",
    alignItems: "center",
  },
  controlsColumn: {
    width: "75%",
  },
  cornerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  gaugeContainer: {
    marginTop: 16,
  },
});

export default AirSuspensionController;
