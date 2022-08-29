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
export default function WeekWeather() {
    const [dataWeekWeather,setDataWeekWeather]=useState<any[]>(data)

    return (
        <View style={styles.weekWeather}>
            {dataWeekWeather.map((el:any,index:number)=>(
   
    <View style={[styles.weekWeatherItem,{ backgroundColor:colors[index]}]} key={index}>
                <Text style={styles.weekWeatherItemTitle}>Thursday</Text>
                <View style={styles.tomorowDetailItemIcon}>
                    <Text style={styles.tomorowDetailItemIconTitle}>20 *</Text>
                    <Image
                        source={require("../../../assets/iconWeather/sun.png")}
                        style={{ width: 30, height: 30 }}
                    />
                </View>
            </View>
            ))}
        </View>
    )
}
