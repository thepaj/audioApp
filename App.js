import * as React from 'react';
import { View, StatusBar, Image, TouchableOpacity } from 'react-native';

//navigation imports
import 'react-native-gesture-handler';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  useIsDrawerOpen
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { mainBlue, secondBlue } from './utils/colors';

import Home from './components/Home';
import Soundboard from './components/Soundboard';
import Contact from './components/Contact';

import SHARE from './utils/images/icons/share.png';
import MENU from './utils/images/icons/menu.png';

function MyStatusBar({ backgroundColor, ...props }) {
  return (
    <View>
      <StatusBar translucent backgroundColor={mainBlue} {...props} />
    </View>
  )
}

// create DRAWER navigator
const Drawer = createDrawerNavigator();

// create STACK navigator
enableScreens();
const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <Drawer.Navigator 
        initialRouteName="Home" >
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Soundboard" component={Soundboard} />
        <Drawer.Screen name="Kontakt na me" component={Contact} />
    </Drawer.Navigator>
  );
}

export default function App(props) {
  return (
    <NavigationContainer>
      <MyStatusBar />
      <Stack.Navigator>
        <Stack.Screen 
            name="HomeScreem" 
            component={HomeScreen} 
            options={() => ({
              title: '',
              color: 'white',
              borderTopWidth: 0,
              elevation: 0,
              headerStyle: {
                backgroundColor: mainBlue,
                borderTopWidth: 0,
                elevation: 0,
              },
              headerRight: () => (
                <TouchableOpacity>
                    <Image source={SHARE} style={{ width: 35, height: 35 }}/>
                </TouchableOpacity>
              ),
            })}/>
        <Stack.Screen 
            name="Soundboard" 
            component={Soundboard} 
            options={{
              title: 'Soundboard',
              headerStyle: {
                backgroundColor: mainBlue,
                borderTopWidth: 0,
                elevation: 0,
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                color: 'white',
              },
            }}/>
        <Stack.Screen 
            name="Kontakt na me" 
            component={Contact} 
            options={{
              title: 'Kontakt',
              headerStyle: {
                backgroundColor: mainBlue,
              },
              headerTintColor: secondBlue,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}