import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/mainscreen';
import RegisterScreen from './screens/registerscreen';


export default function App() {
  return (
    <View style={styles.screen}>
      <RegisterScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
