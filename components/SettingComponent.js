
import { StyleSheet, Text, View, Image, Switch } from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import React, { useState } from "react";
import Colors from "../Themes/Colors"
import Images from "../Themes/Images"
import Fonts from "../Themes/Fonts"

export default function SettingComponent() {
    const [isSelected, setSelection] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
  const [isEnabled4, setIsEnabled4] = useState(false);
  const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);

    return (
      <View style={styles.recommendationsView}>
        <Text style={styles.titleText}>Settings</Text>
        <View style={styles.container}>
          <View style={styles.item}>
            <View style={styles.itemLeft}>
              <Text style={styles.itemText}>Display Readiness to Friends</Text>
              <Switch
         trackColor={{ false: "#767577", true: Colors.peach }}
         thumbColor={"#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch1}
        value={isEnabled1}
      />
            </View>
            <View style={styles.circular}></View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.item}>
            <View style={styles.itemLeft}>
              <Text style={styles.itemText}>Notify me when Readiness is 40%</Text>
              <Switch
          trackColor={{ false: "#767577", true: Colors.peach }}
          thumbColor={"#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch2}
        value={isEnabled2}
      />
            </View>
            <View style={styles.circular}></View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.item}>
            <View style={styles.itemLeft}>
              <Text style={styles.itemText}>Allow Notifications </Text>
              <Switch
         trackColor={{ false: "#767577", true: Colors.peach }}
         thumbColor={"#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch3}
        value={isEnabled3}
      />
            </View>
            <View style={styles.circular}></View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.item}>
            <View style={styles.itemLeft}>
              <Text style={styles.itemText}>Nudge me to input my energy every hour 
</Text>
              <Switch
        trackColor={{ false: "#767577", true: Colors.peach }}
        thumbColor={"#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch4}
        value={isEnabled4}
      />
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
      padding: 10,
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    titleText: {
      fontWeight: 'bold',
      justifyContent: 'center',
      fontSize:20,
      marginBottom: 10,
    },
    itemText: {
      fontSize:17,
      marginRight: 35,
      width: '70%',
      flexWrap: 'wrap',
    },
    circular: {
      width: 12,
      height: 12,
      borderColor: 'white',
      borderWidth: 2,
      borderRadius: 5,
    },
  });
