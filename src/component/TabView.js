import React, { PureComponent } from 'react';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';
import { TabNavigator, DrawerNavigator, StackNavigator } from 'react-navigation';
import Beertag from './Beertag';
import Saved from './Saved';
import Drank from './Drank';
// import BeerDetails from './BeerDetails';
// import Search from './Search';
// import Header from './Header';
// import Drawer from './Drawer';
// import BeerList from './BeerList';
const TabView = TabNavigator({
  Beer:{ screen: Beertag },
  Saved: { screen: Saved },
  Drank: { screen: Drank }
},
{
tabBarOptions: {
  activeTintColor: 'black',
  style: {backgroundColor: '#e9ff7c'},
  labelStyle: {color: 'black'},
  upperCaseLabel: false,
  showIcon: true,
  pressColor: 'grey',
  showLabel: false
},
});

export default TabView;