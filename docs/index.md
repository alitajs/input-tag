---
hero:
  title: input-tag
  desc: 可输入可设置 tag 的组件
  actions:
    - text: 快速使用
      link: /usage/demo
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: Feature 1
    desc: Balabala
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png
    title: Feature 2
    desc: Balabala
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png
    title: Feature 3
    desc: Balabala
footer: Open-source MIT Licensed | Copyright © 2020<br />Powered by [dumi](https://d.umijs.org)
---

## Demo

<code src="./examples/usage.tsx">

## API

| 参数        | 说明             | 类型                           | 默认值 | 是否必填 |
| ----------- | ---------------- | ------------------------------ | ------ | -------- |
| value       | 值               | ValueItemProps[]               | []     | 是       |
| onChange    | 值改变事件       | (res: ValueItemProps) => void  | -      | 是       |
| mode        | 类型             | `tags`\|`multiple`\|`combobox` | tags   | 否       |
| placeholder | placeholder      | string                         | 请选择 | 否       |
| style       | 样式             | React.CSSProperties            | {}     | 否       |
| disabled    | 不可编辑         | boolean                        | false  | 否       |
| onClick     | 点击事件         | () => void                     | -      | 否       |
| addOnAfter  | 后缀             | string \| React.ReactNode      | -      | 否       |
| editable    | 输入框是否可编辑 | boolean                        | -      | 否       |

### ValueItemProps

| 参数     | 说明       | 类型          | 默认值 | 是否必填 |
| -------- | ---------- | ------------- | ------ | -------- |
| label    | 文本       | string        | -      | 是       |
| value    | 值         | string        | -      | 是       |
| type     | 类型       | 'text'\|'tag' | -      | 是       |
| disabled | 是否可编辑 | boolean       | false  | 否       |
