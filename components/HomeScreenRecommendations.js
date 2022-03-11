
import { StyleSheet, Text, View, Image, Button } from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import React, { useState } from "react";
import Colors from "../Themes/Colors"
import Images from "../Themes/Images"
import Fonts from "../Themes/Fonts"


export default function HomeScreenRecommendations({navigation}) {
    const [isSelected, setSelection] = useState(false);

    return (
      <View style={styles.recommendationsView}>
        <View style={styles.container}>

          <View style={styles.item}>
            <View style={styles.itemLeft}>
              {/* <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
              /> */}
              <View style={styles.square}></View>
              <Text style={styles.itemText}>Take the dog for a walk</Text>
            </View>
            <View style={styles.circular}></View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.item}>
            <View style={styles.itemLeft}>
              <View style={styles.square}></View>
              <Text style={styles.itemText}>Reschedule 5pm meeting</Text>
            </View>
            <View style={styles.circular}></View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.item}>
            <View style={styles.itemLeft}>
              <View style={styles.square}></View>
              <Text style={styles.itemText}>Call Tara</Text>
            </View>
            <View style={styles.circular}></View>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    recommendationsView: {
      height: '25%',
      width: '85%',
      justifyContent: 'space-between'
    },
    container: {
      backgroundColor: 'white',
      justifyContent: 'space-between',
      marginBottom: 20,
      // alignItems: 'center',
      //justifyContent: 'center',
      borderRadius: 10,
      shadowColor: "#000000",
      shadowOpacity: 0.5,
      shadowRadius: 2,
      shadowOffset: {
        height: 1,
        width: 1
      }
    },
    item: {
      padding: 10,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    itemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    square: {
      width: 24,
      height: 24,
      backgroundColor: Colors.peach,
      opacity: 0.4,
      borderRadius: 5,
      margin: 15,
    },

    itemText: {
      fontSize:17,
    },
    circular: {
      width: 12,
      height: 12,
      borderColor: 'white',
      borderWidth: 2,
      borderRadius: 5,
    },
  });
