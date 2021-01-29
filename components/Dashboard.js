import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { secondBlue } from '../utils/colors';

class Dashboard extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <MaterialCommunityIcons name="fish" size={80} color="white" />
                </View>
                <View>
                    <Text style={styles.title}>Nazdar Trosky!</Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text style={styles.btn} >Rikej!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textTransform: 'uppercase',
        color: '#fff',
        fontSize: 70,
    },
    btn: {
        color: '#fff',
        backgroundColor: secondBlue,
        paddingHorizontal: 130,
        paddingVertical: 20,
        borderRadius: 10,
    }
  });

export default Dashboard;