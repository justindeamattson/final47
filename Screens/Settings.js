import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from "../Themes/Colors"
import Images from "../Themes/Images"
import SettingComponent from '../components/SettingComponent';

export default function Settings() {
    return (
        <View style={styles.container}>
          <Image style={styles.logoImage} source={Images.batteryLogo}/>
        <SettingComponent/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'100%',
      alignItems: 'center',
      justifyContent: 'center', 
    },
    statusView: {
      flexDirection: 'row',
      marginBottom: '2%'
    },
    logoImage: {
      height: '20%',
      width: undefined,
      resizeMode: "contain",
      aspectRatio: 1,
    },
    titleText:{
        //marginBottom: 15,
        marginTop: 0,
        textAlign: "center",
        color: '#1D232E',
        fontSize: 25,
        //fontFamily: 'Roboto'
    }
  });