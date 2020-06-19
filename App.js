import React ,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput,ScrollView ,FlatList} from 'react-native';

import Header  from './Components/Header'
import StartGameScreen from './screens/StartGameScreen'

export default function App() {
  return (
    <View style = {styles.screen}>
        <Header title = "Guess A Number" />
        <StartGameScreen> </StartGameScreen>
    </View>
  );
}
const styles = StyleSheet.create({
  screen : {
    flex:1
  }
});
