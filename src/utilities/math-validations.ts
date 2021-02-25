import { DefaultNumberType } from 'types/input';

export const validateMinMax = (value: any, min: DefaultNumberType, max: DefaultNumberType) => {
  const parsedValue = parseInt(value as string);
  if (isNaN(parsedValue)) {
    return undefined;
  }

  if (min && parsedValue < min) return min;
  if (max && parsedValue > max) return max;
  return parsedValue;
};
