import React, { useEffect, useState, useRef } from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from "react-native";
import WeatherServices from "../../services/weather";
import Loading from "../common/loading";
import { style } from "./styles";
import TodayWeather from "./views/TodayWeather";
import WeatherInDay from "./views/WeatherInDay";
import IconEnt from 'react-native-vector-icons/Entypo';

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
    const drawer = useRef<any>(null)
    const navigationView = () => (
        <Text>ha</Text>
    )
    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition="left"
            renderNavigationView={navigationView}
        >
            <View style={style.HomeWeather}>
                <View style={style.head}>
                    <IconEnt name='menu' style={style.icon} onPress={() => {
                        drawer.current.openDrawer()
                        console.log(1)
                    }} />
                    <Text style={style.item}>Weather app</Text>
                    <Text></Text>
                </View>
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
        </DrawerLayoutAndroid>
    );
}

export default HomeComponent;
