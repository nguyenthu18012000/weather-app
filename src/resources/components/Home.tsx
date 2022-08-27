import React from "react"
import { Button, Text, View } from "react-native"

type Props = {navigation: any};

const Home = ({ navigation }: Props) => {
    return (
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
            <Text>homeComponent</Text>
            <Button
            title='go to test'
            onPress={() => navigation.navigate('Test')}
            />
        </View>
    );
}

export default Home;