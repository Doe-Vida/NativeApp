import * as SecureStore from 'expo-secure-store';

export default setToken = async(res) =>{
    try{
        await SecureStore.setItemAsync("token", res)
    }catch (e){
        console.log(e);
    }
}