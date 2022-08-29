import { Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
const data =[
    {
        id:1,
    },
    {
        id:2,
    },
    {
        id:3,
    },
    {
        id:4,
    },
    {
        id:5,
    },
    {
        id:6,
    },
]
const colors=[
   "#faaf80","#faaf80","#fdbe8a","#ffd4ae","#ffd4ae","#ffd4ae"
]
export default function WeekWeather(props:any) {
    const {data}=props
    const [dataWeekWeather,setDataWeekWeather]=useState<any[]>(data)
    const getDayWeek =(day:string)=>{
        const date = new Date(day)
        const nowDay = date.getDay()
        switch(nowDay){
            case 1:
                return 'MonDay';
            case 2:
                return 'Tuesday';
            case 3:
                return 'Wednesday';
            case 4:
                return 'Thusday';
            case 5:
                return 'Friday';
            case 6:
                return 'Saturday';
            default:
                return 'Sunday';
            }
    }
    return (
        <View style={styles.weekWeather}>
            {data.map((el:any,index:number)=>(
   
    <View style={[styles.weekWeatherItem,{ backgroundColor:colors[index]}]} key={index}>
                <Text style={styles.weekWeatherItemTitle}>{getDayWeek(el.date)}</Text>
                <View style={styles.tomorowDetailItemIcon}>
                    <Text style={styles.tomorowDetailItemIconTitle}>{el.temp.toFixed(0)} °C</Text>
                    <Image
                        source={{uri:`https:${el.icon}`}}
                        style={{ width: 30, height: 30 }}
                    />
                </View>
            </View>
            ))}
        </View>
    )
}
