import React from 'react';
import {StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppText from '../../components/text/AppText';
import AppView from '../../components/view/AppView';
const MatchPayed: React.FC = () => {
  return (
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
            <Ionicons
              name="football"
              size={20}
              style={{
                backgroundColor: '#e5e5e5',
                padding: 5,
                color: 'purple',
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
          <AppText style={{fontSize: 16, color: 'grey'}}>
            {'Số trận đã đặt'}
          </AppText>
          <AppText style={styles.txtTotal}>12</AppText>
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
    color: 'purple',
    fontWeight: 'bold',
  },
});

export default MatchPayed;
