import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Detail from './screens/Detail';

const Route = () => {
  const [dataNext7Days, setDataNext7Days] = useState<any[]>([]);
  const Stack = createNativeStackNavigator();

  const getDataNext7Days = (data: any[]) => {
    setDataNext7Days(data);
  }

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          {/* <Stack.Screen name="Detail" options={{ headerShown: false }}>
            {(dataNext7DaysWeather) => <Detail someData={dataNext7DaysWeather}/>}
          </Stack.Screen> */}
          <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Route;
