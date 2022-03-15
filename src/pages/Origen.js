/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Button, Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header, Icon, Card, Image } from 'react-native-elements';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

export default class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nome: this.props.navigation.state.params.nome,
        };
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Header
                        placement="left"
                        leftComponent={{ icon: 'home', color: '#fff' }}
                        centerComponent={{ text: 'Zero App', style: { color: '#fff' } }}
                    />
                </View>

                <Text>{"\n\n"}</Text>

                <Text>Previous screen is {this.state.nome}</Text>
                <Text style={styles.welcome}>Welcome to React Nativee!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>

                <Text>{"\n\n"}</Text>


            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    textInput:
    {
        height: 40,
        borderWidth: 1,
        borderColor: 'grey',
        marginVertical: 5,
        alignSelf: 'stretch',
        padding: 8,
        fontSize: 16
    },
 
    Btn:
    {
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignSelf: 'stretch',
        padding: 10,
        marginTop: 10,
        marginBottom: 25
    },
 
    btnText:
    {
        textAlign: 'center',
        color: 'white',
        fontSize: 16
    },
});
