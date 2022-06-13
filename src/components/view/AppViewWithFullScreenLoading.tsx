
import * as React from 'react';
import {
  ImageSourcePropType,
  StyleSheet,
  ViewStyle,
  ImageStyle,
  TextStyle,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import image from '../../assets/icons';
import AppText from '../text/AppText';
import AppLoadingIndicator from './AppLoadingIndicator';
import AppView, {AppViewProps} from './AppView';
// import AppFontAwesomeIcon from 'react-native-vector-icons/AntDesign'

type IProps = AppViewProps & {
  errorString: string;
  loading: boolean;
  children: React.ReactChild;
  styleLoading?: ViewStyle | ViewStyle[];
  styleError?: ViewStyle | ViewStyle[];
  styleIconError?: ImageStyle | ImageStyle[];
  styleErrorText?: TextStyle | TextStyle[];
  styleRetryText?: TextStyle | TextStyle[];
  loadingSize?: number | string;
  retryPress?: () => void;
};

const AppViewWithErrorAndLoading: React.FC<IProps> = (props: IProps) => {
  const {
    errorString,
    loading,
    children,
    styleLoading,
    styleError,
    retryPress,
    loadingSize = 15,
    styleIconError = styles.errorImage,
    styleErrorText = styles.errorText,
    styleRetryText = styles.retryText,
  } = props;
  const isError = '';
  const theme = useTheme();

  return (
    <AppView {...props.style}>
      {loading ? (
        <AppView style={styleLoading}>
          <AppLoadingIndicator size={15} />
        </AppView>
      ) : isError ? (
        <AppView style={styleError}>
          <Image
            source={image.IC_ERROR as ImageSourcePropType}
            style={styleIconError}
          />
          <AppText style={[styleErrorText, {color: theme.colors.grey}]}>
            {errorString}
          </AppText>
          <TouchableOpacity onPress={retryPress} style={styles.retryButton}>
            {/* <AppFontAwesomeIcon
              name="undo"
              color={theme.colors.primaryBlue}
              size={15}
            /> */}
            <AppText
              style={[styleRetryText, {color: theme.colors.primaryBlue}]}>
              {'retry'}
            </AppText>
          </TouchableOpacity>
        </AppView>
      ) : (
        children
      )}
    </AppView>
  );
};

export default AppViewWithErrorAndLoading;

const styles = StyleSheet.create({
  errorImage: {
    width: 70,
    height: 70,
    marginBottom: 12,
  },
  retryButton: {
    marginTop: 16,
    flexDirection: 'row',
  },
  retryText: {
    marginLeft: 8,
  },
  errorText: {
    textAlign: 'center',
  },
});
