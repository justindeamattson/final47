
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FriendsProfile from './FriendsProfile';
import MyFriendsScreen from './MyFriendsScreen';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './HomeScreen';
import RecommendationsScreen from './RecommendationsScreen';
import Settings from './Settings';
import RateYourEnergyModal from './RateYourEnergyModal';


function HomeNavigator(route) {
  // console.log(route.route)
  return (
    // <View style={styles.container}>         
    //   <TabBar/>
    // </View>
    // <TabBar/>
    <NavigationContainer independent={true}>
        
      <Stack.Navigator screenOptions={{

    headerShown: false
  }} >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={route.route.params}
        />
             <Stack.Screen name="Settings" component={Settings} />

         <Stack.Screen name="FriendsProfile" component={FriendsProfile} />
        
         <Stack.Screen name="rate" component={RateYourEnergyModal} />
         <Stack.Screen name="Recommendations" component={RecommendationsScreen} />

         
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const Stack = createNativeStackNavigator( );
export default HomeNavigator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: Colors.background,

  },
});
