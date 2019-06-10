import React, { PureComponent } from 'react';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';
import { TabNavigator, DrawerNavigator, StackNavigator } from 'react-navigation';
import Beertag from './component/Beertag';
import Saved from './component/Saved';
import Drank from './component/Drank';
import BeerDetails from './component/BeerDetails';
import Search from './component/Search';
import Header from './component/Header';
import Drawer from './component/Drawer';
import BeerList from './component/BeerList';
import Filter from './component/Filter';
import App from './App';
import LoginScreen from './screen/LoginScreen'

const RootNavigator = StackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      mode: 'modal',
      header: null
    }
  },
  App: {
    screen: App,
    navigationOptions: {
      header: null
    }
  },
  // Beertag:{ screen: Beertag,
  //   navigationOptions: {
  //     header:null
  //  }
  // },

  Header: {
    screen: Header,
    navigationOptions: {
      mode: 'modal',
      header: null
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      mode: 'modal',
      header: null
    }
  },
  Filter: {
    screen: Filter,
    navigationOptions: {
      mode: 'modal',
      header: null
    }
  },
  BeerList: {
    screen: BeerList,
    navigationOptions: {
      title: 'BeerList'
    }
  }
},
  {
    initialRouteName: 'LoginScreen'
  });

export default RootNavigator;