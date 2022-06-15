import * as React from 'react';
import {Image, StyleSheet} from 'react-native';
import AppText from '../../components/text/AppText';
import AppView from '../../components/view/AppView';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import image from '../../assets/icons';
import DashboardTable from './dashboardTable';

const Dashboard: React.FC = () => {
  return (
    <AppView style={styles.container}>
      <AppView style={styles.section}>
        <AppView style={styles.blockItem}>
          <AppView style={{padding: 10}}>
            <AppView
              style={{
                padding: 10,
                justifyContent: 'center',

                //  backgroundColor:'red'
              }}>
              <AppView
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignContent: 'center',
                }}>
                <MaterialIcons
                  name="attach-money"
                  size={20}
                  style={{
                    backgroundColor: '#e5e5e5',
                    padding: 5,
                    color: 'green',
                    borderRadius: 5,
                  }}
                />
                {/* <Image source={image.IC_SAVE_MONEY} style={{backgroundColor:'#e5e5e5',padding:10,width:50,height:50}} /> */}
                <Entypo
                  name="line-graph"
                  size={20}
                  style={{color: '#00BFFF', padding: 5}}
                />
              </AppView>
            </AppView>
            <AppView
              style={{
                // padding: 15,
                borderBottomColor: '#e5e5e5',
                borderBottomWidth: 0.5,
                justifyContent: 'center',
              }}>
              <AppText style={{fontSize: 16, color: 'grey'}}>Doanh thu</AppText>
              <AppText style={styles.txtTotal}>+ 1.900.000</AppText>
            </AppView>
            <AppView
              style={{
                padding: 5,

                justifyContent: 'center',
                // backgroundColor:'pink'
              }}>
              <AppText style={{fontSize: 14}}>Hôm nay</AppText>
            </AppView>
          </AppView>
        </AppView>
      </AppView>
      <AppView style={{flex: 1, flexDirection: 'row'}}>
      <DashboardTable />
        <AppView style={{flex: 0.5, backgroundColor: 'green'}} />
      </AppView>
    </AppView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  backgroundColor:'red',
    padding: 40,
  },
  section: {
    flex: 0.45,
    //  backgroundColor:"green",
    flexDirection: 'row',
  },
  blockItem: {
    width: '23%',
    backgroundColor: '#FFF',
    margin: 10,
    borderRadius: 5,
    elevation: 5,
    height: 150,
  },
  txtTotal: {
    fontSize: 20,
    padding: 5,
    color: 'green',
    fontWeight: 'bold',
  },
});
export default Dashboard;
