import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Alert,
  AsyncStorage,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Button, useTheme} from 'react-native-paper';
import image from '../../assets/icons';
import AppText from '../../components/text/AppText';
import AppView from '../../components/view/AppView';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import {BASE_URL} from '../../utils';
const Login: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [userName, setUserName] = useState<string>('');
  const [passWord, setPassWord] = useState<string>('');
  const [clear, setClear] = useState(true);
  const [hidePassword, setHidePassword] = React.useState<boolean>(true);
  const onChangeUsername = (text: string) => {
    const textUsername = text.replace(
      /[^A-Za-z0-9._ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u,
      '',
    );
    setUserName(textUsername);
    //  setErrorMessage('');
    setClear(false);
  };
  const onChangePassword = (text: string) => {
    setPassWord(text);
    //  setErrorMessage('');
  };
  const onPressLogin = async () => {
    //  setErrorMessage('');
    // const _userName = getUsername() as string;
    //  onLogin(_userName, passWord);
    if (!userName && !passWord) {
      // Alert.alert('34');
      // navigation.navigate('AppTab' as never);
    } else {
      // Alert.alert(userName,passWord);
      callApiLogin();
    }
  };
  const callApiLogin = async () => {
    console.log(userName, passWord);
    try {
      const response = await axios.post(`${BASE_URL}api/login`, {
        userName,
        passWord,
      });
      const {error, status, token, isAdmin} = response.data;
      console.log('STATUS----', status);
      if (status === 'ok') {
        const _token = token;
        await AsyncStorage.setItem('token', _token);
        await AsyncStorage.setItem('role', isAdmin);
        Alert.alert('OK', 'Successfully registered', [{text: 'OK'}]);
        // dispatch({
        //   type: 'ON_REGISTER',
        //   payload: response.data,
        // });
        navigation.navigate('AppTab' as never);
      } else if (status === 401) {
        Alert.alert('Lỗi', error, [{text: 'OK'}]);
      } else {
        Alert.alert('Lỗi', error, [{text: 'OK'}]);
      }
    } catch (error) {
      console.log('Xảy ra lỗi' + error);
      console.log('ERRR' + error);
    }
  };

  return (
    <AppView style={styles.container}>
      <Image source={image.BG_LOGIN_FORM} style={styles.left} />

      <AppView style={styles.contentView}>
        <AppText
          style={[
            {fontSize: 22, textAlign: 'center'},
            {color: theme.colors.clearBlue},
          ]}>
          ADMINTRATORS
        </AppText>
        <AppView style={styles.paddingItem} />
        <AppView style={{}}>
          <AppView style={styles.textInputWrap}>
            <TextInput
              style={styles.textInput}
              // label={'username'}
              placeholder={'username'}
              secureTextEntry={false}
              value={userName}
              // iconName={'envelope-open'}
              //  iconSize={16}
              onChangeText={onChangeUsername}
              onSubmitEditing={onPressLogin}
            />
          </AppView>
          <AppView style={styles.textInputWrap}>
            <TextInput
              style={styles.textInput}
              // label={'password'}
              placeholder={'password'}
              secureTextEntry={hidePassword}
              value={passWord}
              //  iconName={'lock'}
              //  iconSize={20}
              onChangeText={onChangePassword}
              onSubmitEditing={onPressLogin}
              // iconPress={() => setHidePassword(!hidePassword)}
            />
            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
              {!hidePassword ? (
                <EntypoIcon name="eye" size={20} />
              ) : (
                <EntypoIcon name="eye-with-line" size={20} />
              )}
            </TouchableOpacity>
          </AppView>
          <TouchableOpacity style={styles.loginButton} onPress={onPressLogin}>
            <AppText style={styles.loginText}>{'login'}</AppText>
          </TouchableOpacity>

          <AppView style={styles.copyright}>
            <AppText style={styles.copyrightText}>
              {'copyright_version'}
              {/* {config.IS_UAT === '1' ? '_UAT' : ''} */}
            </AppText>
            <AppText style={styles.copyrightText}>{'copyright'}</AppText>
          </AppView>
        </AppView>
      </AppView>

      <AppView style={styles.right}>
        <Image
          source={image.BG_FOOTBALL}
          style={{width: '100%', height: '100%'}}
        />
      </AppView>
    </AppView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },

  left: {
    width: '35%',
    backgroundColor: '#fff',
    height: '100%',
    position: 'absolute',
  },
  right: {
    width: '65%',
    backgroundColor: 'green',
  },
  paddingContentView: {
    flex: 1.2,
  },
  contentView: {
    flex: 7,
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: '5%',
  },
  paddingItem: {
    marginTop: 12,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  logoLogin: {
    width: 160,
    height: 69,
    marginLeft: 6,
    marginBottom: 24,
  },
  textWelcome: {
    fontSize: 24,
    color: 'black',
    marginBottom: 4,
  },
  textApp: {
    fontSize: 24,
    color: '#5E81F4',
    fontWeight: 'bold',
  },
  marginBottom: {
    marginBottom: 24,
  },
  welcomenNotPrevUser: {
    marginBottom: 28,
  },
  welcomePrevUser: {
    flexDirection: 'row',
    marginBottom: 28,
  },
  welcomeUser: {
    marginLeft: 16,
    justifyContent: 'center',
  },
  instructionButton: {
    alignItems: 'flex-end',
  },
  textInput: {
    marginBottom: 5,
    // backgroundColor: 'red',
  },
  textInputWrap: {
    borderBottomWidth: 0.4,
    borderBottomColor: '#e5e5e5',
    //backgroundColor:'red'
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarGender: {
    width: 84,
    height: 84,
  },
  loginButton: {
    height: 44,
    marginTop: 16,
    backgroundColor: '#5E81F4',
    justifyContent: 'center',
    borderRadius: 8,
  },
  loginText: {
    color: 'white',
    fontSize: 14,
    letterSpacing: 0,
    textAlign: 'center',
  },
  invalidText: {
    fontSize: 12,
    color: 'red',
    marginBottom: 16,
  },
  copyright: {
    marginTop: 26,
    alignItems: 'center',
  },
  copyrightText: {
    fontSize: 12,
    color: '#86868F',
  },
  instructionText: {
    fontSize: 13,
    color: '#5E81F4',
  },
});
export default Login;
