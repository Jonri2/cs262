import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

/*
  HomeScreen is a basic default screen for an app
  Returns: a View component with text displaying "Home Screen"
            and a button that sends the user to a secondary page
*/
class HomeScreen extends Component {
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    )
  }
}

/*
  DetailsScreen is a basic secondary screen for an app.
  Returns: a View component with text displaying "Details Screen"
            and three buttons that send the user to the home screen, 
            back to the previous page, or to the home screen
*/
class DetailsScreen extends Component {
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    )
  }
}

// Initialize the app navigator
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home'
  }
)

const AppContainer = createAppContainer(AppNavigator)

/*
  The App component puts bot the Home and Detail Screens in
  a container with the AppNavigator
  Returns: The App Container
*/
export default class App extends React.Component {
  render () {
    return <AppContainer />
  }
}
