import Twitter from "twitter";
import Api from "./";
import Keys from "./keys";

jest.mock("twitter");
jest.mock("./keys");

let mockedGet;

beforeEach(() => {
  mockedGet = jest.fn();
  Twitter.mockImplementation(() => {
    return {
      get: mockedGet
    };
  });
});

xit("should be truthy", () => {
  const api = new Api();
  expect(api).toBeTruthy();
});

xit("should authenticate with keys", () => {
  const api = new Api();
  expect(Twitter).toHaveBeenCalledWith(Keys);
});

it("should get a tweet", () => {
  const api = new Api();
  mockedGet.mockReturnValue(Promise.resolve([]));
  return api.getTweets().then((tweets) => {
    expect(tweets).toEqual([]);
  });
})