import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import React, {useEffect, useMemo, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

import {useDispatch, useSelector} from 'react-redux';
// import {ApplicationState} from 'src/redux';
import IconFeather from 'react-native-vector-icons/Feather';
//import {setCode, setData, setDay, setId, setTimeBooking} from './FootballSlice';
import {SafeAreaView} from 'react-native-safe-area-context';
import moment from 'moment';

import * as Animatable from 'react-native-animatable';
import 'moment/locale/vi';
import PitchType from './components/PitchType';
import {BASE_URL} from '../../utils';
import FooterFootball from './components/FootballFooter';
interface Props {
  navigation: any;
  route: any;
}
const wait = (timeout: any) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
const BookFootballPitch: React.FC<Props> = ({navigation, route}) => {
  const isToday = moment().format('L');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const ID_goback = 1;
  // const {namePitch, ID_goback} = route.params;
  const namePitch = '2312312321';
  // console.log('ccc99', ID_goback);
  const [days, setDays] = useState(moment());
  const [selectedId, setSelectedId] = useState(0);
  const length = 6;
  var date = new Date();
  var day = date.getDate();
  let getHour = new Date().getHours();
  let btn_ColorNext = '#696969';
  let btn_ColorPrev = '#696969';
  if (selectedId === 0) {
    btn_ColorPrev = selectedId ? '#DCDCDC' : 'gray';
  }
  if (selectedId === length - 1) {
    btn_ColorNext = selectedId ? '#DCDCDC' : 'gray';
  }
  moment.locale('vi');
  let a = moment().format('LL'); // 24 tháng 7 năm 2018
  a.localeCompare('vi');
  moment().startOf('hour').fromNow(); // 23 phút trước
  const dataPitch = [
    {
      '1': '22',
    },
    {
      '1': '22',
    },
    {
      '1': '22',
    },
    {
      '1': '22',
    },
    {
      '1': '22',
    },
    {
      '1': '22',
    },
    {
      '1': '22',
    },
    {
      '1': '22',
    },
    {
      '1': '22',
    },
    {
      '1': '22',
    },
    {
      '1': '22',
    },
        {
        '1': '22',
        },
  ];
  //   const dataPitch = useSelector(
  //     (state: ApplicationState) => state.footbalState.data,
  //   );
  //   const codeNewDay = useSelector(
  //     (state: ApplicationState) => state.footbalState.code,
  //   );
  if (day < 10) {
    day = '0' + day;
  }
  var mm = date.getMonth() + 1;
  if (mm < 10) {
    mm = '0' + mm;
  }
  const codeToday = String(day + mm);
  const [dayActive, setDayActive] = useState(codeToday);

  //NEXT DAY
  const nextDay = () => {
    setSelectedId(selectedId === length - 1 ? length - 1 : selectedId + 1);
    if (selectedId >= 5) {
      console.log(Alert.alert('Không thể Next được !'));
    } else {
      setDays(moment(days).add(1, 'days'));
      // console.log(days.format("LLL"));

      const tomorrow = moment(days).add(1, 'days').format('L');
      console.log('121--------', moment(days).add(1, 'days').format('LLL'));
      const mm = moment(days).add(1, 'days').format('L');
      const mmSplice = mm.slice(3, 5);
      console.log('ss--', mmSplice);
      //111 dispatch(setTimeBooking(tomorrow));;
      const dayF = moment(days).add(1, 'days').format('DD');
      const dayM = days.format('MM');
      const dayCode = dayF + mmSplice;
      //console.log("dayF", dayCode);
      //  dispatch(setDay(dayCode));
      callAPI(dayCode);
      console.log('đã gọi: ', dayCode);
    }
  };
  // PREV DAY
  const prevDate = () => {
    setSelectedId(selectedId === 0 ? 0 : selectedId - 1);
    console.log('ID---' + selectedId);
    if (selectedId <= 0) {
      console.log(Alert.alert('Không thể Prev được !'));
    } else {
      //console.log(days.locale("vi").format("LLL"));
      setDays(moment(days).subtract(1, 'days'));
      //222 dispatch(setTimeBooking(days.locale('vi').format('LLL')));
      const dayF = moment(days).subtract(1, 'days').format('DD');
      const mm = moment(days).subtract(1, 'days').format('L');
      const mmSplice = mm.slice(3, 5);
      const dayCode = dayF + mmSplice;
      console.log('vv--', mmSplice);
      /// console.log("dayFF", dayCode);
      // dispatch(setDay(dayCode));
      callAPI(dayCode);
      console.log('đã prev: ', dayCode);
    }
  };
  useEffect(() => {
    // callAPI_ONECE();
  }, []);
  /// thay codeName va them typePitch
  const callAPI_ONECE = async () => {
    const pitchName = 'ha';
    const response = await axios.post(
      `${BASE_URL}api/data-pitch?idPitch=${pitchName}&code=${codeToday}`,
      {time: 10 * 1000},
    );
    // console.log('data4---',response.data.footballPitch);
    //3 dispatch(setData(response.data.footballPitch));
    //3dispatch(setCode(codeToday));
    //3dispatch(setId(response.data._id));
  };
  const callAPI = async (dayCode: string) => {
    setLoading(true);
    setTimeout(async () => {
      console.log('999999999999999');
    }, 3000);
    console.log('code99', dayCode);
    const pitchName = 'ha';
    const response = await axios.post(
      `${BASE_URL}api/data-pitch?idPitch=${pitchName}&code=${dayCode}`,
      {time: 10 * 1000},
    );
    // console.log("data4---", response.data.footballPitch);
    //4 dispatch(setData(response.data.footballPitch));
    //4dispatch(setCode(dayCode));
    //44dispatch(setId(response.data._id));
    setLoading(false);
  };
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    // console.log('ma code --', codeNewDay);
    wait(2000).then(() => setRefreshing(false));
    const pitchName = 'ha';
    const response = await axios.post(
      `${BASE_URL}api/data-pitch?idPitch=${pitchName}&code=${'1506'}`,
      {time: 10 * 1000},
    );
    //6 dispatch(setData(response.data.footballPitch));
    ///666 dispatch(setId(response.data._id));
    ///6 dispatch(setCode(codeNewDay));
  };

  useMemo(async () => {
    /// console.log('code888888', codeNewDay);
    const pitchName = 'ha';
    const response = await axios.post(
      `${BASE_URL}api/data-pitch?idPitch=${pitchName}&code=${'1506'}`,
      {time: 10 * 1000},
    );
    // console.log("data4---", response.data.footballPitch);
    ///5   dispatch(setData(response.data.footballPitch));
  }, [ID_goback]);

  // console.log('code--:', codeToday);
  // console.log('codeNew--:', codeNewDay);
  return (
    <View style={Styles.container}>
      <SafeAreaView>
        <View style={Styles.backView}>
          <IconFeather
            style={{
              fontSize: 22,
              color: 'black',
              paddingVertical: 5,
              fontWeight: 'bold',
            }}
            name="arrow-left"
          />
          <Text
            style={{
              fontSize: 18,
              padding: 4,
              color: 'black',
              marginLeft: 15,
              fontWeight: 'bold',
            }}>
            {namePitch}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          {/* <PitchType /> */}
          <View style={Styles.calendar}>
            <View style={Styles.calendar_block}>
              <TouchableOpacity onPress={prevDate}>
                <Icon
                  name="chevron-left"
                  size={22}
                  style={[Styles.btn_navigation, {color: btn_ColorPrev}]}
                />
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  width: '80%',
                  // backgroundColor:'red',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 18}}>{days.format('DD')}</Text>

                <Icon
                  name="calendar"
                  size={16}
                  style={{color: 'black', padding: 3}}
                />
              </View>
              <TouchableOpacity onPress={nextDay}>
                <Icon
                  name="chevron-right"
                  size={22}
                  style={[Styles.btn_navigation, {color: btn_ColorNext}]}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 0.1,
            position: 'relative',
            zIndex: 9999,
          }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={{zIndex: -1}}
          style={{zIndex: -1}}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <View style={Styles.Pitch_container}>
            {dataPitch.map((item: any, index: any) => (
              <View key={index} style={Styles.Pitch_wrap}>
                <View style={Styles.Pitch_element}>
                  <Text style={Styles.Time_Football}>{item.timeSlot}</Text>

                  {item.timeEnd <= getHour && codeToday === codeNewDay ? (
                    <Animatable.View animation="flash" duration={1000}>
                      <Icon
                        name="close"
                        style={[Styles.Icon_Football, {color: 'red'}]}
                      />
                    </Animatable.View>
                  ) : getHour < item.timeStart &&
                    item.status === 'payed' &&
                    codeToday == codeNewDay ? (
                    // <Icon
                    //   name="soccer-ball-o"
                    //   style={[Styles.Icon_Football, { color: "green" }]}
                    // />
                    <TouchableOpacity
                      onPress={() => {
                        Alert.alert('da dat san');
                      }}>
                      <Icon
                        name="soccer-ball-o"
                        style={[Styles.Icon_Football, {color: 'purple'}]}
                      />
                    </TouchableOpacity>
                  ) : item.timeStart <= getHour <= item.timeEnd &&
                    item.status == 'payed' &&
                    codeToday == codeNewDay ? (
                    <TouchableOpacity
                      onPress={() => {
                        Alert.alert('dang choi');
                      }}>
                      <Icon
                        name="soccer-ball-o"
                        style={[Styles.Icon_Football, {color: 'green'}]}
                      />
                    </TouchableOpacity>
                  ) : item.status === 'pending' && codeToday != codeNewDay ? (
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('DetailsFootball', {
                          id: item.id,
                          nanmePitch: namePitch,
                          price: item.price,
                          time: item.timeSlot,
                        });
                      }}>
                      <Icon
                        name="plus"
                        style={[Styles.Icon_Football, {color: 'gray'}]}
                      />
                    </TouchableOpacity>
                  ) : item.status === 'payed' && codeToday != codeNewDay ? (
                    <TouchableOpacity
                      onPress={() => {
                        Alert.alert('da dat san');
                      }}>
                      <Icon
                        name="soccer-ball-o"
                        style={[Styles.Icon_Football, {color: 'purple'}]}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        // dispatch(setTimeBooking(isToday));
                        navigation.navigate('DetailsFootball', {
                          id: item.id,
                          nanmePitch: namePitch,
                          price: item.price,
                          time: item.timeSlot,
                        });
                      }}>
                      <Icon
                        name="plus"
                        style={[Styles.Icon_Football, {color: 'gray'}]}
                      />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      )}
      <FooterFootball />
    </View>
  );
};
const {height} = Dimensions.get('screen');
const height_pitch = height * 0.25;
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    // backgroundColor:'blue',
    // backgroundColor: 'red',
    // height: 200
  },
  backView: {
    flexDirection: 'row',
    marginHorizontal: 15,
    paddingVertical: 10,
  },
  header_typePitch: {
    width: '50%',
    justifyContent: 'center',
    // backgroundColor:"red"
    zIndex: 1,
  },
  _typePitch: {
    // width: "80%",
    backgroundColor: 'white',
    margin: 10,
    paddingVertical: 2,
    borderRadius: 10,
    elevation: 10,
    // backgroundColor:"blue",
    marginHorizontal: 20,
  },
  // Calendar
  calendar: {
    width: '55%',
    //  backgroundColor: "green",
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 20,

    zIndex: 0,
    // padding: 10,
  },
  calendar_block: {
    flexDirection: 'row',
    width: '55%',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    borderRadius: 10,
    elevation: 10,
    marginHorizontal: 20,
    // overflow:'hidden',
  },
  dayofMonth: {
    backgroundColor: 'orange',
    padding: 8,
    margin: 5,
    marginVertical: 5,
    borderRadius: 80,
    fontWeight: 'bold',
    color: '#fff',
  },
  btn_navigation: {
    // margin:5
  },

  /// Book Football Pitch
  Pitch_container: {
    //  backgroundColor: "red",
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 20,
    zIndex: 0,
  },
  Pitch_wrap: {
    flexDirection: 'row',
    margin: 8,
  },
  Pitch_element: {
    //  backgroundColor: "pink",
    justifyContent: 'center',
    alignItems: 'center',
    //padding:5,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 20,
    width: height / 8,
    height: height / 7.5,
    padding: 5,
  },
  Time_Football: {
    fontWeight: 'bold',
    //paddingVertical:5,
    // marginHorizontal:5,
    fontSize: 16,
    justifyContent: 'center',
  },
  Icon_Football: {
    fontSize: 35,
    paddingVertical: 5,
    marginTop: 8,
    // elevation:50,
    color: '#C0C0C0',
  },
});
export default BookFootballPitch;
