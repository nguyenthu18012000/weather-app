import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import { styleTodayWeather } from './styles';

type Props = {
  currentWeather: any;
}
const TodayWeather = ({ currentWeather }: Props) => {

  const getDay = () => {
    const today = new Date();
    // console.log(today)
    return 'Tue, Jun 32';
  }

  return (
    <View>  
      <View style={styleTodayWeather.todayWeatherHeader}>
        <Text style={styleTodayWeather.cityName}>Stockholm, Sweden</Text>
      </View>
      <View style={styleTodayWeather.todayWeatherBody}>
        <Text style={styleTodayWeather.date}>{getDay()}</Text>
        <View>
          <View style={styleTodayWeather.todayWeather}>
            <Image
              source={{uri: `https:${currentWeather?.condition?.icon}`}}
              style={styleTodayWeather.image}
            />
            <View style={styleTodayWeather.tempWea}>
              <Text style={styleTodayWeather.temperature}>{currentWeather?.temp_c}°C</Text>
              <Text style={styleTodayWeather.weather}>{currentWeather?.condition?.text}</Text>
            </View>
          </View>
        </View>
        <View style={styleTodayWeather.someContent}>
            <View style={styleTodayWeather.todayInforItem}>
              <View style={styleTodayWeather.todayInforImageTitle}>
                <View style={styleTodayWeather.todayInforImageBackground}>
                  <Image
                    source={require('../../../../../../assets/iconWeather/umbrella.png')}
                    style={styleTodayWeather.todayInforImage}
                  />
                </View>
                <Text style={styleTodayWeather.title}>RainFail</Text>
              </View>
              <Text style={styleTodayWeather.content}>{currentWeather?.precip_mm} mm</Text>
            </View>
            <View style={styleTodayWeather.todayInforItem}>
              <View style={styleTodayWeather.todayInforImageTitle}>
                <View style={styleTodayWeather.todayInforImageBackground}>
                  <Image
                    source={require('../../../../../../assets/iconWeather/wind.png')}
                    style={styleTodayWeather.todayInforImage}
                  />
                </View>
                <Text style={styleTodayWeather.title}>Wind</Text>
              </View>
              <Text style={styleTodayWeather.content}>{currentWeather?.wind_kph} km/h</Text>
            </View>
            <View style={styleTodayWeather.todayInforItem}>
              <View style={styleTodayWeather.todayInforImageTitle}>
                <View style={styleTodayWeather.todayInforImageBackground}>
                  <Image
                    source={require('../../../../../../assets/iconWeather/humidity.png')}
                    style={styleTodayWeather.todayInforImage}
                  />
                </View>
                <Text style={styleTodayWeather.title}>Humidity</Text>
              </View>
              <Text style={styleTodayWeather.content}>{currentWeather?.humidity}%</Text>
            </View>
        </View>
      </View>
    </View>
  );
}

export default TodayWeather;
