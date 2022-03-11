
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FriendsProfile from './FriendsProfile';
import MyFriendsScreen from './MyFriendsScreen';
import { StyleSheet, Text, View, Button } from 'react-native';
import AddFriend
 from './AddFriend';
function FriendsNavigator() {
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
          name="MyFriendsScreen"
          component={MyFriendsScreen}
          
        />
         <Stack.Screen name="FriendsProfile" component={FriendsProfile} 
         />
         <Stack.Screen name="add" component={AddFriend} 
         />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const Stack = createNativeStackNavigator( );
export default FriendsNavigator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: Colors.background,

  },
});
