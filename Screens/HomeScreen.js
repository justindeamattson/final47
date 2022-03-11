import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import Colors from "../Themes/Colors"
import Images from "../Themes/Images"
import Fonts from "../Themes/Fonts"
import HomeScreenRecommendations from '../components/HomeScreenRecommendations';
import TabBar from '../components/TabBar';
import TestGraph from '../components/TestGraph';
import { useRoute } from '@react-navigation/native';
import SettingsModalScreen from './SettingsModalScreen';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


export default function HomeScreen({navigation, props, route}) {
  console.log(route)
    return (
        <View style={styles.container}>
            <View justifyContent={'flex-end'} >
              <SettingsModalScreen/>
            </View>
          <TouchableOpacity onPress={() => navigation.navigate('check-in')}>
          <TestGraph parentToChild = {route.params?.number ?? 75 }/>
          </TouchableOpacity>
          {/* </TouchableOpacity> */}
          <View style={styles.statusView}>
            <Text style={{color: Colors.gray,fontSize: 18, fontWeight: 'bold'}}>Status: </Text>
            <Text style={{color: Colors.peach, fontSize: 18,fontWeight: 'bold'}}>{route.params?.status ?? 'Excited for Friday'}</Text>
            </View>
          <View style = {{flexDirection: 'row', alignItems: 'center',  marginBottom: 15}}>
        <Text style={styles.titleText}>My Recommendations</Text>
        <Button title="See More"  color = {Colors.peach} onPress={() => navigation.navigate('recs')} />
        </View>
          <HomeScreenRecommendations/>
          {/* <TabBar/> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      // width:'100%',
      // height: undefined,
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 15,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: Colors.background,
    },
    statusView: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 30
    },
    logoImage: {
      height: '6%',
      // marginTop: 40,
      // marginBottom: 20, 
      // width: '100%',
      resizeMode: "contain",
      // aspectRatio: 6/2.5,
      // backgroundColor: 'blue'
    },
    titleText: {
      fontWeight: 'bold',
      fontSize:23, 
      marginRight: 15,

    },
  });
