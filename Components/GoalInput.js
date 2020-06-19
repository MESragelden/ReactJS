import React , {useState} from 'react'
import { View, Modal,TextInput, Button, StyleSheet, Text ,Touchable} from 'react-native'
const GoalInput = props => {
    const [enteredGoal,setEnteredGoal] = useState('')
    const goalInputHandler = (enteredText)=>{
        setEnteredGoal(enteredText)
    };
    const addGoalHandler = ()=>{
        props.onAddGoal(enteredGoal)
        setEnteredGoal("")
    }
    return (
        <Modal visible={props.visible} animationType ="slide">
        <View style={styles.inputContainer} onPress>
            <TextInput
                placeholder="Course Goal"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal} />
            <View style={styles.buttonContainer}>    
                <View style = {styles.button}>
                    <Button title="Add" onPress={addGoalHandler}/>
                </View>
                <View style = {styles.button}>
                    <Button title = "Cancel" color ="red" onPress ={props.onCancel}/>
                </View>
            </View>
        </View>
        </Modal>
        );

};
export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {flex:1, justifyContent: 'center', alignItems: 'center' },
    input: { marginBottom:10, width: '80%', borderColor: 'black', borderWidth: 1, padding: 10 },
    buttonContainer:{flexDirection:'row',justifyContent:"space-between",width:'60%'},
    button:{width:'40%'}
});