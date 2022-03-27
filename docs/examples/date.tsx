/* eslint-disable no-console */
import React, { useState } from 'react';
import { Button } from 'antd';
import type { ValueItemProps } from '@alitajs/input-tag';
import Select from '@alitajs/input-tag';

const Test: React.FC = () => {
  const [value, setValue] = useState<ValueItemProps[]>([]);

  const [editable, setEditable] = useState<boolean>(true);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [allowClear, setAllowClear] = useState<boolean>(true);

  return (
    <div>
      <Select
        placeholder="请选择"
        mode="date"
        style={{ width: 500 }}
        value={value}
        onChange={(val: ValueItemProps[]) => {
          setValue(val);
        }}
        editable={editable}
        allowClear={allowClear}
        disabled={disabled}
      />
      <div style={{ height: '20px' }} />
      <Button onClick={() => setEditable(!editable)}>输入框是否可编辑</Button>
      <div style={{ height: '20px' }} />
      <Button onClick={() => setDisabled(!disabled)}>输入框是否不可操作</Button>
      <div style={{ height: '20px' }} />
      <Button onClick={() => setAllowClear(!allowClear)}>输入框是否允许清空</Button>
    </div>
  );
};

export default Test;
