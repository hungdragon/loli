import * as React from 'react';
import { StyleSheet} from 'react-native';
// import AppText from '../../components/text/AppText';
import AppView from '../../components/view/AppView';
// import AntDesignIcon from 'react-native-vector-icons/AntDesign';
// import Entypo from 'react-native-vector-icons/Entypo';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DashboardTable from './DashboardTable';
import Sales from './Sales';
import MatchPayed from './MatchPayed';
import ChartFootball from './ChartFootball';

const Dashboard: React.FC = () => {
  return (
    <AppView style={styles.container}>
      <AppView style={styles.section}>
        <Sales />
        <MatchPayed />
      </AppView>
      <AppView style={{flex: 1, flexDirection: 'row'}}>
        <DashboardTable />
        <AppView style={{flex: 0.5, backgroundColor: 'green'}}>
          <ChartFootball />
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
    padding: 10,
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
