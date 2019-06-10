import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { CardSection, Card, Button } from '../common/index.a'

class Myform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    handleMethod() {

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(this.state.email) === true && this.state.password != '') {
            this.props.navigate('App');
        }
    }
    render() {
        return (

            <Card>
                <CardSection><TextInput style={styles.input} placeholder="Email ID"
                    value={this.state.text}
                    onChangeText={email => this.setState({ email })} /></CardSection>


                <CardSection><TextInput style={styles.input} placeholder="password"
                    onChangeText={password => this.setState({ password })} /></CardSection>

                <CardSection>
                    <Button onPress={this.handleMethod.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: 40,
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: 10,
        marginBottom: 20,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: 'red',
        height: 40
    },

})

export default Myform;