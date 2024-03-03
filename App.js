import store from './src/stores/store';
import { Provider } from 'react-redux';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { MuscleList } from './src/components/muscles/MuscleList';

export default function App() {
  return (
    <Provider store={store}>
      <MuscleList />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
