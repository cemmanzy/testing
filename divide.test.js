import { describe, test, expect } from 'vitest';
import { divide } from './divide';

describe('divide function', () => {
  test('divides when divisor is not zero', () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(7, 2)).toBe(3.5);
  });

  test('returns null when dividing by zero', () => {
    expect(divide(5, 0)).toBe(null);
    expect(divide(0, 0)).toBe(null);
  });
});