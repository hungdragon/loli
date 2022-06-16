import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BackHandler, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import AppBanner from '../components/banner/AppBanner';
import VerticalTabBar from './VertivcalTabBar';
import Dashboard from '../features/dashboard';
import AppUserInfo from '../components/userInfo/AppUserInfo';
import AppViewWithFullScreenLoading from '../components/view/AppViewWithFullScreenLoading';
import AppView from '../components/view/AppView';
import Football from '../features/football';
// import { AppViewWithFullScreenLoading, AppBanner } from 'components';



// import UserInfo from 'features/user-info';


export type AppTabParamList = {
  Salekit: undefined;
  Sale: undefined;
  Customer: undefined;
  Dashboard: { dashboardId: 'dashboardId1' | 'dashboardId2' };
  UserInfo: undefined;
  Warning: undefined;
  SaleManager: undefined;
  PotentialCustomer: undefined;
};

const AppTab = createBottomTabNavigator<AppTabParamList>();

const AppTabNavigation: React.FC = () => {
  const theme = useTheme();
//   const { onLogout } = useAppUser();
//   const { showDialog } = useDialog();
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogout = () => {
    // if (!loading) {
    //   setLoading(true);
    //   onLogout()
    //     .then(() => {
    //       setLoading(false);
    //     })
    //     .catch(error => {
    //       setLoading(false);
    //       const message = (error as AppError).message as string;
    //       showDialog({
    //         dialogType: 'error',
    //         title: translate('notification'),
    //         message: message,
    //         description: 'description',
    //         buttonCancel: { label: translate('close'), color: theme.colors.clearBlue },
    //       });
    //     });
    // }
  };

//   const backAction = () => {
//     showDialog({
//       dialogType: 'info',
//       title: translate('logout'),
//       message: translate('warning_logout'),
//       description: 'description',
//       buttonAccept: { onPress: handleLogout, label: translate('accept'), color: theme.colors.primaryBlue },
//       buttonCancel: { label: translate('cancel'), color: theme.colors.clearBlue },
//     });
//     return true;
//   };

//   useEffectOnce(() => {
//     const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
//     return () => backHandler.remove();
//   });

  return (
    <AppView
     // isLoading={loading}
  //    textLoading={'logging_out'}
      style={[styles.container, { backgroundColor: theme.colors.white }]}>
      <AppBanner />
      <AppTab.Navigator
        sceneContainerStyle={styles.tabBar}
        tabBar={props => <VerticalTabBar {...props} />}
        screenOptions={{
          headerShown: false,
        }}>
        <AppTab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            title: 'Điều khiển',
          }}
        />
        <AppTab.Screen
          name="Warning"
          component={Football}
          options={{
            title: 'Sân bóng',
          }}
        />
      </AppTab.Navigator>
    </AppView>
  );
};
export default AppTabNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    marginLeft: 70,
  //  backgroundColor:'red'
  
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  logoContainer: {
    height: 70,
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center',
  },
});

