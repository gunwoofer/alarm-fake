import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AlarmAdder } from './src/components/alarmAdder';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.ts to start working on your app!</Text>
      <StatusBar style="auto" />

      <AlarmAdder />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
