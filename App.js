// place at top of app.js

if (__DEV__) {
  const ignoreWarns = ["VirtualizedLists should never be nested inside plain ScrollViews"];

  const errorWarn = global.console.error;
  global.console.error = (...arg) => {
    for (const error of ignoreWarns) {
      if (arg[0].startsWith(error)) {
        return;
      }
    }
    errorWarn(...arg);
  };
}
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigation from './App/Navigations/TabNavigation';
import { createStackNavigator } from '@react-navigation/stack'

import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { useFonts } from 'expo-font';
import { UserLocationContext } from './App/Context/UserLocationContext';
import Colors from './App/Shared/Colors';
import { ActivityIndicator } from 'react-native';
import { firebase } from './config'

import Login from './App/Screens/Login'
import Header from './App/Components/Login/Header';
import Register from './App/Screens/Register';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [initializing, setInitializing] = useState(false)
  const [user, setUser] = useState()
  const Stack = createStackNavigator();
  function onAuthStateChanged(user) {
    setUser(user)
    initializing ? setInitializing(false) : null
  }


  useEffect(() => {


    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      const subscribe = firebase.auth().onAuthStateChanged(onAuthStateChanged)
      return subscribe
      console.log('Hello');
      subcribeToFirebase()
    })();
  }, []);

  // if (initializing) return null
  if (!user) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="login"
            component={Login}
            options={{
              headerTitle: () => <Header title={'iReporta'} />,
              headerStyle: {
                height: 150,
                borderBottomRightRadius: 50,
                borderBottomLeftRadius: 50,
                backgroundColor: 'skyblue',
                shadowColor: 'black',
                elevation: 25
              }
            }}
          />
          <Stack.Screen name='register' component={Register} />
        </Stack.Navigator>
      </NavigationContainer>

    )
  }
  return (
    <View style={styles.container}>
      <UserLocationContext.Provider value={{ location, setLocation }}>
        <NavigationContainer>
          <TabNavigation />

        </NavigationContainer>
      </UserLocationContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingTop: 20
  },
});
