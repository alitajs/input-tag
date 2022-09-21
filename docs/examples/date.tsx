/* eslint-disable no-console */
import React, { useState } from 'react';
import { Button } from 'antd';
import type { Moment } from 'moment';
import moment from 'moment';
import type { ValueItemProps } from '@alitajs/input-tag';
import Select from '@alitajs/input-tag';

const Test: React.FC = () => {
  const [value, setValue] = useState<ValueItemProps[]>([
    { label: '2022-03-15', value: '959n', type: 'date' },
  ]);

  const [disabled, setDisabled] = useState<boolean>(false);
  const [allowClear, setAllowClear] = useState<boolean>(true);
  const [showTime, setShowTime] = useState<boolean>(false);
  const [disabledDate, setDisabledDate] = useState<boolean>(false);

  function disabledDateBeforeToday(current: Moment) {
    return current <= moment().endOf('day');
  }

  return (
    <div>
      <Select
        placeholder="请选择"
        mode="date"
        style={{ width: 500 }}
        value={value}
        onChange={(val: ValueItemProps[]) => {
          console.log(val);
          setValue(val);
        }}
        allowClear={allowClear}
        disabled={disabled}
        showTime={showTime}
        // format="YYYY-MM-DD HH:mm"
        datePicker="date"
        disabledDate={disabledDate ? disabledDateBeforeToday : undefined}
      />
      <div style={{ height: '20px' }} />
      <Button onClick={() => setDisabled(!disabled)}>输入框是否不可操作</Button>
      <div style={{ height: '20px' }} />
      <Button onClick={() => setAllowClear(!allowClear)}>输入框是否允许清空</Button>
      <div style={{ height: '20px' }} />
      <Button onClick={() => setShowTime(!showTime)}>是否显示日期时间</Button>
      <div style={{ height: '20px' }} />
      <Button onClick={() => setDisabledDate(!disabledDate)}>是否设置不可选择的日期</Button>
    </div>
  );
};

export default Test;
