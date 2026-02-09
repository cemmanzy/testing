import { describe, test, expect } from 'vitest';
import { multiply } from './multiply';

describe('multiply function', () => {
  test('multiplies positive numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test('handles zeros and negatives', () => {
    expect(multiply(5, 0)).toBe(0);
    expect(multiply(-2, 6)).toBe(-12);
    expect(multiply(-3, -4)).toBe(12);
  });
});