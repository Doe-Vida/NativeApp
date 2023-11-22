import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { withExpoSnack } from 'nativewind';
import Routers from './Routers';
import { View, Text, TouchableOpacity } from 'react-native';
import { OrientationLocker, PORTRAIT, LANDSCAPE } from "react-native-orientation-locker";

function App() {
  // useEffect(()=>{
  //   OrientationLocker.lockToPortrait()
  // },[])
  
  return (
      <Routers /> 
  );
}
// \/ \/ \/ se for testar web
// export default withExpoSnack(App)
// \/ \/ \/ se for testar android/emulador


export default (App)
