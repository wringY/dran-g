/*
 * @Desc:
 * @Author: wringY
 * @Date: 2021-11-04 16:53:38
 * @LastEditTime: 2021-11-04 23:26:15
 * @FilePath: \my-app-ts\src\components\Materials\InsideMaterials\index.tsx
 */
import * as Materials from '@material-ui/core'
import { MaterialIterface } from '../index'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'

const items = [
    {
        type: 'Button',
        style: {},
        props: {},
        label: '按钮',
        icon: 'anniu'
    },
    {
        type: 'Checkbox',
        style: {},
        props: {},
        label: '复选框',
        icon: 'checkbox-checked'
    },
    {
        type: 'Fab',
        style: {},
        props: {},
        label: '浮动操作按钮',
        icon: 'anniu'
    },
    {
        type: 'Input',
        style: {},
        props: {},
        label: '输入框',
        icon: 'shurukuang'
    },
    {
        type: 'RadioGroup',
        style: {},
        props: {},
        label: '单选框',
        icon: 'radio-checked'
    },
    {
        type: 'Rating',
        style: {},
        props: {},
        label: '评分',
        icon: 'pingfen'
    },
    {
        type: 'Select',
        style: {},
        props: {},
        label: '选择器',
        icon: 'xuanzeqi'
    },
    {
        type: 'List',
        style: {},
        props: {},
        label: '选择器',
        icon: AccessAlarmIcon
    }
]

const insideMaterials: MaterialIterface[] = items.map(item => {
    const { type, style, props, label, icon } = item
    return {
        component: Materials[type],
        style,
        props,
        label,
        icon
    }
})

export default insideMaterials
