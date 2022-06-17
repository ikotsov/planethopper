import {formatInUSLocale} from './formatInUSLocale';

test('convertToUSFormat accepts a number and returns a string in US standard format', () => {
  expect(formatInUSLocale(15)).toBe('15');
  expect(formatInUSLocale(150)).toBe('150');
  expect(formatInUSLocale(1500)).toBe('1,500');
  expect(formatInUSLocale(15000)).toBe('15,000');
  expect(formatInUSLocale(150000)).toBe('150,000');
  expect(formatInUSLocale(150000000)).toBe('150,000,000');
  expect(formatInUSLocale(15000000000)).toBe('15,000,000,000');
  expect(formatInUSLocale(150000000000)).toBe('150,000,000,000');
});
