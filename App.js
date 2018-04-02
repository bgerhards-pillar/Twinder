//@flow

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Tweet } from "./App/Components";
import Api from "./App/Api";

type Props = {};

type State = {
  tweets: Array<any>,
  twitterApi: Api
};

export default class App extends React.Component<Props, State> {
  state = { tweets: [], twitterApi: new Api() };

  constructor(props: Props) {
    super(props);
    this.state.twitterApi = new Api();
  }

  render() {
    const tweets = this.state.twitterApi.getTweets();
    return (
      <View style={styles.container}>
        <Tweet>{this.state.twitterApi.getTweets()[0]}</Tweet>
      </View>
    );
  }
  componentDidMount() {
    this.state.twitterApi.getTweets().then(function(tweets) { this.setTweets(tweets)});
  }

  setTweets(tweets: Array<any>) : void {
    this.setState(tweets => ({ tweets: tweets }));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
