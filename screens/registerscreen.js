import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';

const RegisterScreen = props => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    function getUserFromApiAsync() {
        return fetch('http://192.168.0.34:8080/api')
          .then((response) => response.json())
          .then((responseJson) => {
              console.log(responseJson.user[1]['username'])
            return responseJson.user;
          })
          .catch((error) => {
            console.error(error);
          });
      }


      function postUserRegisterFromApiAsync() {
        fetch('http://192.168.0.34:8080/register', {
            method: 'POST',
             headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password,
                    password2: password2,
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
        alert(responseJson.msg);
    })
    }

    return (
        <ScrollView>
    <View style={styles.form}>
        <View style={styles.formControl}>
            <Text style={styles.label}>Username</Text>
            <TextInput 
            onChangeText={text => setUsername(text)}
            value={username}
            returnKeyType="next"
            style={styles.input}/>
        </View>
        <View style={styles.formControl}>
            <Text style={styles.label}>Email</Text>
            <TextInput
            onChangeText={text => setEmail(text)}
            value={email} 
            returnKeyType="next"
            style={styles.input}/>
        </View>
        <View style={styles.formControl}>
            <Text style={styles.label}>Password</Text>
            <TextInput
            onChangeText={text => setPassword(text)}
            value={password} 
            returnKeyType="next"
            secureTextEntry
            style={styles.input}/>
        </View>
        <View style={styles.formControl}>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
            onChangeText={text => setPassword2(text)}
            value={password2} 
            returnKeyType="go"
            secureTextEntry
            style={styles.input}/>
        </View>
        <View style={styles.formControl}>
            <TouchableOpacity 
            onPress = {postUserRegisterFromApiAsync}
            style={styles.buttonContainer}>
                <Text style={styles.buttonText}>REGISTER</Text>
            </TouchableOpacity>
        </View>
    </View>
        </ScrollView>
    )
    
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

export default RegisterScreen;  