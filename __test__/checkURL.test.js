const checkURL = require("../src/client/js/checkURL");

test("check if the url is vaild", () => {
  expect(checkURL("https://review.udacity.com/#!/rubrics/2668/view")).not.toBe(
    undefined
  );
});

test("check if the url is not vaild", () => {
  expect(checkURL("httweqwedfds")).toBe(undefined);
});
