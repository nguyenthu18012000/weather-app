import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import DetailWeather from './src/components/DetailWeather';
export default function App() {
  return (
    <LinearGradient style={styles.linear} 
    colors={['#e69042','#e69042','#fcd2b3',"#fec283", ]} start={{x:1,y:1}}>
      <View style={styles.container}>
        <DetailWeather />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingLeft: 30,
    paddingRight: 20,
    height: "100%"
  },
  linear: {
    flex: 1,
  }
});
