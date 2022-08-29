import { View, Text, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { styleWeatherInDay } from './styles';

type Props = {
  navigation: any;
};

const WeatherInDay = ({ navigation }: Props) => {
  const s = [1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12];
  return (
    <View>
      <View style={styleWeatherInDay.title}>
        <View style={styleWeatherInDay.todayTomorrow}>
          <Text style={styleWeatherInDay.textTitle}>Today</Text>
          <Text style={styleWeatherInDay.textTitle}>Tomorrow</Text>
        </View>
        <Text style={styleWeatherInDay.textTitle} onPress={() => navigation.navigate('Detail')}>Next 7 days</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {s.map((hour: any, key: number) => (
          <View style={styleWeatherInDay.hourWeather} key={key} >
            <View style={styleWeatherInDay.hourWeatherItem}>
              <Text>hour</Text>
            </View>
            <View style={styleWeatherInDay.hourWeatherItem}>
              <Image 
                source={require('../../../../../../assets/iconWeather/sun.png')}
                style={{ width: 30, height: 30 }}
              />
            </View>
            <View style={styleWeatherInDay.hourWeatherItem}>
              <Text>20°</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
    );
}

export default WeatherInDay;
