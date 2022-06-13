import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import RootStackNavigation from './src/navigation/RootStackNavigation';
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootStackNavigation />
      </SafeAreaProvider>
    </Provider>
  );
};
export default App;
