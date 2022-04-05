/* eslint-disable no-console */
import React, { useState } from 'react';
import { Button } from 'antd';
import type { ValueItemProps } from '@alitajs/input-tag';
import Select from '@alitajs/input-tag';

/**
 * 设置随机值
 */
export const getRandom = () => {
  const val = `${Math.random().toString(36).slice(2, 6)}`;
  return val;
};

const Test: React.FC = () => {
  const [value, setValue] = useState<ValueItemProps[]>([
    { label: '111', value: '111', type: 'tag', disabled: true },
    { label: '222', value: '222', type: 'text' },
    { label: '333', value: '333', type: 'tag' },
  ]);

  const [editable, setEditable] = useState<boolean>(true);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [allowClear, setAllowClear] = useState<boolean>(true);

  const addTag = () => {
    const random = getRandom();
    const newVal = [...value];
    newVal.push({ label: random, value: random, type: 'tag' });
    setValue(newVal);
  };

  return (
    <div>
      <Select
        placeholder="请选择"
        mode="tags"
        style={{ width: 500 }}
        value={value}
        onChange={(val: ValueItemProps[]) => {
          console.log(val);
          setValue(val);
        }}
        onClick={() => console.log('this is click')}
        editable={editable}
        disabled={disabled}
        allowClear={allowClear}
      />
      <div style={{ height: '20px' }} />
      <Button onClick={addTag}>新增一个 tag</Button>
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
/* eslint-enable */
