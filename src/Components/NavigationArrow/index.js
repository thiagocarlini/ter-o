import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function NavigationArrow(props) {

  return (
    <View style={{marginTop:'10%'}}>
      <AntDesign name={props.direction === 'up'? "arrowup" : "arrowdown"} size={24} color="white" />
    </View>
  )
}