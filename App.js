import * as React from 'react';
import { Button, View, StatusBar } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { mainBlue } from './utils/colors';

import Dashboard from './components/Dashboard';
import Seznam from './components/Seznam';
import Contact from './components/Contact';

function MyStatusBar({ backgroundColor, ...props }) {
  return (
    <View>
      <StatusBar translucent backgroundColor={mainBlue} {...props} />
    </View>
  )
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: mainBlue }}>
      <Dashboard />
    </View>
  );
}

function SeznamScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: mainBlue }}>
      <Seznam />
    </View>
  );
}

function ContactScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: mainBlue }}>
      <Contact />
    </View>
  )
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MyStatusBar />
      <Drawer.Navigator initialRouteName="Domu">
        <Drawer.Screen name="Domu" component={HomeScreen} />
        <Drawer.Screen name="Vsechna moudra" component={SeznamScreen} />
        <Drawer.Screen name="Kontakt na me" component={ContactScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}