import React, { Component } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import RideScreen from "../screens/Ride";
import RideHistoryScreen from "../screens/RideHistory";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;


               if (route.name === "Ride") {
                iconName = "bicycle";
               } else if (route.name === "Ride History") {
                iconName = "time";
               }

              return (
                <Ionicons
                  name={iconName}
                  size={size}
                  color={color}
                  size={size}
                />
              );
            }
          })}
          tabBarOptions={{
            activeTintColor: "purple",
            inactiveTintColor: "red",
            style: {
              height: 100,
              borderTopWidth: 0,
              backgroundColor: "yellow"
            },
            labelStyle: {
              fontSize: 30,
              fontFamily: "Rajdhani_600SemiBold"
            },
            labelPosition: "below-icon",
            tabStyle: {
              alignItems: "center",
              justifyContent: "center"
            }
          }}
        >
          <Tab.Screen name="Ride" component={RideScreen} />
          <Tab.Screen name="Ride History" component={RideHistoryScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
