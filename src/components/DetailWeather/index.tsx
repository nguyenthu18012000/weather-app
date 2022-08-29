import { View, Text, StyleSheet, Image } from "react-native";
import { styles } from './styles'
import React, { useEffect, useState } from "react";
import Tommorow from "./tommorow";
import WeekWeather from "./weekWeather";
import {sendGet} from '../../resources/helpers/axios'
export default function DetailWeather() {
    const [dataWeatherWeek,setDataWeatherWeek]= useState<any>()
    const [dataWeatherCurrent,setDataWeatherCurrent]= useState<any>({
      location:{
        country:0,
        name:0
      },
      current:{
        temp:0,
        text:0,
        icon:0,
        wind:0,
        humidity:0,
        uv:0
      }
    })
    const getWeatherWeek = async ()=>{
      try{
        const res = await sendGet("http://api.weatherapi.com/v1/forecast.json?key=ed8f0460dac348aa85e33105222908&q=HaNoi&days=7&aqi=no&alerts=no");
        if(res) {
          const {location,current,forecast}= res.data
          const {forecastday}=forecast
          const weatherWeek = forecastday.map((el:any)=>{
            return {
              date:el.date,
              temp:el.day.maxtemp_c,
              icon:el.day.condition.icon
            }
          })
          const data ={
            location:{
              country:location.country,
              name:location.name
            },
            current:{
              temp:current.temp_c,
              text:current?.condition?.text,
              icon:current?.condition?.icon,
              wind:current?.wind_kph,
              humidity:current?.humidity,
              uv:current?.uv
            }
          }
          setDataWeatherWeek(weatherWeek)
          setDataWeatherCurrent(data)
        }
      }catch(e){
        console.log(e)
      }
    }

  useEffect(()=>{
    getWeatherWeek()
  },[])
  return (
    <View style={styles.DetailWeather}>
      <View style={styles.header}>
        <Text></Text>
        <Text style={styles.textTitle}>Next 7 Days</Text>
        <Text></Text>
      </View>
      <Tommorow data={dataWeatherCurrent} />
      <WeekWeather data ={dataWeatherWeek}/>
    </View>
  );
}
