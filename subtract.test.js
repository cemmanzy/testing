import { describe, test, expect } from 'vitest';
import { subtract } from './subtract';

describe('subtract function', () => {
  test('subtracts smaller from larger', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('handles negative results and inputs', () => {
    expect(subtract(3, 8)).toBe(-5);
    expect(subtract(-2, -5)).toBe(3);
  });
});