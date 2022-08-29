import { View, Text, Image } from "react-native";
import { styles } from './styles'
import React from "react";
export default function Tommorow() {
    return (
        <View style={styles.tomorow}>
            <View style={styles.tomorowHeader}>
                <Text style={{ fontSize: 16, paddingTop: 10,fontWeight:"600" }}>Tommorow</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 16, paddingTop: 10 }}>22*</Text>
                    <Image
                        source={require("../../../assets/iconWeather/sunCloudy.png")}
                        style={{ width: 50, height: 50 }}
                    />
                </View>
            </View>

            <View style={styles.tomorowDetail}>
                <View style={styles.tomorowDetailItem}>
                    <View style={styles.tommorowIcon}>
                        <Image
                            source={require("../../../assets/iconWeather/umbrella.png")}
                            style={{ width: 25, height: 25 }}
                        />
                    </View>
                    <Text style={styles.textTommorow}>1 cm</Text>
                </View>
                <View style={styles.tomorowDetailItem}>
                    <View style={styles.tommorowIcon}>
                        <Image
                            source={require("../../../assets/iconWeather/wind.png")}
                            style={{ width: 25, height: 25 }}
                        />
                    </View>
                    <Text style={styles.textTommorow}>15 km/h</Text>
                </View>
                <View style={styles.tomorowDetailItem}>
                    <View style={styles.tommorowIcon}>
                        <Image
                            source={require("../../../assets/iconWeather/humidity.png")}
                            style={{ width: 25, height: 25 }}
                        />
                    </View>
                    <Text style={styles.textTommorow}>  50 %</Text>
                </View>

            </View>

        </View>
    );
}
