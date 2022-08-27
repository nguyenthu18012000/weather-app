import React from "react";
import { Button, Text, View } from "react-native";

type Props = {navigation: any};

const Test = ({ navigation }: Props) => {
    return (
        <View>
            <Text>testCmponent</Text>
            <Button
            title='go to test'
            onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}

export default Test;