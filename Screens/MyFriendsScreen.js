import { Button, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Pressabler } from 'react-native';
import Colors from "../Themes/Colors"
import Images from "../Themes/Images"
import Fonts from "../Themes/Fonts"
import { Ionicons } from '@expo/vector-icons';


export default function MyFriendsScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
             <View style = {{flexDirection: 'row',  marginTop: 25,
        marginBottom: 15}}>
             <Text style={styles.titleText}>My Friends</Text>
                <TouchableOpacity onPress={() => navigation.navigate('add')} style = {{marginLeft: 60, marginRight: 30}} >
                    <Ionicons name="add-outline" size = {30}  ></Ionicons>
                </TouchableOpacity>
               
            </View>

            <View style={styles.itemContainer}>
            <TouchableOpacity
        onPress={() => navigation.navigate('FriendsProfile', {name:'Tara', username: '@taraHorseGirl', status: 
        'I am happy', number: 85, lastUpdated: '1 hour ago'})} >
                <View style={{flexDirection:'row', width:'80%'}}>
                        <Ionicons name="happy-outline" color={Colors.peach} size={70}/>
                        <View>
                        <Text style={{marginVertical: 5, fontSize: '15', fontWeight: 'bold'}}>
                            Tara
                        </Text>
                        <Text style={{marginVertical: 5, fontSize: '25', fontWeight: 'bold'}}>
                            85%
                        </Text>
                    </View>
                </View>
                </TouchableOpacity>
            </View>
            <View style={styles.itemContainer}>
            <TouchableOpacity
        onPress={() => navigation.navigate('FriendsProfile', {name:'Yuyu', username: '@yuyuisthegoat', status: 
        'I love my section', number: 80, lastUpdated: '1 hour ago'})} >
                <View style={{flexDirection:'row', width:'80%'}}>
                        <Ionicons name="happy-outline" color={Colors.peach} size={70}/>
                        <View>
                        <Text style={{marginVertical: 5, fontSize: '15', fontWeight: 'bold'}}>
                            Yuyu
                        </Text>
                        <Text style={{marginVertical: 5, fontSize: '25', fontWeight: 'bold'}}>
                            80%
                        </Text>
                    </View>
                </View>
                </TouchableOpacity>
            </View>
            <View style={styles.itemContainer}>
            <TouchableOpacity
        onPress={() => navigation.navigate('FriendsProfile', {name:'Justin', username: '@justinistheman', status: 
        'Feeling Tired', number: 40, lastUpdated: '4 hours ago'})} >
                <View style={{flexDirection:'row', width:'80%'}}>
                        <Ionicons name="sad-outline" color={Colors.peach} size={70}/>
                        <View>
                        <Text style={{marginVertical: 5, fontSize: '15', fontWeight: 'bold'}}>
                            Justin
                        </Text>
                        <Text style={{marginVertical: 5, fontSize: '25', fontWeight: 'bold'}}>
                            40%
                        </Text>
                    </View>
                </View>
                </TouchableOpacity>
            </View>
            <View style={styles.itemContainer}>
            <TouchableOpacity
        onPress={() => navigation.navigate('FriendsProfile', {name:'Liz', username: '@lizissecond', status: 
        'WOOO', number: 40 , lastUpdated: '1 day ago'})} >
                <View style={{flexDirection:'row', width:'80%'}}>
                        <Ionicons name="sad-outline" color={Colors.peach} size={70}/>
                        <View>
                        <Text style={{marginVertical: 5, fontSize: '15', fontWeight: 'bold'}}>
                            Liz
                        </Text>
                        <Text style={{marginVertical: 5, fontSize: '25', fontWeight: 'bold'}}>
                            40%
                        </Text>
                    </View>
                </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 15,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: Colors.background,
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
    modalText: {
        marginTop: 20,
        marginBottom: 15,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: "center",
    },
    
  });