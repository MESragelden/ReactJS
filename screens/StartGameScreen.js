import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../Components/Card';
import Colors from "../constants/colors";
import Input from "../Components/Input"

const StartGameScreen = props => {
    const [enteredValue,setEnteredValue] = useState('');
    const numberInputHandler= inputText =>{
        
        let y = inputText.replace(/[^0-9]/g,'');
        console.log(y);
        setEnteredValue(y);
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game </Text>
                <Card style={styles.inputContainer} >
                    <Text >Guess a Number </Text>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        autoCapatalize='none'
                        autoCorrect={false}
                        maxLength={2}
                        keyboardType='number-pad'
                        onChangeText = {numberInputHandler}
                        Value = {enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" onPress={() => { }} color={Colors.accent}></Button>
                        </View>
                        <View style={styles.button}>
                            <Button title="confirm" onPress={() => { }} color={Colors.primary}></Button>
                        </View>
                    </View>
                </Card>

            </View>
        </TouchableWithoutFeedback>
    );
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignContent: 'center',
        paddingHorizontal: 15,
    },
    button: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center',
    },
});
export default StartGameScreen;