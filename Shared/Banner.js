import React from 'react'
import { View } from "react-native"
import { Directions } from 'react-native-gesture-handler'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import data from './data'


const Banner = () => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)


  return (
    <View>
      <Carousel
        layout="stack"
        layoutCardOffset={18}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
        
       
      />
      <View style={{marginHorizontal:20,}}>
      <Pagination 
        dotsLength={data.length}
        containerStyle={{ justifyContent:"flex-start" }}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 30,
          height: 5,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'red',
        }}
        inactiveDotOpacity={0.1}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
      </View>
    </View>

  )
}



export default Banner;