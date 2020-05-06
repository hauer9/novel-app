import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { observer } from 'mobx-react-lite'
import { IIhemeColorColor, themeColor } from '../utils'

export interface IColorfulTextProps {
  text: string
  margin?: number
  fontSize?: number
  type?: IIhemeColorColor
}

export const ColorfulText: React.SFC<IColorfulTextProps> = observer(({
  text,
  margin = 5,
  fontSize = 16,
  type = `default`,
}) => {
  return (
    <View style={[styles.root, { margin }]}>
      <Text
        style={[
          styles.text,
          {
            fontSize,
            color: type === `default` ? `#000` : themeColor[type]
          }
        ]}>
        {text}
      </Text>
    </View>
  )
})

const styles = StyleSheet.create({
  root: {

  },
  text: {
    textAlign: `center`
  },
})