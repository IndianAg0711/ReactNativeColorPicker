import React, { Component } from 'react'
import { View } from 'react-native'

import Touchable from '@components/Touchable'
import styles from './styles'

const colors = [
  '#ff0000',
  '#00ff00',
  '#0000ff',
  '#ffff00',
]

export default class MainScene extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedColor: 0,
    }
  }

  render() {
    const { selectedColor } = this.state

    return (
      <View style={styles.container}>
        <View style={{ flex: 1, backgroundColor: colors[selectedColor] }} />
        <View style={styles.colorPaletteContainer}>
          {colors.map((color, index) => {
            return (
              <Touchable
                style={{ width: '50%', height: '50%', backgroundColor: color }}
                onPress={() => this.setState({ selectedColor: index })}
                key={index}
              />
            )
          })}
        </View>
      </View>
    )
  }
}
