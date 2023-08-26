import sum from "../sum";
test("test sum of two numbers", () => {
  const ans = sum(4, 3);
  expect(ans).toBe(7);
});
