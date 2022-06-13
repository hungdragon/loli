

import * as React from 'react';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';
import image from '../../assets/icons';
import AppUserInfo from '../userInfo/AppUserInfo';
import AppView from '../view/AppView';

const AppBanner: React.FC = () => {
  return (
    <AppView style={styles.container}>
      <Image source={image.IC_FOOTBALL as ImageSourcePropType} resizeMode="center" style={styles.logoMb} />
      <AppUserInfo/>
      <AppView style={styles.logoContainer}>
        <Image source={image.IC_BANNER_FOOTBALL as ImageSourcePropType} resizeMode="center" style={styles.banner} />
      </AppView>
    </AppView>
  );
};

export default AppBanner;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  logoContainer: {
    height: 70,
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center'
  },
  logoMb: {
    justifyContent: 'center',
    width: 70,
    height: 70,
  },
  banner: { height: 70 },
});

