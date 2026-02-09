import { describe, test, expect } from 'vitest';
import { isPalindrome } from './isPalindrome';

describe('isPalindrome function', () => {
  test('returns true for palindromes', () => {
    expect(isPalindrome('radar')).toBe(true);
    expect(isPalindrome('level')).toBe(true);
  });

  test('returns false for non-palindromes & edge cases', () => {
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('')).toBe(true);
    expect(isPalindrome('a')).toBe(true);
  });
});