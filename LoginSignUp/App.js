import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Text } from 'react-native';

const App = () => {
  const [currentPage, setCurrentPage] = useState('GettingStarted');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signup = () => {
    setCurrentPage('Signup');
  };
  
  const handleSignup = () => {
    setCurrentPage('Login');
    setEmail('');
    setPassword('');
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('Dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('GettingStarted');
  };

  if (currentPage === 'GettingStarted') {
    return (
      <View style={styles.container}>
        <Button title="Getting Started" onPress={signup} />
      </View>
    );
  } else if (currentPage === 'Signup') {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}    
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Submit" onPress={handleSignup} />
      </View>
    );
  } else if (currentPage === 'Login') {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    );
  } else if (currentPage === 'Dashboard') {
    return (
      <View style={styles.container}>
        <Text font="san-serif">Welcome!</Text>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '50%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default App;