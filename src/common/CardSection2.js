import React from 'react';
import { View } from 'react-native';

const CardSection2 = (props) => {
    return (
        <View style={styles.containerStyle}>
        {props.children}
        </View>
    );
};
    const styles = {
        containerStyle: {
           // alignItems: 'center',
            //justifyContent: 'center',
            borderBottomWidth: 1,
            padding: 5,
            backgroundColor: '#fff',
//justifycontent: 'flex-start',
            flexDirection: 'row',
            borderColor: '#ddd',
            position: 'relative'
        }
    };

 export { CardSection2 };