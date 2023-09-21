import { searchUser } from "./utils";

describe("utils test", () => {
  test.each([
    {
      value: {
        typeDocument: "CC",
        numberDocument: 12345678,
        country: "Colombia",
      },
      expected: true,
    },
    {
      value: {
        typeDocument: "CC",
        numberDocument: 12345678,
        country: undefined,
      },
      expected: true,
    },
    {
      value: {
        typeDocument: "CC",
        numberDocument: 123,
        country: undefined,
      },
      expected: false,
    },
    {
      value: {
        typeDocument: "CC",
        numberDocument: 12345678,
        country: "Cuba",
      },
      expected: false,
    },
  ])("searchUser test", ({ value, expected }) => {
    const result = searchUser({ ...value });
    expect(result.length > 0).toBe(expected);
  });
});
