import * as React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Login from './screens/auth/Login';
import Navigation from './navigation/navigation';
import { store } from './_redux/store'

export default function App() {
  return (
    <>
      <Provider store={store}>
      <StatusBar  
                    backgroundColor = "#b3e6ff"  
                    barStyle = "dark-content"   
                    hidden = {true}    
                    translucent = {true}  
                />  
        <Navigation />
        {/* <Login /> */}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   backgroundColor: '#ecf0f1',
  //   padding: 8,
  // },
  // paragraph: {
  //   margin: 24,
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
});
