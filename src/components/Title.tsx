import React from 'react'
import {
  StyleSheet,
  Text,
} from 'react-native'
import { observer } from 'mobx-react-lite'

export interface ITitleProps {
  title: string
  margin?: number
  fontSize?: number
}

export const Title: React.SFC<ITitleProps> = observer(({
  title,
  margin = 5,
  fontSize = 16,
}) => {
  return <Text style={[styles.root, { fontSize, margin }]}>{title}</Text>
})

const styles = StyleSheet.create({
  root: {
    fontWeight: `bold`,
  },
})