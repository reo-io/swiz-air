
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface PresetSelectorProps {
  activePreset: number;
  onPresetChange: (preset: number) => void;
}

const PresetSelector: React.FC<PresetSelectorProps> = ({ activePreset, onPresetChange }) => {
  const presets = [3, 2, 1];

  return (
    <View style={styles.container}>
      {presets.map((preset) => (
        <TouchableOpacity
          key={preset}
          style={[styles.presetButton, activePreset === preset ? styles.activePreset : styles.inactivePreset]}
          onPress={() => onPresetChange(preset)}
        >
          <Text style={[styles.presetText, activePreset === preset ? styles.activeText : styles.inactiveText]}>
            {preset}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  presetButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  presetText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  activePreset: {
    backgroundColor: '#FFD700',
  },
  inactivePreset: {
    backgroundColor: '#333333',
  },
  activeText: {
    color: '#000000',
  },
  inactiveText: {
    color: '#FFFFFF',
  },
});

export default PresetSelector;
