import React, { useEffect, useState } from "react";
import { View } from "react-native";
import WeatherServices from "../../services/weather";
import Loading from "../common/loading";
import { style } from "./styles";
import Header from "./views/Header";
import TodayWeather from "./views/TodayWeather";
import WeatherInDay from "./views/WeatherInDay";

type Props = {
    navigation: any;
};

const HomeComponent = ({ navigation }: Props) => {
    const [location, setLocation] = useState<any>();
    const [dataCurrentWeather, setDataCurrentWeather] = useState<any>();
    const [dataTodayWeather, setDataTodayWeather] = useState<any>({});
    const [dataTomorrowWeather, setDataTomorrowWeather] = useState<any>({});
    const [dataNext7DaysWeather, setDataNext7DaysWeather] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getDataWeather = () => {
        WeatherServices.getDataWeather(
            {
                location: 'HaNoi' || 'HaNoi',
                days: 8 || 8,
            },
            (data) => {
                setLocation(data?.data?.location);
                setDataCurrentWeather(data?.data?.current);
                setDataTodayWeather(data?.data?.forecast?.forecastday[0]);
                setDataTomorrowWeather(data?.data?.forecast?.forecastday[1]);
                const next7Days = data?.data?.forecast?.forecastday.slice(1);
                setDataNext7DaysWeather(next7Days);
                setIsLoading(false);
            },
            () => { }
        )
    }

    useEffect(() => {
        getDataWeather();
    }, [])

    return (
        <View style={style.HomeWeather}>
            <Header />
            {
                isLoading
                ? <Loading />
                : <>
                    <TodayWeather location={location} currentWeather={dataCurrentWeather} />
                    <WeatherInDay
                        now={location?.localtime}
                        dataTodayWeather={dataTodayWeather}
                        dataTomorrowWeather={dataTomorrowWeather}
                        dataNext7DaysWeather={dataNext7DaysWeather}
                        navigation={navigation}
                    />
                </>
            }
        </View>
    );
}

export default HomeComponent;
