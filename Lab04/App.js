import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [input, onInputChange] = useState('')
  let pic = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 3, alignItems: 'center', justifyContent: 'space-evenly'}}>
        <Text allowFontScaling={true}>Hello, world!</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <TextInput value={input} onChangeText={text => onInputChange(text)} style={styles.textInput} placeholder={" Insert Text here"} returnKeyType="done"/>
        <Text style={{padding: 10, fontSize: 42}}>
          {input.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
        <Button onPress={() => { alert('You tapped the button!'); }} title="Press Me" color={"orange"}/>
      </View>
      <ScrollView style = {styles.scrollContainer}>
        <Text style={{fontSize:30}}>React Native</Text>
        <Text style={{fontSize:20}}>Scroll View</Text>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  textInput: {
    borderWidth: 1,
    width: '50%',
    height: '5%',
  },
  scrollContainer: {
    backgroundColor: '#fff',
    height: '20%'
  }
});
