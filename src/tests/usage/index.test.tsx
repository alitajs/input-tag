import * as React from 'react';
import { render, testA11y, fireEvent } from '@alita/test';
import UsageTest from '.';

it('passes a11y test', async () => {
  const { getByText, container } = render(
    <div>
      {/* <UsageTest /> */}
      <div>222</div>
    </div>,
  );
  fireEvent.click(getByText('222'));
  testA11y(container);
});
