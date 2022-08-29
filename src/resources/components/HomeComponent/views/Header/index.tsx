import { View, Text } from 'react-native';
import React from 'react';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconEnt from 'react-native-vector-icons/Entypo';
import { stylesHeader } from './styles';

const Header = () => {
  return (
    <View style={stylesHeader.header}>
      <IconAnt style={stylesHeader.item} name='search1' />
      <Text style={stylesHeader.item}>Weather-app</Text>
      <IconEnt style={stylesHeader.item} name='menu' />
    </View>
  );
}

export default Header;
