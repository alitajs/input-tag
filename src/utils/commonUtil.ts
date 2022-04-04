import type { DatePickerProps } from '../interface';

export function toArray<T>(value: T | T[]): T[] {
  if (Array.isArray(value)) {
    return value;
  }
  return value !== undefined ? [value] : [];
}

export const isClient =
  typeof window !== 'undefined' && window.document && window.document.documentElement;

/** Is client side and not jsdom */
// @ts-ignore
export const isBrowserClient = process.env.NODE_ENV !== 'test' && isClient;

/**
 * 设置随机数
 * @returns
 */
export const getRandom = () => {
  const val = `${Math.random().toString(36).slice(2, 6)}`;
  return val;
};

export const defaultFormat = (datePicker: DatePickerProps, showTime: boolean) => {
  let format = '';
  switch (datePicker) {
    case 'date':
      format = 'YYYY-MM-DD';
      if (showTime) format = 'YYYY-MM-DD HH:mm';
      break;
    case 'week':
      format = 'YYYY-MM-DD';
      break;
    case 'month':
      format = 'YYYY-MM';
      break;
    case 'quarter':
      format = 'YYYY-MM-DD';
      break;
    case 'year':
      format = 'YYYY';
      break;
  }

  return format;
};
