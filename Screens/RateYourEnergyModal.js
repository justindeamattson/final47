import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from "react-native";
import Colors from "../Themes/Colors";
import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';

const RateYourEnergyModal = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [sliderValue, setSliderValue] = useState(1);
  const [text, setText] = useState("");
  
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalContainer}>
          <Pressable
              onPress={() => navigation.navigate('home')}
              alignSelf= {'flex-end'}
            >
            <Ionicons name={'close-outline'} size={25}></Ionicons>
          </Pressable>
        <View style={styles.modalContentView}>
          <Text style={styles.modalText}>How are you feeling?</Text>
        <View height={'20%'} resizeMode={'contain'}>
          <Slider
              style={{width: 300, height: 80}}
              maximumValue={100}
              minimumValue={1}
              minimumTrackTintColor={Colors.peach}
              maximumTrackTintColor="#979797"
              value={sliderValue}
              onValueChange={
                  (sliderValue) => setSliderValue(sliderValue)
              }
          />
        </View>
        <Text style = {{fontSize: 20}}> 😔                       🙂                        🤗</Text>
        <Text style = {{fontSize: 20, color: "#979797"}}>  0                         50                       100</Text>

          <TextInput
              style={styles.input}
              marginTop={'10%'}
              placeholder="Change Status"
              onChangeText={text => setText(text)}
          />
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {setSliderValue(1); navigation.navigate('home', {status: text, number: sliderValue});}}
          >
          <Text style={styles.textStyle}>Save</Text>
        </Pressable>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    marginTop: 22,
    backgroundColor: Colors.background
  },
  modalContainer: {
    height: '50%',
    marginHorizontal: '3%',
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalContentView: {
    alignItems: "center",
    justifyContent: 'center'
  },
  button: {
    width: '50%',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: '5%',
  },
  buttonOpen: {
    backgroundColor: Colors.peach,
  },
  buttonClose: {
    backgroundColor: Colors.peach,
  },
  textStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 30
  },
  input: {
    height: 40,
    marginTop: 12,
    borderWidth: .25,
    width: '85%',
    padding: 10,
    borderRadius: 20,
    fontSize: 20
  },
  exitButton: {
    justifyContent: "flex-end"
  }
});

export default RateYourEnergyModal;