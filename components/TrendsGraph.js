import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons'
import SimpleSelectButton from 'react-native-simple-select-button';

import Images from "../Themes/Images"
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import { Dimensions } from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import Colors from '../Themes/Colors';
import Slider from '@react-native-community/slider';
import SliderComponent from './SliderComponent';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

function returnValue (displayGraph){
    if (displayGraph == "PageOne") {
        return <PageOne/>;
    } else if (displayGraph == "PageTwo"){
        return <PageTwo/>;

    } else if(displayGraph == "PageThree"){
        return <PageThree/>;
    } else if (displayGraph == "PageFour"){
        return <PageFour/>;
    } 
}

  const PageOne = () => {
      return (
        <View style={styles.graph}>
        <LineChart
    data={{
      labels: [  "5 Mar", "7 Mar", "9 Mar", "11 Mar"],
      datasets: [
        {
          data: [65, 75, 72, 84, 91, 100, 85]
        }
      ]
    }}
    width={Dimensions.get("window").width * .90} // from react-native
    height={270}
    yAxisLabel=""
    yAxisSuffix=""
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      //backgroundColor: "blue",
      backgroundGradientFrom: "#fff9f8",
      backgroundGradientTo: "#fff9f8",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 0) => "#fed6c9",
      labelColor: (opacity = 0) => 'black',
      style: {
        borderRadius: 16,
      },
      propsForDots: {
        r: "0",
        strokeWidth: "2",
        stroke: "#ffa726"
      },
      propsForLabels: {
        fontSize: 14,
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
      );

}
const PageTwo = () => {
    return (
        <View style={styles.graph}>
<LineChart
  data={{
    labels: ["Feb 17", "Feb 26",  "Mar 6", "Mar 11"],
    datasets: [
      {
        data: [71, 69, 44, 15, 91, 91, 85]
      }
    ]
  }}
  width={Dimensions.get("window").width * .90} // from react-native
  height={270}
  yAxisLabel=""
  yAxisSuffix=""
  yAxisInterval={1} // optional, defaults to 1
  chartConfig={{
    backgroundColor: "blue",
    backgroundGradientFrom: "#fff9f8",
    backgroundGradientTo: "#fff9f8",
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 0) => "#fed6c9",
    labelColor: (opacity = 0) => "black",
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "0",
      strokeWidth: "2",
      stroke: "#ffa726"
    },
    propsForLabels: {
      fontSize: 14,
    }
  }}
bezier
  style={{
    marginVertical: 8,
    borderRadius: 16
  }}
/>
</View>
    );
}

const PageThree = () => {
    return (
<View style={styles.graph}>
<LineChart
  data={{
    labels: ["Oct", "Nov", "Dec", "Jan", "Feb"],
    datasets: [
      {
        data: [55, 69, 60, 25, 86, 74, 85, 81]
        }
      
    ]
  }}
  width={Dimensions.get("window").width * .90} // from react-native
  height={270}
  yAxisLabel=""
  yAxisSuffix=""
  yAxisInterval={1} // optional, defaults to 1
  chartConfig={{
    backgroundColor: "blue",
    backgroundGradientFrom: "#fff9f8",
    backgroundGradientTo: "#fff9f8",
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 0) => "#fed6c9",
    labelColor: (opacity = 0) => "black",
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "0",
      strokeWidth: "2",
      stroke: "#ffa726"
    },
    propsForLabels: {
      fontSize: 14,
    }
  }}
  bezier
  style={{
    marginVertical: 8,
    borderRadius: 16
  }}


/>
</View>
    );

}

const PageFour = () => {
    return (
        <View style={styles.graph}>
<LineChart
  data={{
    labels: ["Apr", "Jul", "Oct", "Jan", "Mar"],
    datasets: [
      {
        data: [65, 49, 84, 83, 46, 55, 75, 79, 85, 92, 81, 74, 87]        }
    ]
  }}
  width={Dimensions.get("window").width * .90} // from react-native
  height={270}
  yAxisLabel=""
  yAxisSuffix=""
  yAxisInterval={1} // optional, defaults to 1
  chartConfig={{
    backgroundColor: "blue",
    backgroundGradientFrom: "#fff9f8",
    backgroundGradientTo: "#fff9f8",
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 0) => "#fed6c9",
    labelColor: (opacity = 0) => "black",
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "0",
      strokeWidth: "2",
      stroke: "#ffa726"
    },
    propsForLabels: {
      fontSize: 14,
    }
  }}
bezier
  style={{
    marginVertical: 8,
    borderRadius: 16
  }}
/>
</View>
    );

}

export default function TrendsGraph() {
    const [displayGraph, setDisplayGraph] = useState('PageOne');
    const [choice, setChoice] = useState('PageOne');

    return (
      <View style = {{backgroundColor: Colors.background}}>
      <Text style={styles.titleText}>My Trends</Text>
    {/* <View style={styles.overAll}> */}

<View style={styles.buttonsContainer}>
<SimpleSelectButton
  text="Week"
  textSize={14}
  buttonDefaultColor="#fed0c2"
  buttonSelectedColor="white"
  textDefaultColor="gray"
  textSelectedColor="black"
  isChecked={choice == 'PageOne'}//choice == 'PageOne'
  onPress={() => { setDisplayGraph('PageOne');setChoice('PageOne');}}
  />

<SimpleSelectButton
  text="1 Month"
  textSize={14}
  buttonDefaultColor="#fed0c2"
  buttonSelectedColor="white"
  textDefaultColor="gray"
  textSelectedColor="black"
  isChecked={choice == 'PageTwo'}//choice == 'PageOne'
  onPress={() => { setDisplayGraph('PageTwo');setChoice('PageTwo');}}
  />
<SimpleSelectButton
  text="6 Month"
  textSize={14}
  buttonDefaultColor="#fed0c2"
  buttonSelectedColor="white"
  textDefaultColor="gray"
  textSelectedColor="black"
  isChecked={choice == 'PageThree'}//choice == 'PageOne'
  onPress={() => { setDisplayGraph('PageThree');setChoice('PageThree');}}
  />
  <SimpleSelectButton
  text="1 Year"
  textSize={14}
  buttonDefaultColor="#fed0c2"
  buttonSelectedColor="white"
  textDefaultColor="gray"
  textSelectedColor="black"
  isChecked={choice == 'PageFour'}//choice == 'PageOne'
  onPress={() => { setDisplayGraph('PageFour');setChoice('PageFour');}}
  />


</View> 
    <View>
   {returnValue(displayGraph)}
    </View>
    <SliderComponent/>
</View>
// </View>
    );
}


const styles = StyleSheet.create({
    buttonsContainer: {
        //marginTop: 30,
        margin: 15,
        marginBottom: 15,

        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center',
        backgroundColor:'#fed0c2',
        borderRadius: 20,
        height: '10%',
    },
    loginScreenButton: {
        backgroundColor:'black',
    }, 
    graph: {
        margin: 15,
        marginBottom: 5,
        borderColor: Colors.peach,
        borderWidth: 1,
        borderRadius: 15,
        alignItems: 'center',

    }, 
    titleText: {
      fontWeight: 'bold',
      fontSize:30,
      marginTop: 68,
      marginBottom:20,
    textAlign: 'center' 
      
    },
    overAll:{
      justifyContent:'center',
    }, 
  });
