import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { withExpoSnack } from 'nativewind';
import Routers from './Routers';
import { View, Text, TouchableOpacity } from 'react-native';
import CustomButton from './assets/components/customButton';

function App() {


  return (
    // <View >
    //   <View className="bg-black w-96 h-96">
    //   </View>
    //   <Text>texto</Text>
    //   <TouchableOpacity>
    //     <Text>botao</Text>
    //   </TouchableOpacity>
    //   <Exemplo></Exemplo>
    //   <View className="w-[90%]">
    //         <TouchableOpacity className="h-[55px] flex items-center justify-center rounded-lg bg-[#BB0FD7] border border-[#C032E2]" onPress={()=>{}}>
    //             <Text className="text-[20px] text-white">{"name"}</Text>
    //         </TouchableOpacity>
    //     </View>
    // </View>
    <Routers />

  );
}
// \/ \/ \/ se for testar web
// export default withExpoSnack(App)
// \/ \/ \/ se for testar android/emulador
export default (App)
