import React, { Component } from 'react';
import { Button, Platform, StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { Header, Icon, Card, Image, ListItem, Avatar, Input } from 'react-native-elements';

export default class perfil extends Component {
    render() {
        const { navigate } = this.props.navigation;

        const list = [
            {
                name: 'Wunder',
                avatar_url: '../img/G2Esports/Wunder.png',
                subtitle: 'Topo'
            },
            {
                name: 'Jankos',
                avatar_url: '../img/G2Esports/Jankos.png',
                subtitle: 'Caçador'
            },
            {
                name: 'Caps',
                avatar_url: '../img/G2Esports/Caps.png',
                subtitle: 'Meio'
            },
            {
                name: 'Perkz',
                avatar_url: '../img/G2Esports/Perkz.png',
                subtitle: 'Atirador'
            },
            {
                name: 'Mikyx',
                avatar_url: '../img/G2Esports/Mikyx.png',
                subtitle: 'Suporte'
            },
        ]

        return (
            <ScrollView>
                <View style={styles.container}>
                    <Header
                        placement="left"
                        leftComponent={{ icon: 'home', color: '#fff' }}
                        centerComponent={{ text: 'G2 Esports', style: { color: '#fff' } }}
                    />
                </View>

                {
                    list.map((item, i) => (
                        <ListItem
                            title={item.name}
                            subtitle={item.subtitle}
                            leftAvatar={{ source: { uri: item.avatar_url }, tile: "XD" }}
                        />
                    ))
                }

                <Card>

                    <Input
                        label='Senha'
                        placeholder='BASIC INPUT'
                        leftIcon={{ type: 'font-awesome', name: 'key' }}
                    />

                    <Input
                        label='KKK'
                        placeholder='BASIC INPUT'
                    />

                    <Input
                        label='KKK'
                        placeholder='INPUT WITH ICON'
                        leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                    />

                    <Input
                        placeholder='INPUT WITH CUSTOM ICON'
                        leftIcon={
                            <Icon
                                name='user'
                                size={24}
                                color='black'
                            />
                        }
                    />

                    <Input
                        placeholder='INPUT WITH SHAKING EFFECT'
                        shake={true}
                    />

                    <Input
                        placeholder='INPUT WITH ERROR MESSAGE'
                        errorStyle={{ color: 'red' }}
                        errorMessage='ENTER A VALID ERROR HERE'
                    />

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