
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

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
    <View style={styles.container}>
      <View style={styles.gaugeContainer}>
        <Svg width={100} height={100} viewBox="0 0 100 100">
          {/* Background arc */}
          <Path
            d="M10,50 A40,40 0 1,1 90,50"
            fill="none"
            stroke="#333333"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Value arc */}
          <Path
            d="M10,50 A40,40 0 1,1 90,50"
            fill="none"
            stroke="#FFD700"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={`${arcLength} ${circumference}`}
            strokeDashoffset={dashOffset}
          />
        </Svg>
        <Text style={styles.valueText}>{value}</Text>
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.unitText}>PSI</Text>
        <Text style={styles.tankText}>TANK</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 16,
  },
  gaugeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  valueText: {
    position: 'absolute',
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  labelContainer: {
    alignItems: 'center',
    marginTop: 8,
  },
  unitText: {
    color: '#999999',
    fontSize: 14,
  },
  tankText: {
    color: '#999999',
    fontSize: 14,
  },
});

export default PressureGauge;
