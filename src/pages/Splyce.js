/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Button, Platform, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Text, View, ScrollView } from 'react-native';
import { Header, Icon, Card, Image } from 'react-native-elements';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

export default class App extends Component {

    constructor() {
        super();
        this.state = { nome: '', loading: false, disabled: false }
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <ScrollView>
                <View style={styles.container}>
                    <Header
                        placement="left"
                        leftComponent={{ icon: 'home', color: '#fff' }}
                        centerComponent={{ text: 'Zero App', style: { color: '#fff' } }}
                    />
                </View>

                <Card>

                    <TextInput underlineColorAndroid="transparent" placeholder="Your First Name" style={styles.textInput} onChangeText={(text) => this.setState({ nome: text })} />

                    <TouchableOpacity disabled={this.state.disabled} activeOpacity={0.8} style={styles.Btn} onPress={() => navigate('Origen', { nome: this.state.nome })}>
                        <Text style={styles.btnText}>Pesquisar</Text>
                    </TouchableOpacity>

                    {
                        (this.state.loading)
                            ?
                            (<ActivityIndicator size="large" />)
                            :
                            null
                    }

                    <Image
                        style={styles.logo}
                        source={require('../img/Schalke 04.png')}
                    />


                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        onPress={() => navigate('home')}
                        title='Voltar' />
                </Card>

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
