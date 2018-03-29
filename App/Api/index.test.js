import Twitter from "twitter";
import Api from "./";
import Keys from "./keys";

jest.mock("twitter");
jest.mock("./keys");

it("should be truthy", () => {
  const api = new Api();
  expect(api).toBeTruthy();
});

it("should authenticate with keys", () => {
  const api = new Api();
  expect(Twitter).toHaveBeenCalledWith(Keys);
});
