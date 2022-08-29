import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import { styleTodayWeather } from './styles';

const TodayWeather = () => {

  const itemInfo =  [{
    imageSrc: '../../../../../../assets/iconWeather/wind.png',
    name: 'wind',
    value: '111',
  },
  {
    imageSrc: '../../../../../../assets/iconWeather/wind.png',
    name: 'wind',
    value: '111',
  },
  {
    imageSrc: '../../../../../../assets/iconWeather/wind.png',
    name: 'wind',
    value: '111',
  }];
  return (
    <View>  
      <View style={styleTodayWeather.todayWeatherHeader}>
        <Text style={styleTodayWeather.cityName}>Stockholm, Sweden</Text>
      </View>
      <View style={styleTodayWeather.todayWeatherBody}>
        <Text style={styleTodayWeather.date}>Tue, Jun 30</Text>
        <View >
          <View style={styleTodayWeather.todayWeather}>
            <Image
              source={require('../../../../../../assets/iconWeather/cloudSunRain.png')}
              style={styleTodayWeather.image}
            />
            <View style={styleTodayWeather.tempWea}>
              <Text style={styleTodayWeather.temperature}>19°C</Text>
              <Text style={styleTodayWeather.weather}>Rainy</Text>
            </View>
          </View>
        </View>
        <View style={styleTodayWeather.someContent}>
          {itemInfo.map((item: any, key: number) => (
            <View key={key++} style={styleTodayWeather.todayInforItem}>
              <View style={styleTodayWeather.todayInforImageTitle}>
                <View style={styleTodayWeather.todayInforImageBackground}>
                  <Image
                    source={require('../../../../../../assets/iconWeather/wind.png')}
                    style={styleTodayWeather.todayInforImage}
                  />
                </View>
                <Text style={styleTodayWeather.title}>wind1</Text>
              </View>
              <Text style={styleTodayWeather.content}>wind</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

export default TodayWeather;
