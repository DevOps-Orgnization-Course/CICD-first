const { makeGreeting } = require("../src/greeting");

describe("makeGreeting (unit)", () => {
  test("greets a given name", () => {
    expect(makeGreeting("Sam")).toBe("Hello, Sam!");
  });

  test("defaults to 'world' when empty or missing", () => {
    expect(makeGreeting("")).toBe("Hello, world!");
    expect(makeGreeting(undefined)).toBe("Hello, world!");
  });

  test("trims surrounding whitespace", () => {
    expect(makeGreeting("  Ada  ")).toBe("Hello, Ada!");
  });
});
