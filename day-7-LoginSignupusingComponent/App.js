import { React, useState } from 'react';
import { View, Button, TextInput, StyleSheet, Text, FlatList } from 'react-native';
import GettingStartedPage from './components/GettingStartedPage.js';
import SignupPage from './components/SignupPage.js';
import LoginPage from './components/LoginPage.js';
import WelcomePage from './components/WelcomePage.js';
import Card from './components/Card.js';

const App = () => {
  const [currentPage, setCurrentPage] = useState('GettingStarted');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [savedname, setSavedName] = useState('')
  const [savedemail, setSavedEmail] = useState('')
  const [savedpassword, setSavedPassword] = useState('')

  const OnGetStarted = () => {
    setCurrentPage('Signup');
  };
  
  const OnSignup = () =>{
    setSavedEmail(email);
    setSavedPassword(password);
    setSavedName(name);
    setName('');
    setPassword('');
    setEmail('');
    setCurrentPage('Login');
  };

  const OnLogin = () =>{
    if (email === savedemail && password === savedpassword)
      setCurrentPage('Welcome'); 
    else
      alert('Invalid username or password');
  };

  const OnProduct = () => {
    setCurrentPage('Product');
  };
  
  const OnPrevious = () => {
    setCurrentPage('Login');
  };

  const data=[
    {id: '1', title: "object1", price:"2$"},
    {id: '2', title: "object2", price:"8$"},
    {id: '3', title: "object3", price:"12$"},
  ];
  
  const renderItem=({item})=>(
    <Card title={item.title} price={item.price}/>
  );
  
  if (currentPage === 'GettingStarted')
    return <GettingStartedPage ToNext={OnGetStarted}/>;

  else if(currentPage === 'Signup')
    return <SignupPage ToNext={OnSignup}/>;
  
  else if(currentPage === 'Login')
    return <LoginPage ToNext={OnLogin}/>;

  else if(currentPage === 'Welcome')
    return <WelcomePage username={name} ToNext={OnProduct} ToPrevious={OnPrevious} />;

  else if(currentPage === 'Product')
    return(
      <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item)=>item.id}
      />
      <Button title="Log Out" onPress={OnPrevious} />
      </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;