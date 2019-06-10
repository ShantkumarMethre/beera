import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './component/Header';
import TabView from './component/TabView';

export default class App extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <Header navigate={navigate} />
        <TabView navigate={navigate} />
      </View>
    );
  }
}
