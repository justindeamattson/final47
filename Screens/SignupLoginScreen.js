// import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Colors from "../Themes/Colors";
import Images from "../Themes/Images";
export default function SignupLoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
      <Image style={styles.logoImage} source={Images.batteryLogo}/>
      <View style={styles.container2}>
        <Text style={styles.logInText}>Log In</Text>
      </View>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor= {Colors.gray}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor= {Colors.gray}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      {/* <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor= {Colors.gray}
          secureTextEntry={true}
        />
      </View> */}
 
      <TouchableOpacity style={styles.loginBtn} 
        onPress={() => navigation.navigate('Home')} >
        <Text style={{color: 'white'}}>LOG IN</Text>
        
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Your Password?</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "flex-start",
    width: '100%'
  },
  container2: {
    alignItems: "center",
    height: '10%',
    //</View>justifyContent: "center",
    width: '100%'
  },
  logInText: {
    fontWeight: 'bold',
    fontSize:40, 
    marginBottom: 20,
  },
  inputView: {
    backgroundColor: 'white',
    borderColor: Colors.gray,
    borderWidth: 2,
    borderRadius: 10,
    width: "70%",
    height: 45,
    marginBottom: 20,
    // alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    // padding: 1,
    marginLeft: 10,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: Colors.peach
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 30,
    backgroundColor: Colors.peach,
  },
  logoImage: {
      height: '6%',
      marginTop: 80,
      marginBottom: 120,
      // width: '100%',
      resizeMode: "contain",
      // aspectRatio: 6/2.5,
      // backgroundColor: 'blue'
    },
});