//@flow
import twitter, {auth, rest} from "react-native-twitter";
import Keys from "./keys";

export default class {
  client: twitter;

  constructor() {
    this.client = new twitter(Keys);
  }

  getTweets() {
    const getParams = { count : 1};
    return this.client.rest.get('statuses/home_timeline', getParams);
  }
}
