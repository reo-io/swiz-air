
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface ControllerTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const ControllerTabs: React.FC<ControllerTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tabButton, activeTab === 'presets' ? styles.activeTab : styles.inactiveTab]}
        onPress={() => onTabChange('presets')}
      >
        <Text style={[styles.tabText, activeTab === 'presets' ? styles.activeText : styles.inactiveText]}>
          Presets
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabButton, activeTab === 'manual' ? styles.activeTab : styles.inactiveTab]}
        onPress={() => onTabChange('manual')}
      >
        <Text style={[styles.tabText, activeTab === 'manual' ? styles.activeText : styles.inactiveText]}>
          Manual
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    marginBottom: 24,
    paddingBottom: 4,
  },
  tabButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  tabText: {
    fontSize: 16,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#FFD700',
  },
  inactiveTab: {},
  activeText: {
    color: '#FFFFFF',
  },
  inactiveText: {
    color: '#999999',
  },
});

export default ControllerTabs;
