import React, { useState } from 'react';
import { View, Text, TextInput, Button,ImageBackground, TouchableOpacity,Alert } from 'react-native';
import styles from '../styles/styles';
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function SignUp({navigation})  {
    //const [page, setPage] = useState('GettingStarted');
    //const [userDetails, setUserDetails] = useState({});
  //const [form, setForm] = useState({ username: '', password: '', confirmPassword: '', email: '' });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
   //const { username, password, confirmPassword, email } = form;
  
   const handleGotoLoginPage = async () => {
    await AsyncStorage.setItem(
      "userDetail",
      JSON.stringify({
        username,
        email,
        password,
      })
    );
    console.log("I m from signup page");
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setEmail('');
    navigation.navigate('Login');
  }

 

   

      return(
        
        <View style ={styles.signupcontainer}>
          <View style ={styles.SignUpBox}>
          <Text style={styles.txt}>Sign Up</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]} onPress={handleGotoLoginPage}>
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
          </View>
         </View>
        
      );
  }