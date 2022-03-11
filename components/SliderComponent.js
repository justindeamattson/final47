import React, {useState, useRef} from 'react';
import {Text, View, Dimensions, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Colors from '../Themes/Colors';
import { Ionicons } from '@expo/vector-icons';

export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const data = [
  {
    id: 1,
    name: 'Recommendations Streak',
    details: '12 Days'
  },
  {
    id: 2,
    name: 'Average Check-Ins Completed',
    details: '15/week'
  },
  {
    id: 3,
    name: 'Readiness Level Trends',
    details: '20% increase'
  },
];

const renderItem = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={{flexDirection:'row', width:'80%'}}>
        <Ionicons name="checkbox" color={Colors.peach} size={70}/>
        <View>
          <Text style={{marginVertical: 5, fontSize: '15', fontWeight: 'bold'}}>
            {item.name}
          </Text>
          <Text style={{marginVertical: 5, fontSize: '25', fontWeight: 'bold'}}>
            {item.details}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default function SliderComponent() {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  return (
    <View style={styles.container}>
      <Carousel
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setIndex(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: Colors.peach,
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: 'black',
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 25,
  },
  itemContainer: {
    borderWidth: 0.,
    padding: 14,
    borderRadius: 20,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    shadowColor: "#000000",
      shadowOpacity: 0.5,
      shadowRadius: 2,
      shadowOffset: {
        height: 1,
        width: 1
      },
    marginTop: 5,
    marginBottom: 10,
  }
});
