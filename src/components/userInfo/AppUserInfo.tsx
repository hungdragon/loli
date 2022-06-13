import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import image from '../../assets/icons';
import AppText from '../text/AppText';
import AppView from '../view/AppView';
// import { useAppDispatch, useAppSelector } from 'app/hooks';




const AppUserInfo: React.FC = () => {
  const theme = useTheme();
//  const dispatch = useAppDispatch();
//   const appUser = useAppUser();
//   const { getBasiclUserLoginInfo } = appUser;
//   const user = getBasiclUserLoginInfo();
  const navigation = useNavigation();
//   const selected = useAppSelector(state => state.overlayState.utilitySelected);
  // const haveNotifyBirthday = useAppSelector(state => state.notifyBirthdaySate.haveNotifyBirthday);
  // const countUnreadNotification = useAppSelector(state => state.notificationState.countUnreadNotification);

  const birthdayPress = () => {
    // dispatch(setUtilitySelected(appConstants.OVERLAY_MENU.BIRTHDAY));
    // navigation.navigate('Overlay' as never);
  };
  const bellPress = () => {
    // dispatch(setUtilitySelected(appConstants.OVERLAY_MENU.NOTIFICATION));
    // navigation.navigate('Overlay' as never);
  };
  const utilsPress = () => {
    // dispatch(setUtilitySelected(appConstants.OVERLAY_MENU.UTILITIES));
    // navigation.navigate('Overlay' as never);
  };
  const userInfoPress = () => {
    // navigation.navigate('UserInfo' as never);
  };
//   const imageGender =
//     user?.gender === 'Nam' ? (image.IC_MAN as ImageSourcePropType) : (image.IC_WOMAN as ImageSourcePropType);
//   const colorBirthdaySelected =
//     selected === appConstants.OVERLAY_MENU.BIRTHDAY ? theme.colors.clearBlue : theme.colors.white;
//   const colorBellSelected =
//     selected === appConstants.OVERLAY_MENU.NOTIFICATION ? theme.colors.clearBlue : theme.colors.white;
//   const colorUtilitySelected =
//     selected === appConstants.OVERLAY_MENU.UTILITIES ? theme.colors.clearBlue : theme.colors.white;
  // const imageBirthday = haveNotifyBirthday
  //   ? (image.IC_NEW_BIRTHDAY as ImageSourcePropType)
  //   : (image.IC_BIRTHDAY as ImageSourcePropType);
  return (
    <AppView
      style={[
        styles.userInfoContainer,
        {
          borderLeftColor: '#e5e5e5',
          borderRightColor: '#e5e5e5',
        },
      ]}>
      <TouchableOpacity onPress={userInfoPress} style={styles.userContainer}>
        <Image source={image.IC_MAN as ImageSourcePropType} />
        <AppView style={styles.nameContainer}>
          <AppText boldOrLight="bold">{'user?.fullName'}</AppText>
          <AppText style={styles.userName}>{'user?.username'}</AppText>
        </AppView>
      </TouchableOpacity>
      <AppView style={styles.viewButton}>
        <TouchableOpacity
          onPress={birthdayPress}
          style={[styles.utilsButton, { backgroundColor: theme.colors.clearBlue }]}>
          {/* <AppImage style={styles.utilsImage} source={imageBirthday} /> */}
        </TouchableOpacity>

        <AppView style={styles.paddingView} />
        <TouchableOpacity onPress={bellPress} style={[styles.utilsButton, { backgroundColor:  theme.colors.clearBlue }]}>
          <Image style={styles.bellImage} source={image.IC_BELL as ImageSourcePropType} />
          {/* {!!countUnreadNotification && (
            <AppView style={styles.badge}>
              <AppText style={{ color: COLORS.white }}>
                {countUnreadNotification < 10 ? countUnreadNotification : '9+'}
              </AppText>
            </AppView>
          )} */}
        </TouchableOpacity>
        <AppView style={styles.paddingView} />
        <TouchableOpacity
          onPress={utilsPress}
          style={[styles.utilsButton, { backgroundColor:  theme.colors.clearBlue }]}>
          <Image style={styles.utilsImage} source={image.IC_UTILITIES as ImageSourcePropType} />
        </TouchableOpacity>
      </AppView>
    </AppView>
  );
};

export default AppUserInfo;

const styles = StyleSheet.create({
  badge: {
    backgroundColor: 'red',
    height: 18,
    width: 18,
    borderRadius: 9,
    position: 'absolute',
    top: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    width: 330,
    height: 70,
    justifyContent: 'space-between',
  },
  logoContainer: {
    height: 70,
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center',
  },
  nameContainer: {
    marginHorizontal: 8,
  },
  utilsButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    height: 32,
    width: 32,
  },
  userName: {
    fontSize: 13,
    marginTop: 2,
  },
  utilsImage: {
    width: 30,
    height: 30,
  },
  bellImage: {
    width: 20,
    height: 20,
  },
  userContainer: {
    flexDirection: 'row',
  },
  viewButton: {
    flexDirection: 'row',
  },
  paddingView: {
    width: 6,
  },
});

