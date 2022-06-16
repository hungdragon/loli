import React from 'react';
import {StyleSheet, Text} from 'react-native';
import AppText from '../../components/text/AppText';
import AppView from '../../components/view/AppView';
const DashboardTable: React.FC = () => {
  return (
    <AppView style={styles.container}>
      <AppView style={styles.containerWrap}>
        <AppView style={styles.header}>
          <AppView style={styles.th}>
            <Text style={styles.txtTh}>{'#CodeID'}</Text>
          </AppView>
          <AppView style={styles.th}>
            <Text style={styles.txtTh}>{'Khách hàng'}</Text>
          </AppView>
          <AppView style={styles.th}>
            <Text style={styles.txtTh}>{'Ngày đặt'}</Text>
          </AppView>
          <AppView style={styles.th}>
            <Text style={styles.txtTh}>{'Trạng thái'}</Text>
          </AppView>
          <AppView style={styles.th}>
            <Text style={styles.txtTh}>{'Tổng tiền'}</Text>
          </AppView>
        </AppView>
        <AppView style={styles.form}>
          <AppView style={styles.Item}>
            <AppView style={styles.col}>
              <AppText style={{marginLeft: 10}}>{'#12321'}</AppText>
            </AppView>
            <AppView style={styles.col}>
              <AppText>{'Jony Dane'}</AppText>
            </AppView>
            <AppView style={styles.col}>
              <AppText>{'20/11/2022'}</AppText>
              <AppText>{'19:00-20:00'}</AppText>
            </AppView>
            <AppView style={[styles.col, {width: '20%'}]}>
              <Text
                style={{marginLeft: 10, fontWeight: 'bold', color: 'purple'}}>
                {'Payed'}
              </Text>
            </AppView>
            <AppView style={styles.col}>
              <Text
                style={{
                  color: 'green',
                  textAlign: 'center',
                  marginStart: 5,
                  fontWeight: 'bold',
                }}>
                {'560.000'}
              </Text>
            </AppView>
          </AppView>
          <AppView style={styles.Item}>
            <AppView style={styles.col}>
              <AppText style={{marginLeft: 10}}>{'#12321'}</AppText>
            </AppView>
            <AppView style={styles.col}>
              <AppText>{'Jony Dane'}</AppText>
            </AppView>
            <AppView style={styles.col}>
              <AppText>{'20/11/2022'}</AppText>
              <AppText>{'19:00-20:00'}</AppText>
            </AppView>
            <AppView style={[styles.col, {width: '20%'}]}>
              <Text
                style={{marginLeft: 10, fontWeight: 'bold', color: 'purple'}}>
                {'Payed'}
              </Text>
            </AppView>
            <AppView style={styles.col}>
              <Text
                style={{
                  color: 'green',
                  textAlign: 'center',
                  marginStart: 5,
                  fontWeight: 'bold',
                }}>
                {'560.000'}
              </Text>
            </AppView>
          </AppView>
        </AppView>
      </AppView>
    </AppView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  containerWrap: {
    padding: 10,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //backgroundColor: 'blue',
    padding: 10,
  },

  form: {
    flex: 1,
    // backgroundColor: 'purple',
    paddingTop: 10,
    //backgroundColor: '#e5e5e5',
  },
  Item: {
    flexDirection: 'row',
    backgroundColor: '#E6E6FA',
    marginVertical: 5,
    borderRadius: 3,
    paddingVertical: 5,
  },
  th: {
    width: '22%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  txtTh: {
    fontWeight: 'bold',
    color: 'black',
  },
  col: {
    width: '22%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    // marginLeft: 1
  },
});
export default DashboardTable;
