import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, KeyboardAvoidingView } from 'react-native';
import Myform from './myForm';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        return (


            <KeyboardAvoidingView behavior='padding' style={styles.Container}>
                <View style={styles.logoConatiner}>
                    <Image
                        style={styles.logo}
                        source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
                    <Text
                        style={styles.appname} >
                        React Login
                </Text>
                </View>

                <View style={styles.myForm}>
                    <Myform navigate={navigate} />
                </View>


            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({

    Container: {
        flex: 1,
        backgroundColor: '#238445',

        width: Dimensions.get('window').width,
    },
    logoConatiner: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100,

    },
    appname: {
        color: 'white'
    },
    myForm: {
        flex: 3,
    }
})

export default LoginScreen;