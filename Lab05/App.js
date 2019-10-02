import React from 'react';
import { StyleSheet } from 'react-native';
import Header, { FunctionalHeader } from './components/Header'
import DemoView from './components/DemoView'
import Blink from './components/Blink'

export default function App() {
  return (
    <DemoView style={styles.container}>
      <Header style={{alignItems: 'center', justifyContent: 'center'}} title='Lab05' subtitle='Header'/>
      <Blink text="Hello, I'm Blinking!" />
      <FunctionalHeader style={{alignItems: 'center', justifyContent: 'center'}} title='Lab05' subtitle='Functional Header'/>
    </DemoView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
});
