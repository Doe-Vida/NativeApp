import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { withExpoSnack } from 'nativewind';
import Routers from './Routers';
import { View, Text, TouchableOpacity } from 'react-native';

function App() {
  
  return (
    <Routers />
  );
}
// \/ \/ \/ se for testar web
// export default withExpoSnack(App)
// \/ \/ \/ se for testar android/emulador
export default (App)
