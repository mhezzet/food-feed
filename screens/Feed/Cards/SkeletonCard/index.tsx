import React from 'react'
import { StyleSheet, View } from 'react-native'
import SkeletonBar1 from '../../../../assets/images/feed/skeleton-bar-1.svg'
import SkeletonBar2 from '../../../../assets/images/feed/skeleton-bar-2.svg'
import SkeletonBar3 from '../../../../assets/images/feed/skeleton-bar-3.svg'
import SkeletonOval from '../../../../assets/images/feed/skeleton-oval.svg'
import SkeletonSquare from '../../../../assets/images/feed/skeleton-square.svg'

export const SkeletonCard: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <SkeletonOval />
        <View style={styles.skeletonGroup1}>
          <SkeletonBar1 />
          <SkeletonBar2 />
        </View>
      </View>
      <SkeletonSquare />
      <View style={styles.footer}>
        <SkeletonBar3 />
        <SkeletonBar3 />
        <SkeletonBar3 />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 3,
    paddingTop: 11,
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingBottom: 8,

    alignItems: 'stretch',
    flexDirection: 'row',
  },
  skeletonGroup1: {
    marginTop: 4,
    marginStart: 7.5,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 42,
    paddingHorizontal: 16,
    paddingTop: 15,
    paddingBottom: 17.5,
  },
})
