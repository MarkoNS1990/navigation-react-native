
import React ,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import 'react-native-gesture-handler';
import MealsNavigator from './navigation/MealsNavigator';



const fetchFonts = ()=>{
  return Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {

  const [fontLoaded,setFontLoaded] = useState(false)

  if(!fontLoaded){
    return <AppLoading onError={err=>console.log(err)}  startAsync = {fetchFonts} onFinish={()=>setFontLoaded(true)}/>
  }


  return (
    <MealsNavigator/>
  );
}

const styles = StyleSheet.create({
  
});
