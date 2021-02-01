import * as React from 'react';
import { View, StatusBar, Button } from 'react-native';

//navigation imports
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { mainBlue, secondBlue } from './utils/colors';

import Home from './components/Home';
import Seznam from './components/Seznam';
import Contact from './components/Contact';

import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

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

function HomeScreen({navigation}) {
  return (
    <Drawer.Navigator 
        initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Soundboard" component={Seznam} />
        <Drawer.Screen name="Kontakt na me" component={Contact} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStatusBar />
      <Stack.Navigator>
        <Stack.Screen 
            name="HomeScreem" 
            component={HomeScreen} 
            options={({ navigation, route }) => ({
              title: 'Home',
              headerStyle: {
                backgroundColor: mainBlue,
              },
              headerLeft: () => (
                <MaterialCommunityIcons name="menu" size={24} color="white" onPress={() => navigation.navigate('DrawerOpen')}/>
              ),
              headerRight: () => (
                <FontAwesome5 name="share-alt" size={24} color="white" />
              ),
            })}/>
        <Stack.Screen 
            name="Soundboard" 
            component={Seznam} 
            options={{
              title: 'Soundboard',
              headerStyle: {
                backgroundColor: mainBlue,
              },
              headerTintColor: secondBlue,
              headerTitleStyle: {
                fontWeight: 'bold',
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
      {/* <Drawer.Navigator initialRouteName="Dashboard">
        <Drawer.Screen name="Dashboard" component={HomeScreen}/>
        <Drawer.Screen name="Root" component={Root} />
        <Drawer.Screen name="Soundboard" component={SeznamScreen} />
        <Drawer.Screen name="Kontakt na me" component={ContactScreen} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}