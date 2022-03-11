import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from "react-native";
import React, {useState} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Colors from "../Themes/Colors"
import Images from "../Themes/Images"
import Fonts from "../Themes/Fonts"
import Slider from '@react-native-community/slider';

//Screens
import RateYourEnergyModal from "../Screens/RateYourEnergyModal";
import TrendsGraph from "./TrendsGraph";
import HomeScreen from "../Screens/HomeScreen";
import MyFriendsScreen from "../Screens/MyFriendsScreen";
import FriendsNavigator from "../Screens/FriendsNavigator";
import HomeNavigator from "../Screens/HomeNavigator";
import RecommendationsScreen from "../Screens/RecommendationsScreen";
//Screen Names
const homeScreenName = 'HomeScreenName'
const myFriends = "MyFriendsScreen"
const trendsGraphName = "TrendsGraphName"
const rateEnergyMoName = "RateYourEnergyModalName"


const Tab = createBottomTabNavigator();

export default function TabBar() {
  return (
    <NavigationContainer independent={true}>
        <Tab.Navigator
            initialRouteName= "home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size }) => {
                    let iconName;
                    if (route.name === "friends") {
                        iconName = focused
                            ? "people"
                            : "people-outline";
                            size = 30;
                    }
                    else if (route.name === "home") {
                      iconName = focused
                            ? "home"
                            : "home-outline";
                            size = 30;
                  } 
                else if (route.name === "check-in") {
                  iconName = 'add-circle';
                  size = 55;
              }
              else if (route.name === "recs") {
                iconName = focused ? 'checkmark-done' : 'checkmark-done-outline';
                size =30;
            }
                  else if (route.name === "my trends") {
                    iconName = focused ? 'bar-chart' : 'bar-chart-outline';
                    size = 30;
                }
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={Colors.peach} ></Ionicons>
                },
                tabBarShowLabel: true,
                tabBarActiveTintColor: Colors.peach,
      tabBarInactiveTintColor: 'gray',
                tabBarLabelStyle: {
                  margin: 0,
                  fontSize: 13,
                },
                tabBarShowLabelColor: 'white',
                headerShown: false,
                tabBarStyle: {
                  height: '13%',
                  backgroundColor: "white",
                  borderTopWidth: 0,
                  borderRadius: 30,
                  elevation: 0,
      shadowColor: "#000000",
      shadowOpacity: 0.5,
      shadowRadius: 2,
      shadowOffset: {
        height: 1,
        width: 1
      }
                },
                
            })}

        >
            <Tab.Screen name="friends" component={FriendsNavigator} />
            <Tab.Screen name="home" component={HomeScreen} />
            <Tab.Screen name="check-in" component={RateYourEnergyModal} />
            <Tab.Screen name="recs" component={RecommendationsScreen} />
            <Tab.Screen name="my trends" component={TrendsGraph} />
        </Tab.Navigator>
    </NavigationContainer>
    );
  };