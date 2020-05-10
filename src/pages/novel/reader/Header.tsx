import React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native'
import { observer } from 'mobx-react-lite'
import { useHeaderHeight } from '@react-navigation/stack'
import { Header as RnHeader, Silde, Icon } from '../../../components'


export interface IHeaderProps {
  isCollect: boolean
  isShowSetting: boolean
  handleAddToCollections: () => void
}

export const Header: React.SFC<IHeaderProps> = observer(({
  isCollect,
  isShowSetting,
  handleAddToCollections,
}) => {
  const headerHeight = useHeaderHeight()
  return (
    <View style={styles.root}>
      <Silde isSilde={isShowSetting} distance={headerHeight} >
        <RnHeader>
          <View style={styles.rightContainer}>
            <TouchableOpacity onPress={handleAddToCollections}>
              {isCollect || <Icon name='ios-add' size={35} />}
            </TouchableOpacity>
          </View>
        </RnHeader>
      </Silde>
    </View>
  )
})

const styles = StyleSheet.create({
  root: {
    zIndex: 1,
  },
  rightContainer: {
    marginRight: 5,
    flexDirection: `row`,
    alignItems: `center`,
  },
})