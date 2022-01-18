import { queryObectToString } from "./index"

test("should turn object to string", () => {
  const obj = {
    param1: "one",
    param2: "two",
    param3: "three",
  }

  expect(queryObectToString(obj)).toBe("param1=one&param2=two&param3=three")
})
