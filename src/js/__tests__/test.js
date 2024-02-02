import getHealthStatus, { sortByHealt } from '../healthStatus';
import { test, expect } from '@jest/globals';
test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Маг', health: 91 }, 'healthy'],
  [{ name: 'Маг', health: 15 }, 'wounded'],
  [{ name: 'Маг', health: 10 }, 'critical'],
])(
  ('check healthy %s with %s'), (character, check) => {
  const healthert = getHealthStatus(character);
  expect(healthert).toBe(check);
  }
);

test('characters sort by health', () => {
  const characters = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const result = sortByHealt(characters);
  expect(result).toEqual(expected);
});
