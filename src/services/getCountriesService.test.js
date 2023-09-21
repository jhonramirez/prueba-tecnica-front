import { getCountriesService } from "./getCountriesService";

global.fetch = jest.fn().mockResolvedValue({
  json: jest.fn().mockResolvedValue([
    {
      name: {
        common: "test",
      },
    },
  ]),
});

beforeEach(() => {
  fetch.mockClear();
});

test("getCountries services test", async () => {
  const result = await getCountriesService();
  const expected = [
    {
      label: "test",
      value: "test",
    },
  ];
  expect(result).toMatchObject(expected);
});
