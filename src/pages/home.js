import React, { Component } from 'react';
import { Button, Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header, Icon, Card, Image } from 'react-native-elements';

var people = [
    {name: 'Quang Vĩ', age: 29},
    {name: 'Sơn Tùng', age: 24},
  ];

export default class home extends Component {
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

                    <Image
                        style={styles.logo}
                        source={require('../img/G2Esports.png')}
                    />

                    <Text style={{ marginBottom: 10 }}>
                    G2Esports G2Esports G2Esports G2Esports G2Esports G2Esports G2Esports 
                    G2Esports G2Esports G2Esports G2Esports G2Esports G2Esports 
                    </Text>

                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        onPress={() => navigate('G2Esports')}
                        title='Acessar' />
                </Card>

                <Card>

                    <Image
                        style={styles.logo}
                        source={require('../img/G2Esports.png')}
                    />

                    <Text style={{ marginBottom: 10 }}>
                    Fnatic Fnatic Fnatic Fnatic Fnatic Fnatic Fnatic Fnatic Fnatic Fnatic 
                    Fnatic Fnatic Fnatic Fnatic Fnatic Fnatic Fnatic Fnatic Fnatic 
                    </Text>

                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        onPress={() => navigate('Fnatic')}
                        title='Acessar' />
                </Card>

                <Card>

                    <Image
                        style={styles.logo}
                        source={require('../img/Schalke 04.png')}
                    />

                    <Text style={{ marginBottom: 10 }}>
                    Schalke 04 Schalke 04 Schalke 04 Schalke 04 Schalke 04 Schalke 04 Schalke 04 
                    Schalke 04 Schalke 04 Schalke 04 Schalke 04 Schalke 04 Schalke 04 
                    </Text>

                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        onPress={() => navigate('Schalke04')}
                        title='Acessar' />
                </Card>

                <Card>

                    <Image
                        style={styles.logo}
                        source={require('../img/Schalke 04.png')}
                    />

                    <Text style={{ marginBottom: 10 }}>
                    Splyce Splyce Splyce Splyce Splyce Splyce Splyce Splyce Splyce Splyce Splyce 
                    Splyce Splyce Splyce Splyce Splyce Splyce Splyce Splyce Splyce Splyce 
                    </Text>

                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        onPress={() => navigate('Splyce', {prevScreenTitle: 'Main Screen', people: people})}
                        title='Acessar' />
                </Card>

                <Text>{"\n\n"}</Text>


            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 300,
        height: 300,
    },
});