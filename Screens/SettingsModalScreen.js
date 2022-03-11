import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Switch, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Colors from "../Themes/Colors"
import Images from "../Themes/Images";
import SettingComponent from '../components/SettingComponent';

const SettingsModalScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const [isEnabled1, setIsEnabled1] = useState(true);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
  const [isEnabled4, setIsEnabled4] = useState(true);
  const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);

    return (
    <View>
      <View style={styles.centeredView}>
        <Modal
            animationType="none"
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.recommendationsView}>
      
        <View style = {{flexDirection: 'row',
        marginBottom: 17, alignItems:'center'}}>
                <Pressable onPress={() => setModalVisible(!modalVisible)} >
                    <Ionicons name="chevron-back-outline" size = {30}  ></Ionicons>
                </Pressable>
                  <Text style={styles.titleText}>Settings</Text>
            </View>
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
              <Text style={styles.itemText}>Nudge me to input my energy every hour </Text>
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
        </Modal>
        </View>
        <View flexDirection= {'row'} justifyContent ={'flex-start'} alignItems= {'center'} marginTop= {50}>
        <Image style={styles.logoImage} source={Images.batteryLogo}/>
        <Pressable
        style={[styles.icon, styles.icon]}
        onPress={() => setModalVisible(true)}
        >
            <Ionicons name="settings-outline" color={Colors.peach} size={30}/>
        </Pressable>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
 
  modalView: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 20,
    //padding: 10,
    elevation: 2,
    marginLeft: '85%' ,
    marginTop: '5%'
  },
  buttonOpen: {
    // backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  recommendationsView: {
    // // height: '25%',
    // width: '85%',
    // alignItems: 'center',
    // justifyContent: 'center'
    padding: 30,
    marginTop: 50,
  },
  container: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 10,
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
    fontSize:30,
    //marginBottom: 10,
    marginLeft: 75,
    textAlign: 'center'
  },
  logoImage: {
    
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
  logoImage:{
    //  height:'20%', 
     resizeMode: 'contain',
     width: '65%',
     marginLeft: '17%',
     marginBottom: 5,
  },
  icon:{
    marginLeft: 15,
  }
});

export default SettingsModalScreen;