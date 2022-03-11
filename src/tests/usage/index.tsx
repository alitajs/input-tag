/* eslint-disable no-console */
import React from 'react';
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
  const [value, setValue] = React.useState<ValueItemProps[]>([
    { label: '111', value: '111', type: 'tag', disabled: true },
    { label: '222', value: '222', type: 'text' },
    { label: '333', value: '333', type: 'tag' },
  ]);

  const addTag = () => {
    const random = getRandom();
    const newVal = [...value];
    newVal.push({ label: random, value: random, type: 'tag' });
    setValue(newVal);
  };

  return (
    <div>
      <div>
        <Select
          placeholder="请选择"
          mode="tags"
          style={{ width: 500 }}
          value={value}
          onChange={(val: ValueItemProps[]) => {
            setValue(val);
          }}
          onClick={() => console.log('this is click')}
        />
      </div>
      <Button onClick={addTag}>新增一个 tag</Button>
    </div>
  );
};

export default Test;
