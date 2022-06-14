import * as React from 'react';
import {Image, StyleSheet} from 'react-native';
import AppText from '../../components/text/AppText';
import AppView from '../../components/view/AppView';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import image from '../../assets/icons';

const Dashboard: React.FC = () => {
  return (
    <AppView style={styles.container}>
      <AppView style={styles.section}>
      <AppView style={styles.blockItem}>
          <AppView style={{flex: 1}}>
            <AppView
              style={{
                flex: 5,
                justifyContent: 'center',
                paddingHorizontal: 15,
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
                  size={30}
                  style={{
                    backgroundColor: '#e5e5e5',
                    padding: 10,
                    color: 'green',
                    borderRadius: 5,
                  }}
                />
                {/* <Image source={image.IC_SAVE_MONEY} style={{backgroundColor:'#e5e5e5',padding:10,width:50,height:50}} /> */}
                <Entypo
                  name="line-graph"
                  size={30}
                  style={{padding: 10, color: '#00BFFF'}}
                />
              </AppView>
            </AppView>
            <AppView
              style={{
                padding: 15,
                flex: 3,
                marginHorizontal: 10,
                borderBottomColor: '#e5e5e5',
                borderBottomWidth: 0.5,
                justifyContent: 'center',
              }}>
              <AppText style={{fontSize: 18, color: 'grey'}}>Doanh thu</AppText>
              <AppText style={styles.txtTotal}>+ 1.900.000</AppText>
            </AppView>
            <AppView
              style={{
                paddingHorizontal: 15,
                flex: 2,
                justifyContent: 'center',
                // backgroundColor:'pink'
              }}>
              <AppText style={{fontSize: 18}}>Hôm nay</AppText>
            </AppView>
          </AppView>
        </AppView>
        <AppView style={styles.blockItem}>
          <AppView style={{flex: 1}}>
            <AppView
              style={{
                flex: 5,
                justifyContent: 'center',
                paddingHorizontal: 15,
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
                  size={30}
                  style={{
                    backgroundColor: '#e5e5e5',
                    padding: 10,
                    color: 'green',
                    borderRadius: 5,
                  }}
                />
                {/* <Image source={image.IC_SAVE_MONEY} style={{backgroundColor:'#e5e5e5',padding:10,width:50,height:50}} /> */}
                <Entypo
                  name="line-graph"
                  size={30}
                  style={{padding: 10, color: '#00BFFF'}}
                />
              </AppView>
            </AppView>
            <AppView
              style={{
                padding: 15,
                flex: 3,
                marginHorizontal: 10,
                borderBottomColor: '#e5e5e5',
                borderBottomWidth: 0.5,
                justifyContent: 'center',
              }}>
              <AppText style={{fontSize: 18, color: 'grey'}}>Doanh thu</AppText>
              <AppText style={styles.txtTotal}>+ 1.900.000</AppText>
            </AppView>
            <AppView
              style={{
                paddingHorizontal: 15,
                flex: 2,
                justifyContent: 'center',
                // backgroundColor:'pink'
              }}>
              <AppText style={{fontSize: 18}}>Hôm nay</AppText>
            </AppView>
          </AppView>
        </AppView>
        <AppView style={styles.blockItem}>
          <AppView style={{flex: 1}}>
            <AppView
              style={{
                flex: 5,
                justifyContent: 'center',
                paddingHorizontal: 15,
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
                  size={30}
                  style={{
                    backgroundColor: '#e5e5e5',
                    padding: 10,
                    color: 'green',
                    borderRadius: 5,
                  }}
                />
                {/* <Image source={image.IC_SAVE_MONEY} style={{backgroundColor:'#e5e5e5',padding:10,width:50,height:50}} /> */}
                <Entypo
                  name="line-graph"
                  size={30}
                  style={{padding: 10, color: '#00BFFF'}}
                />
              </AppView>
            </AppView>
            <AppView
              style={{
                padding: 15,
                flex: 3,
                marginHorizontal: 10,
                borderBottomColor: '#e5e5e5',
                borderBottomWidth: 0.5,
                justifyContent: 'center',
              }}>
              <AppText style={{fontSize: 18, color: 'grey'}}>Doanh thu</AppText>
              <AppText style={styles.txtTotal}>+ 1.900.000</AppText>
            </AppView>
            <AppView
              style={{
                paddingHorizontal: 15,
                flex: 2,
                justifyContent: 'center',
                // backgroundColor:'pink'
              }}>
              <AppText style={{fontSize: 18}}>Hôm nay</AppText>
            </AppView>
          </AppView>
        </AppView>
        <AppView style={styles.blockItem}>
          <AppView style={{flex: 1}}>
            <AppView
              style={{
                flex: 5,
                justifyContent: 'center',
                paddingHorizontal: 15,
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
                  size={30}
                  style={{
                    backgroundColor: '#e5e5e5',
                    padding: 10,
                    color: 'green',
                    borderRadius: 5,
                  }}
                />
                {/* <Image source={image.IC_SAVE_MONEY} style={{backgroundColor:'#e5e5e5',padding:10,width:50,height:50}} /> */}
                <Entypo
                  name="line-graph"
                  size={30}
                  style={{padding: 10, color: '#00BFFF'}}
                />
              </AppView>
            </AppView>
            <AppView
              style={{
                padding: 15,
                flex: 3,
                marginHorizontal: 10,
                borderBottomColor: '#e5e5e5',
                borderBottomWidth: 0.5,
                justifyContent: 'center',
              }}>
              <AppText style={{fontSize: 18, color: 'grey'}}>Doanh thu</AppText>
              <AppText style={styles.txtTotal}>+ 1.900.000</AppText>
            </AppView>
            <AppView
              style={{
                paddingHorizontal: 15,
                flex: 2,
                justifyContent: 'center',
                // backgroundColor:'pink'
              }}>
              <AppText style={{fontSize: 18}}>Hôm nay</AppText>
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
  },
  txtTotal: {
    fontSize: 25,
    padding: 5,
    color: 'green',
    fontWeight: 'bold',
  },
});
export default Dashboard;
