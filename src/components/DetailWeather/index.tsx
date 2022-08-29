import { View, Text, StyleSheet, Image } from "react-native";
import { styles } from './styles'
import React from "react";
import Tommorow from "./tommorow";
import WeekWeather from "./weekWeather";
export default function DetailWeather() {
  return (
    <View style={styles.DetailWeather}>
      <View style={styles.header}>
        <Text></Text>
        <Text style={styles.textTitle}>Next 7 Days</Text>
        <Text></Text>
      </View>
      <Tommorow/>
      <WeekWeather/>
    </View>
  );
}
