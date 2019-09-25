import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native';



export default function App() {
  
  const [operator, onOperatorChange] = useState('+')
  const [input1, onInput1Change] = useState('')
  const [input2, onInput2Change] = useState('')
  const [output, onOutputChange] = useState('')
  
  function calculate() {
    switch(operator) {
      case "+":
        onOutputChange(String(parseInt(input1) + parseInt(input2)))
        break;
      case "-":
        onOutputChange(String(parseInt(input1) - parseInt(input2)))
        break;
      case "*":
        onOutputChange(String(parseInt(input1) * parseInt(input2)))
        break;
      case "/":
        onOutputChange(String(parseInt(input1) / parseInt(input2)))
        break;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{top: '10%', left: '5%'}}>Value 1:</Text>
      <TextInput value={input1} onChangeText={text => onInput1Change(text)} style={{top: '6%', borderWidth: 1, height: '5%', width: '75%', left: '25%'}} keyboardType="numeric" placeholder={"Value 1"} returnKeyType="done"/>
      <Text style={{top: '13%', left: '5%'}}>Value 2:</Text>
      <TextInput value={input2} onChangeText={text => onInput2Change(text)} style={{top: '9%', borderWidth: 1, height: '5%', width: '75%', left: '25%'}} keyboardType="numeric" placeholder={"Value 2"} returnKeyType="done"/>
      <Text style={{top: '16%', left: '5%'}}>Operator:</Text>
      <Picker
        selectedValue={operator}
        style={{top: '11%', left: '30%', height: '10%', width: '20%'}}
        itemStyle={{height: 44}}
        onValueChange={(itemValue, itemIndex) =>
          onOperatorChange(itemValue)
        }
        >
        <Picker.Item label="+" value="+" />
        <Picker.Item label="-" value="-" />
        <Picker.Item label="*" value="*" />
        <Picker.Item label="/" value="/" />
      </Picker>
      <View style={{top: '10%', left: '-33%'}}> 
        <Button title="Calculate" onPress={calculate}/>
      </View>
      <Text style={{top: '5.5%', left: '33%'}}>{output}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
