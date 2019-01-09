import React from 'react'
import { Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native'

const Touchable = ({ style, onPress, children }) => {
  const TouchableWrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity
  return (
    <TouchableWrapper style={style} onPress={onPress}>
      {children}
    </TouchableWrapper>
  )
}

export default Touchable
