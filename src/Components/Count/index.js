import { View, Text } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

export default function Count(props) {
  return (
    <View>
      <Entypo name="circle" size={20} color={props.color || 'black'}/>
    </View>
  )
}