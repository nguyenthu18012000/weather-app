import React from "react";
import { View } from "react-native";
import { style } from "./styles";
import Header from "./views/Header";
import TodayWeather from "./views/TodayWeather";
import WeatherInDay from "./views/WeatherInDay";

type Props = {
  navigation: any;
};

const HomeComponent = ({ navigation }: Props) => {
    return (
        <View style={style.HomeWeather}>
            <Header />
            <TodayWeather />
            <WeatherInDay navigation={navigation} />
        </View>
    );
}

export default HomeComponent;
