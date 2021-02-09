import * as React from 'react';
import { View, StatusBar} from 'react-native';

//navigation imports
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { mainBlue, secondBlue } from './utils/colors';

import Home from './components/Home';
import Soundboard from './components/Soundboard';
import Contact from './components/Contact';

// create status bar
function MyStatusBar({ backgroundColor, ...props }) {
  return (
    <View>
      <StatusBar translucent backgroundColor={mainBlue} {...props} />
    </View>
  )
}

// create theme for navigation container
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: secondBlue,
    background: mainBlue,
    card: 'white',
    border: mainBlue,
    text: mainBlue,
  },
};

// create DRAWER navigator
const Drawer = createDrawerNavigator();

// create STACK navigator
enableScreens();
const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <Drawer.Navigator 
        initialRouteName="Domů"
        >
        <Drawer.Screen name="Domů" component={Home} />
        <Drawer.Screen name="Kontakt" component={Contact} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyStatusBar />
      <Stack.Navigator>
        <Stack.Screen 
            name="HomeScreem" 
            component={HomeScreen} 
            options={() => ({
              title: '',
              headerStyle: {
                backgroundColor: mainBlue,
              },
              headerTintColor: secondBlue,
            })}/>
        <Stack.Screen 
            name="Soundboard" 
            component={Soundboard} 
            options={{
              title: 'Seznam hlášek',
              headerStyle: {
                backgroundColor: mainBlue,
              },
              headerTintColor: secondBlue,
            }}/>
        <Stack.Screen 
            name="Kontakt" 
            component={Contact} 
            options={{
              title: 'Kontakt',
              headerStyle: {
                backgroundColor: mainBlue,
              },
              headerTintColor: secondBlue,
            }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}