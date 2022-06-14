import * as React from 'react';
import {StyleSheet} from 'react-native';
import AppText from '../../components/text/AppText';
import AppView from '../../components/view/AppView';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const Dashboard: React.FC = () => {
  return (
    <AppView style={styles.container}>
      <AppView style={styles.section}>
        <AppView style={styles.blockItem}>
          <AppView
            style={{
              height: 60,
              justifyContent: 'center',
              paddingHorizontal: 15,
            }}>
            <AntDesignIcon name="setting" size={22} />
          </AppView>
          <AppView style={{padding: 15, height: 100}}>
            <AppText style={{fontSize: 18}}>Total Price</AppText>
            <AppText style={styles.txtTotal}>1.900.000 USD</AppText>
          </AppView>
          <AppView
            style={{
              paddingHorizontal: 15,
              height: 51,
              justifyContent: 'flex-end',
            }}>
            <AppText style={styles.txtTotal}>22/11/2022</AppText>
          </AppView>
        </AppView>
        <AppView style={styles.blockItem}>
          <AppView
            style={{
              height: 60,
              justifyContent: 'center',
              paddingHorizontal: 15,
            }}>
            <AntDesignIcon name="eye" size={22} />
          </AppView>
          <AppView style={{padding: 15, height: 100}}>
            <AppText style={{fontSize: 18}}>Total Price</AppText>
            <AppText style={styles.txtTotal}>1.900.000 USD</AppText>
          </AppView>
          <AppView
            style={{
              paddingHorizontal: 15,
              height: 51,
              justifyContent: 'flex-end',
            }}>
            <AppText style={styles.txtTotal}>22/11/2022</AppText>
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
    width: '25%',
    backgroundColor: '#FFF',
    margin: 10,
    borderRadius: 5,
    elevation: 5,
  },
  txtTotal: {
    fontSize: 22,
  },
});
export default Dashboard;
