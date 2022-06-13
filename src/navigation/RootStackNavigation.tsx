import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Login from '../features/login';
const Stack = createNativeStackNavigator();
const RootStackNavigation = () => {
  //const [isLoading, setIsLoading] = useState(true);
  const token = '342344234232323';
  const isAdmin = '0';
  return (
    <NavigationContainer>
      {token == null || undefined ? (
        <Stack.Navigator>
          <Stack.Screen
            name="hi"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LoginHome"
            component={Login}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : isAdmin === '0' ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Navigation"
            component={Login}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Profile"
            component={Login}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default RootStackNavigation;
