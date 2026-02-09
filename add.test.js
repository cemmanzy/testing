import { describe, test, expect } from 'vitest';
import { add } from './add';

describe('add function', () => {
  test('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(0, 7)).toBe(7);
  });

  test('handles negative numbers', () => {
    expect(add(-4, 6)).toBe(2);
    expect(add(-1, -1)).toBe(-2);
  });
});