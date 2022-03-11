import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignupLoginScreen from './Screens/SignupLoginScreen';
import RateYourEnergyModal from './Screens/RateYourEnergyModal';
import HomeScreen from './Screens/HomeScreen';
import RecommendationsScreen from './Screens/RecommendationsScreen';
import Colors from './Themes/Colors';
import HomeScreenRecommendations from './components/HomeScreenRecommendations';
import TrendsGraph from './components/TrendsGraph'
import TestGraph from './components/TestGraph'
import Settings from './Screens/Settings';
import Slider from './components/SliderComponent'
import TabBar from './components/TabBar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FriendsProfile from './Screens/FriendsProfile';
import MyFriendsScreen from './Screens/MyFriendsScreen';
console.disableYellowBox = true;

export default function App() {
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
          name="SignUp"
          component={SignupLoginScreen}
        />
        <Stack.Screen name="Home" component={TabBar} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,

  },
});
