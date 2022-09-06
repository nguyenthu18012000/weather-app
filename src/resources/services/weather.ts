import { sendGet } from "../helpers/axios";

const getDataWeather = async (
    params: any,
    onSuccess = (data: any) => { },
    onError = () => { }
) => {
    try {
        const dataWeatherPath = `&q=${params.location}&days=${params.days}&aqi=no&alerts=no`;
        const data = await sendGet(dataWeatherPath);
        if (data) {
            onSuccess(data);
        }
    } catch (error) {

    }
}

const WeatherServices = {
    getDataWeather,
}

export default WeatherServices;
