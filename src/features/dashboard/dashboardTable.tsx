import React from 'react';
import {StyleSheet} from 'react-native';
import AppText from '../../components/text/AppText';
import AppView from '../../components/view/AppView';
const DashboardTable: React.FC = () => {
  return (
    <AppView style={styles.container}>
      <AppView style={styles.containerWrap}>
        <AppView style={styles.header}>
          <AppView style={styles.th}>
          <AppText>{'#CodeID'}</AppText>
          </AppView>
          <AppView style={styles.th}>
          <AppText>{'Hoten Customer'}</AppText>
          </AppView>
          <AppView style={styles.th}>
          <AppText>{'Ngay dat'}</AppText>
          </AppView>
          <AppView style={styles.th}>
          <AppText>{'Payed'}</AppText>
          </AppView>
          <AppView style={styles.th}>
          <AppText>{'Total'}</AppText>
          </AppView>
        </AppView>
        <AppView style={styles.form}>
          <AppView style={styles.Item}>
            <AppView style={styles.col}>
            <AppText>{'#12321'}</AppText>
            </AppView>
            <AppView style={styles.col}>
            <AppText>{'Jony Dane'}</AppText>
            </AppView>
            <AppView style={styles.col}>
              <AppText>{'20/11/2022'}</AppText>
              <AppText>{'19:00-20:00'}</AppText>
            </AppView>
            <AppView style={[styles.col,{width:'20%'}]}>
            <AppText>{'Payed'}</AppText>
            </AppView>
            <AppView style={styles.col}>
            <AppText style={{color: 'green',textAlign: 'center',marginStart:5}}>{'560.000'}</AppText>
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
    width:'100%',
    height:'100%',
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#E6E6FA',
    padding: 10,
  },

  form: {
    flex: 1,
   // backgroundColor: 'purple',
   paddingTop:10,
   backgroundColor:'#e5e5e5'
  },
  Item: {
    flexDirection: 'row',
    backgroundColor: 'green ',
    paddingHorizontal:10
  
  },
  th:{
    width:'22%',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  col:{
    width:'22%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    
  }
});
export default DashboardTable;
