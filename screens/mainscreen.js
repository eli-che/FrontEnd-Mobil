import * as React from 'react';
import { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';


class mainScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           username: null,
        };
      }
      
      componentDidMount() {
        {
            return fetch('http://192.168.0.34:8080/dashboard')
              .then((response) => response.json())
              .then((responseJson) => {
                  console.log(responseJson.user)
                  this.setState({username: responseJson.user});
              })
              .catch((error) => {
                console.error(error);
              });
          }
      }

      LogoutFromApi = () => {
        return fetch('http://192.168.0.34:8080/logout')
          .then((response) => response.json())
          .then((responseJson) => {
              console.log(responseJson)
              this.props.navigation.navigate('loginScreen')
            return responseJson;
          })
          .catch((error) => {
            console.error(error);
          });
    }
    
    render() {
    return (
        <View style={styles.screen}>
            <Text style={styles.paragraph}>You are logged in as: {this.state.username}</Text>
            <TouchableOpacity 
         onPress = {this.LogoutFromApi}
         style={styles.buttonContainer}>
             <Text style={styles.buttonText}>Logout</Text>
         </TouchableOpacity>
         <TouchableOpacity 
         onPress={() => this.props.navigation.navigate('loginScreen')}
         style={styles.buttonContainer}>
             <Text style={styles.buttonText}>Login</Text>
         </TouchableOpacity>
        </View>
    );
    }
}


const styles = StyleSheet.create({
    screen: { 
        flex: 1,
        padding: 100,
        alignItems: 'center'
    },
    form: {
        margin: 60
    },
    formControl: {
        width: '100%',
        padding: 0
    },
    label: {
        marginVertical: 8
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(200,200,200,0.2)',
        marginBottom: 20,
        color: '#000000',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF'
    }
});

export default mainScreen;  

