import * as SecureStore from 'expo-secure-store';

export default getToken = async()=> {
    let result = await SecureStore.getItemAsync("token");
    return result;
    // if (result) {
    //   alert("🔐 Here's your value 🔐 \n" + result);
    // } else {
    //   alert('No values stored under that key.');
    // }
  }