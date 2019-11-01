import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';


export default function App() {

  function getAdjectives() {
    return fetch(`https://api.datamuse.com/words?rel_jjb=${noun}`)
      .then((response) => response.json())
      .then((responseJson) => {
        onResultChange(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const [noun, onNounChange] = useState('')
  const [result, onResultChange] = useState([])
  return (
      <View style={styles.container}>
        <Text style={{fontSize: 25, textAlign: 'center'}}>Enter a noun to get the most commonly associated adjectives!</Text>
        <View style={{flexDirection: 'row', display: 'flex', flexWrap: 'wrap'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Noun: </Text>
          <TextInput style={{height: 30, width: 200}} placeholder=" Enter a Noun Here " onChangeText={noun => onNounChange(noun)} value={noun} borderColor='gray' borderWidth={1} returnKeyType='done'/>
        </View>
        <Button title='Submit' onPress={getAdjectives}/>
        <ScrollView>
        {result.map((item, index) => (
            <Text key={index}>{item.word}</Text>
          ))
          }
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    top: 20
  },
});
