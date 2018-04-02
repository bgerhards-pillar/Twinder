//@flow

import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  children?: React.Node
};

export default class Tweet extends React.Component<Props, void> {
  render() {
    return (
      <View>
        <Text>{this.props.children}</Text>
      </View>
    );
  }
}
