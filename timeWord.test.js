const timeWord = require("./timeWord");

describe("#timeword", () => {
  test("it is a function", () => {
    expect(typeof timeWord).toBe("function");
  });
  test("it returns a string", () => {
    expect(typeof timeWord("12:00")).toBe("string");
  });
  test("it returns the correct time", () => {
    expect(timeWord("00:00")).toBe("twelve o'clock am");
    expect(timeWord("01:30")).toBe("one thirty am");
    expect(timeWord("12:05")).toBe("twelve oh five pm");
    expect(timeWord("14:01")).toBe("two oh one pm");
    expect(timeWord("20:29")).toBe("eight twenty nine pm");
    expect(timeWord("21:00")).toBe("nine o'clock pm");
  });
});
