import React from 'react';
import { Text } from 'react-native';
import Layout from '../../components/common/main-layout';
import DetailWeather from '../../components/DetailComponent';

type Props = {
  route: any;
}
const Detail = ({ route }: Props) => {
  const { dataNext7DaysWeather } = route.params;

  return (
    <Layout>
        <DetailWeather />
    </Layout>
  );
}

export default Detail;
