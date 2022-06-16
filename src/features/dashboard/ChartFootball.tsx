// import ItemDescription from 'features/dashboard/components/ItemDescription';
import React from 'react';
import _ from 'lodash';
import {
  FlatList,
  //  FlatList,
  Image,
  ImageSourcePropType,
  processColor,
  StyleSheet,
} from 'react-native';
import image from '../../assets/icons';

import AppText from '../../components/text/AppText';
import AppView from '../../components/view/AppView';
import AppPieChart from '../chart/AppPieChart';
import ItemDescription from './ItemDescription';
export const convertString: <T>(data: T) => string = data => {
  return _.toString(data);
};
const ChartFootball: React.FC = () => {
  const lstDataDesc = [
    {
      color: '#FFA95A',
      label: 'Vừa',
      value: 8,
    },
    {
      color: '#5E81F4',
      label: 'Doanh Thu',
      value: 26,
    },
    {
      color: '#58CF8D',
      label: 'Số trận bóng',
      value: 66,
    },
  ];

  const lstDataChart = [
    {
      color: '#FFA95A',
      label: 'So sánh',
      value: 8,
    },
    {
      color: '#5E81F4',
      label: 'Doanh Thu',
      value: 24,
    },
    {
      color: '#58CF8D',
      label: 'Số trận đấu',
      value: 60,
    },
  ];
  const lstColorChart = [
    processColor('#58CF8D'),
    processColor('#FFA95A'),
    processColor('#5E81F4'),
  ];
  const renderItem = (item: any) => {
    return <ItemDescription item={item} />;
  };

  return (
    <AppView style={styles.block}>
      {/* <AppView style={styles.titleRow}>
        <AppText boldOrLight="bold" style={styles.title}>
          Doanh thu
        </AppText>
        <Image
          style={styles.chartIcon}
          source={image.CHECK_GREEN as ImageSourcePropType}
        />
      </AppView> */}
      {/* <AppView style={styles.hr} /> */}
      <AppView style={styles.viewChart}>
        <AppPieChart values={lstDataChart} colors={lstColorChart} />
      </AppView>
      <AppView style={styles.bottom}>
        <FlatList
          data={lstDataDesc}
          keyExtractor={(item, index) => convertString(index)}
          renderItem={({item}) => renderItem(item as any)}
        />
      </AppView>
    </AppView>
  );
};

export default ChartFootball;

const styles = StyleSheet.create({
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  hr: {
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginBottom: 30,
  },
  block: {
    backgroundColor: 'white',
    borderRadius: 10,
    // height: 525,
    // width: 440,
  },
  title: {
    fontSize: 20,
  },
  chartIcon: {},
  bottom: {
    marginTop: 6,
    height: 'auto',
  },
  viewChart: {
    height: 200,
    marginBottom: 20,
  },
});
