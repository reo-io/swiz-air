
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ArrowUp, ArrowDown } from "lucide-react-native";

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
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrowButton} onPress={onIncrease}>
        <ArrowUp size={24} color="#FFFFFF" />
      </TouchableOpacity>
      <View style={styles.valueContainer}>
        <Text style={styles.valueText}>{value.toFixed(1)}</Text>
        <Text style={styles.labelText}>{label} %</Text>
      </View>
      <TouchableOpacity style={styles.arrowButton} onPress={onDecrease}>
        <ArrowDown size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  arrowButton: {
    padding: 8,
  },
  valueContainer: {
    alignItems: 'center',
  },
  valueText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  labelText: {
    fontSize: 14,
    color: '#999999',
  },
});

export default CornerControl;
