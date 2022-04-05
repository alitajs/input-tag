import type * as React from 'react';
import type { PickerPanelDateProps } from 'rc-picker/lib/PickerPanel';
import type { Moment } from 'moment';
import type { RawValueType } from './BaseSelect';

export interface IDatePickerProps extends Omit<PickerPanelDateProps<Moment>, 'mode'> {
  format: string;
}

export interface FlattenOptionData<OptionType> {
  label?: React.ReactNode;
  data: OptionType;
  key: React.Key;
  value?: RawValueType;
  groupOption?: boolean;
  group?: boolean;
}

export type DateModeProps = 'time' | 'date' | 'month' | 'year' | 'decade';

export type DatePickerProps = 'date' | 'week' | 'month' | 'quarter' | 'year';
