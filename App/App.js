//@flow

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Tweet } from './Components';

export default class App extends React.Component<void, void> {
  render() {
    return (
      <View style={styles.container}>
        <Tweet />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
