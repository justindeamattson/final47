import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { Text, View, } from 'react-native';
import {Dimensions} from 'react-native';

import React from 'react';
import { StyleSheet} from "react-native";
import Svg, { G, Circle } from "react-native-svg";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Colors2 from "../Themes/Colors"


export default function TestGraph({parentToChild}) {
    const radius = 70;
    const circleCircumference = 2 * Math.PI * radius;
  
    const groceries = 0;
    const bills = Math.round(parentToChild)
    const regular = 100 -bills;
    const total = 100;
  
    const groceriesPercentage = (groceries / total) * 100;
    const billsPercentage = (bills / total) * 100;
    const regularPercentage = (regular / total) * 100;
  
    const groceriesStrokeDashoffset =
      circleCircumference - (circleCircumference * groceriesPercentage) / 100;
    const billsStrokeDashoffset =
      circleCircumference - (circleCircumference * billsPercentage) / 100;
    const regularStrokeDashoffset =
      circleCircumference - (circleCircumference * regularPercentage) / 100;
  
    const groceriesAngle = (groceries / total) * 360;
    const billsAngle = (bills / total) * 360;
    const regularAngle = groceriesAngle + billsAngle;
  
    return (
      <View style={styles.container}>
        <View style={styles.graphWrapper}>
          <Svg height="160" width="160" viewBox="0 0 180 180">
            <G rotation={-90} originX="90" originY="90">
              { total === 0 ? (
                <Circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke="#F1F6F9"
                  fill="transparent"
                  strokeWidth="40"
                />
               ) : (
                 <>
                   <Circle
                    cx="50%"
                    cy="50%"
                    r={radius}
                    stroke="#F05454"
                    fill="transparent"
                    strokeWidth="40"
                    strokeDasharray={circleCircumference}
                    strokeDashoffset={groceriesStrokeDashoffset}
                    rotation={0}
                    originX="-90"
                    originY="-90"
                    strokeLinecap="round"
                   />
                   <Circle
                    cx="50%"
                    cy="50%"
                    r={radius}
                    stroke="#FDA285"
                    fill="transparent"
                    strokeWidth="40"
                    strokeDasharray={circleCircumference}
                    strokeDashoffset={billsStrokeDashoffset}
                    rotation={groceriesAngle}
                    originX="90"
                    originY="90"
                    strokeLinecap="round"
                   />
                   <Circle
                    cx="50%"
                    cy="50%"
                    r={radius}
                    stroke={Colors2.gray}
                    fill="transparent"
                    strokeWidth="40"
                    strokeDasharray={circleCircumference}
                    strokeDashoffset={regularStrokeDashoffset}
                    rotation={regularAngle}
                    originX="90"
                    originY="90"
                    strokeLinecap="round"
                  />
                 </>
               )
              }
            </G>
          </Svg>
          <Text style={styles.label}>{bills} %</Text>
        </View>
      </View>
    );
  
}

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      padding: 20,
      justifyContent: "flex-start",
      alignItems: "center",
    },
    graphWrapper: {
      alignItems: "center",
      justifyContent: "center",
      // height: '20%',
      // width: '70%',
      aspectRatio: 1
    },
    label: {
      position: "absolute",
      textAlign: "center",
      fontWeight: "700",
      fontSize: 24,
    },
  });
  
