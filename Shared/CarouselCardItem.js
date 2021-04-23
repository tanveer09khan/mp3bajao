import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width 
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1)

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      />
      {/* <Text style={styles.header}>{item.title}</Text> */}
      <Text style={styles.body}>{item.body}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderRadius: 6,
    width: ITEM_WIDTH,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 10,
    shadowRadius: 4.65,
    elevation: 0,
  },
  image: {
    width: ITEM_WIDTH,
    height: 200,

  },
  header: {
    color: "#222",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 10
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default CarouselCardItem