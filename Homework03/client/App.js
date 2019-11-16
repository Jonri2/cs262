import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Picker } from 'react-native'

/*
  The App component creates an App that calls the backend
  and retrieves and displays celebrity and sighting information
  Returns: A view component to display the celebrity and sighting information
*/
export default function App () {
  /*
    getCelebrities fetches all the celebrity information from the backend
    Returns: Celebrity information in JSON format
  */
  function getCelebrities () {
    return fetch('http://192.168.0.13:3000/celebrity')
      .then((response) => response.json())
      .then((responseJson) => {
        onCelebrityListChange(responseJson)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  /*
    getSightings fetches all the sighting information from the backend
    Returns: Sighting information in JSON format
  */
  function getSightings () {
    return fetch(`http://192.168.0.13:3000/sighting/celebrity/${celebrityId}`)
      .then((response) => response.json())
      .then((responseJson) => {
        onSightingsListChange(responseJson)
        console.log(JSON.stringify(responseJson))
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const [celebrityId, onCelebrityIdChange] = useState(0)
  const [celebrityList, onCelebrityListChange] = useState([])
  const [sightingsList, onSightingsListChange] = useState([])
  getCelebrities()
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, textAlign: 'center' }}>{'\nSelect a celebrity to see where they\'ve been!'}</Text>
      <Picker
        selectedValue={celebrityId}
        style={{ height: 50, width: 200 }}
        itemStyle={{ height: 50 }}
        onValueChange={(itemValue, itemIndex) =>
          onCelebrityIdChange(itemValue)
        }
      >
        {
          celebrityList.map((item, index) => (
            <Picker.Item key={index} label={`${item.first_name} ${item.last_name}`} value={item.id} />
          ))
        }
      </Picker>
      <Button title="Submit" onPress={getSightings}/>
      <ScrollView>
        {sightingsList.map((item, index) => (
          <View key={index} style={{ flexDirection: 'row' }}>
            <Text>{`Sighting #${index + 1}\t`}</Text>
            <View>
              <Text>{`${(new Date(item.time_seen)).toLocaleDateString()} ${(new Date(item.time_seen)).toLocaleTimeString()}\t`}</Text>
              <Text>{`${item.celebrity_location}\t`}</Text>
              <Text>{`${item.notes}\n`}</Text>
            </View>
          </View>
        ))
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    top: 20
  }
})
