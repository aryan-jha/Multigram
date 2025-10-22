import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Splash = () => {
  return (
    <View>
      <Text>Splash</Text>
      <FontAwesome name="home" size={30} color="#900" />
      <Text>Welcome to the Splash Screen</Text>
    </View>
  )
}

export default Splash