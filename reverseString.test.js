import { describe, test, expect } from 'vitest';
import { reverseString } from './reverseString';

describe('reverseString function', () => {
  test('reverses simple strings', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
  });

  test('handles empty string and palindrome', () => {
    expect(reverseString('')).toBe('');
    expect(reverseString('radar')).toBe('radar');
  });
});