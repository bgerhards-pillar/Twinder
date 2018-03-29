//@flow
import Twitter from "twitter";
import Keys from "./keys";

export default class {
  client: Twitter;

  constructor() {
    this.client = new Twitter(Keys);
  }

  getTweets() {
    return this.client.get("statuses/home_timeline", { count: 1 });
  }
}
