import React, {Component} from 'react';
import { View, Text, Platform } from 'react-native';
import { Icon } from 'react-native-elements'
import { StackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Saved from './Saved';
import Drank from './Drank';

const Breweries = ({navigate}) => {
    return(
            <View style={{flex: 1}}>
                <View style={styles.viewStyle}>
                    <Icon name='dehaze'  color='#000105' onPress={() => navigate('Drawer')}/>
                    <Text style={styles.textStyle}>Breweris</Text>
                    <Icon name='tune'  color='#000105'onPress={() => navigate('Filter')} />
                    <Icon name='search'  color='#000105' onPress={() => navigate('Search')}/>
                </View>
                <ScrollableTabView
                    tabBarUnderlineColor="#fff"
                    tabBarBackgroundColor ='#e9ff7c'
                    tabBarActiveTextColor="#000"
                    tabBarInactiveTextColor="#88b0ac"  
                >
                    <Saved tabLabel="Map">  
                    <Icon name='map' color='#000105'/>
                    <Text>Home</Text>
                    </Saved>
                    <Drank tabLabel="List" />
                </ScrollableTabView>
         </View>
         
        );
};
const styles= {
 viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#e9ff7c',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    position: 'relative'
 },
 textStyle: {
     fontSize: 25
 }
}
export default Breweries;