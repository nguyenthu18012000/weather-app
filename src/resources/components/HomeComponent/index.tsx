import React, { useEffect, useState } from "react";
import { View } from "react-native";
import WeatherServices from "../../services/weather";
import { style } from "./styles";
import Header from "./views/Header";
import TodayWeather from "./views/TodayWeather";
import WeatherInDay from "./views/WeatherInDay";

type Props = {
  navigation: any;
};

const HomeComponent = ({ navigation }: Props) => {
    const [dataCurrentWeather, setDataCurrentWeather] = useState<any>();
    const [dataTodayWeather, setDataTodayWeather] = useState<any>({});
    const [dataTomorrowWeather, setDataTomorrowWeather] = useState<any>({});
    const [dataNext7DaysWeather, setDataNext7DaysWeather] = useState<any[]>([]);
    const getDataWeather = () => {
        WeatherServices.getDataWeather(
            {
                location: 'HaNoi' || 'HaNoi',
                days: 8 || 8,
            },
            (data) => {
                setDataCurrentWeather(data?.data?.current);
                setDataTodayWeather(data?.data?.forecast?.forecastday[0]);
                setDataTomorrowWeather(data?.data?.forecast?.forecastday[1]);
                const next7Days = data?.data?.forecast?.forecastday.slice(1);
                setDataNext7DaysWeather(next7Days);
            },
            () => { }
        )
    }

    useEffect(() => {
        getDataWeather();
    },[])
    
    return (
        <View style={style.HomeWeather}>
            <Header />
            <TodayWeather currentWeather={dataCurrentWeather} />
            <WeatherInDay dataNext7DaysWeather={dataNext7DaysWeather} navigation={navigation} />
        </View>
    );
}

export default HomeComponent;
