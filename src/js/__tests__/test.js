import getHealthStatus from '../healthStatus';
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