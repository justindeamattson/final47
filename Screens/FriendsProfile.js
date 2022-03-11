import { Button, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Pressable } from 'react-native';
import Colors from "../Themes/Colors"
import Images from "../Themes/Images"
import Fonts from "../Themes/Fonts"
import { Ionicons } from '@expo/vector-icons';
import TestGraph from '../components/TestGraph';

export default function FriendsProfile({ navigation, route, status, number }) {
    return (
        
        <SafeAreaView style={styles.container}>
            <View style = {{flexDirection: 'row',  marginTop: 25,
        marginBottom: 15}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style = {{marginLeft: 20}} >
                    <Ionicons name="chevron-back-outline" size = {30}  ></Ionicons>
                </TouchableOpacity>
                <Text style={styles.titleText}>{route.params.name}</Text>
            </View>
                  <Text style={styles.usernameText}>{route.params.username}</Text>
            
            <TestGraph parentToChild={route.params.number}/>
            <View style={styles.statusView}>
            <Text style={{color: Colors.gray,fontSize: 18, fontWeight: 'bold'}}>Status: </Text>
            <Text style={{color: Colors.peach, fontSize: 18,fontWeight: 'bold'}}>{route.params.status}</Text>
          </View>
          <View style={styles.statusView}>
            <Text style={{color: Colors.gray,fontSize: 18, fontWeight: 'bold'}}>Last Updated: </Text>
            <Text style={{color: Colors.peach, fontSize: 18,fontWeight: 'bold'}}>{route.params.lastUpdated}</Text>
          </View>
          
          <View style = {{flexDirection:'row', justifyContent: 'center'}}>
          <Pressable
        style={[styles.button, styles.buttonOpen]}
      >
        <Text style={styles.textStyle}>Call</Text>
      </Pressable>
      <Pressable
        style={[styles.button, styles.buttonText]}
      >
        <Text style={styles.textStyleText}>Text </Text>
      </Pressable>
      </View>
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 15,
      //alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: Colors.background,
    },
    button: {
        borderRadius: 20,
        padding: 20,
        width: '30%',
        elevation: 2,
        margin: '6%',
        borderColor: Colors.peach, 
        borderWidth:1,
      },
      buttonOpen: {
        backgroundColor: Colors.peach,
        
      },
      buttonClose: {
        backgroundColor: 'white',
       
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        fontSize:15,
        textAlign: "center"
      },
      textStyleText: {
        color: Colors.peach,
        fontWeight: "bold",
        fontSize:15,
        textAlign: "center"
      },
    itemContainer: {
        borderWidth: 0,
        width: '85%',
        padding: 14,
        borderRadius: 20,
        justifyContent: 'flex-start',
        backgroundColor: "#ffeee9",
        shadowColor: "#000000",
          shadowOpacity: 0.5,
          shadowRadius: 2,
          shadowOffset: {
            height: 1,
            width: 1
          },
        marginVertical: 15
      },
      titleText: {
        fontWeight: 'bold',
        fontSize:30,
      textAlign: 'center' ,
      marginLeft: '30%'
        
      },
      usernameText: {
        fontWeight: 'bold',
        fontSize:20,
        marginTop: 10,
        marginBottom: 15,
      textAlign: 'center' 
        
      },
    modalText: {
        marginTop: 20,
        marginBottom: 15,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: "center",
    },
    statusView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      statusView2: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 50,
        alignItems: 'center',
        justifyContent: 'center',
      },

  });