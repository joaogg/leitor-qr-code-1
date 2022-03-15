import React, { Component } from 'react';
import { Button, Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header, Icon, Card, Image } from 'react-native-elements';
import axios from 'axios'

const URL = 'https://www.meucblol.com/api/equipes/'

export default class perfil extends Component {

    constructor(props) {
        super(props);
        this.state = { listaItens: [] }

        this.refresh = this.refresh.bind(this);
    }

    refresh(Nome = '') {
        const search = Nome ? `&Nome__regex=/${Nome}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(response => { this.setState({ listaItens: response.data }); })
            .catch(() => { console.log('Erro ao recuperar os dados'); });
    }

    componentDidMount() {
        this.refresh()
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

                    {
                        this.state.listaItens.map(function (item) {
                            return (
                                <Text style={{ marginBottom: 10 }}>{item.Equipe}</Text>
                            );
                        })
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