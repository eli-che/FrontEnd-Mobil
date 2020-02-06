import * as React from 'react';
import { useState, Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';

class loginScreen extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
           username: null,
           password: null,
        };
      }
    
      componentDidMount() {
        {
            return fetch('http://192.168.0.34:8080/dashboard')
              .then((response) => response.json())
              .then((responseJson) => {
                  console.log(responseJson.user);
                  if(responseJson.user != null){
                    this.props.navigation.navigate('mainScreen')
                  }
              })
              .catch((error) => {
                console.error(error);
              });
          }
      }

    postUserLoginFromApiAsync = () => {
     //   const { username, password } = this.state
     console.log(this.state);
        var username = this.state.username;
        var password = this.state.password;
        fetch('http://192.168.0.34:8080/login', {
            method: 'POST',
             headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
                body: JSON.stringify({
                    username: username,
                    password: password,
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
        console.log(responseJson.status);
        if (responseJson.status == true){
            this.props.navigation.navigate('mainScreen')
        }
        alert(responseJson.msg);
    })
    }

    render () {
    return (
        <ScrollView>
    <View style={styles.form}>
        <View style={styles.formControl}>
            <Text style={styles.label}>Username</Text>
            <TextInput 
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            returnKeyType="next"
            style={styles.input}/>
        </View>
        <View style={styles.formControl}>
            <Text style={styles.label}>Password</Text>
            <TextInput
            onChangeText={(password) => this.setState({password})}
            value={this.state.password} 
            returnKeyType="next"
            secureTextEntry
            style={styles.input}/>
        </View>
        <View style={styles.formControl}>
            <TouchableOpacity 
            onPress = {this.postUserLoginFromApiAsync}
            style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    </View>
        </ScrollView>
    );
    }  
};

const styles = StyleSheet.create({
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

export default loginScreen;  