
import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import AirSuspensionController from "./components/AirSuspensionController";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <View style={styles.content}>
        <AirSuspensionController />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  content: {
    flex: 1,
    padding: 16,
  },
});

export default App;
