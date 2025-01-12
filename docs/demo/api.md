---
title: API
group:
  title: API
nav:
  title: API
  path: /api
  order: 3
---

## API

| 参数        | 说明             | 类型                          | 默认值 | 是否必填 |
| ----------- | ---------------- | ----------------------------- | ------ | -------- |
| value       | 值               | ValueItemProps[]              | []     | 是       |
| onChange    | 值改变事件       | (res: ValueItemProps) => void | -      | 是       |
| mode        | 类型             | `tags`\|`date`                | tags   | 否       |
| placeholder | placeholder      | string                        | 请选择 | 否       |
| style       | 样式             | React.CSSProperties           | {}     | 否       |
| disabled    | 不可编辑         | boolean                       | false  | 否       |
| onClick     | 点击事件         | () => void                    | -      | 否       |
| addOnAfter  | 后缀             | string \| React.ReactNode     | -      | 否       |
| editable    | 输入框是否可编辑 | boolean                       | -      | 否       |

### Date

| 参数       | 说明           | 类型                                  | 默认值 | 是否必填 |
| ---------- | -------------- | ------------------------------------- | ------ | -------- |
| showTime   | 是否显示时间   | boolean                               | false  | 否       |
| datePicker | 时间选择器类型 | `date` \| `week` \| `month` \| `year` | `date` | 否       |

### ValueItemProps

| 参数     | 说明       | 类型          | 默认值 | 是否必填 |
| -------- | ---------- | ------------- | ------ | -------- |
| label    | 文本       | string        | -      | 是       |
| value    | 值         | string        | -      | 是       |
| type     | 类型       | 'text'\|'tag' | -      | 是       |
| disabled | 是否可编辑 | boolean       | false  | 否       |
