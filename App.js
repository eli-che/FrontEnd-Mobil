import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavStack from './routes/stacknavigation';
import { withNavigation } from 'react-navigation';

export default class App extends React.Component {
  render() {
  return (
    <View style={styles.screen}>
      <NavStack/>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

































/* import * as Permissions from 'expo-permissions';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            ready: false,
            where: {lat:null, lng:null},
            error: null
        }
    }
    componentDidMount(){
        let geoOptions = {
            enableHighAccuracy: true,
            timeOut: 20000,
            maximumAge: 60 * 60 * 24
        };
        this.setState({ready:false, error: null });
        navigator.geolocation.getCurrentPosition( this.geoSuccess, 
                                                this.geoFailure,
                                                geoOptions);
    }
    geoSuccess = (position) => {
        console.log(position.coords.latitude);
        
        this.setState({
            ready:true,
            where: {lat: position.coords.latitude,lng:position.coords.longitude }
        })
    }
    geoFailure = (err) => {
        this.setState({error: err.message});
    }
    render() {
        return (
            <View style={styles.container}>
                { !this.state.ready && (
                <Text style={styles.big}>Using Geolocation in React Native.</Text>
                )}
                { this.state.error && (
                <Text style={styles.big}>{this.state.error}</Text>
                )}
                { this.state.ready && (
                    <Text style={styles.big}>{
                    `Latitude: ${this.state.where.lat}
                    Longitude: ${this.state.where.lng}`
                    }</Text>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    big: {
        fontSize: 48
    }
});
*/

/* 
import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class App extends Component {
  state = {
    location: null,
    regionName: null,
    errorMessage: null,
  };

  UNSAFE_componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    let regionName = await Location.reverseGeocodeAsync(location.coords);
    this.setState({ location });
    this.setState({regionName});
  };

  render() {
    let text = 'Waiting..';
    let text2 = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
      text2 = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
      text2 = JSON.stringify(this.state.regionName);
      console.log(this.state.location)
      console.log(this.state.regionName);
    }

    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>{text}</Text>
        <Text style={styles.paragraph}>{text2}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});


*/

/* import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/mainscreen';
import RegisterScreen from './screens/registerscreen';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';




export default class App extends React.Component {

  state = {
    location: {},
    errorMessage: '',
  };

  UNSAFE_componentWillMount() {
    this._getLocation();
  }
  
  _getLocation = async () => {
    const { status } = await Permissions.getAsync(Permissions.LOCATION);
  
  if (status !== 'granted') {
    console.log('Permission not granted');
  }

  const userLocation = await Location.getCurrentPositionAsync();
  console.log(location);

  }
  render() {
  return (
    <View style={styles.screen}>
      <RegisterScreen/>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
*/