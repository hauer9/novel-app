import React, { useCallback } from 'react'
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import { observer } from 'mobx-react'
import FastImage from 'react-native-fast-image'
import { Card, ViewHeight } from '../../../../components'
import { useStores } from '../../../../hooks'
import { goToIntro } from '../../../../utils'

export interface INovelProps {
  novel: any
}

const { height, width } = Dimensions.get('window')

const Novel: React.FC<INovelProps> = observer(({
  novel,
}) => {
  const { recommendStore } = useStores()
  const { setItemHeight } = recommendStore

  const {
    id,
    cover,
    title,
    author: { username },
  } = novel

  const handle = useCallback(() => {
    goToIntro(id)
  }, [])

  return (
    <ViewHeight setHeight={setItemHeight}>
      <Card handle={handle}>
        <FastImage
          style={styles.img}
          source={{
            uri: cover,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.username}>{username}</Text>
        </TouchableOpacity>
      </Card>
    </ViewHeight>
  )
})

const styles = StyleSheet.create({
  img: {
    height: height / 4,
    width,
    marginTop: 35,
    marginBottom: 25,
  },
  title: {
    fontSize: 20,
  },
  username: {
    fontSize: 16,
    fontWeight: `300`,
    color: `#333`,
    marginVertical: 10,
  },
})

export default Novel