import { describe, test, expect } from 'vitest';
import { findMax } from './findMax';

describe('findMax function', () => {
  test('finds maximum in positive numbers', () => {
    expect(findMax([3, 1, 4, 1, 5, 9])).toBe(9);
  });

  test('handles negatives, single element, empty array', () => {
    expect(findMax([-2, -5, -1, -10])).toBe(-1);
    expect(findMax([42])).toBe(42);
    expect(findMax([])).toBe(undefined); // or you can decide -Infinity / null
  });
});