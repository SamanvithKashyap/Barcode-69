import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity, Image} from 'react-native';
import ScanScreen from './screens/ScanScreen';

export default class App extends React.Component {
  render(){
    return (
      <View>

      <View>
      <ScanScreen />
      </View>
      </View>


      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
