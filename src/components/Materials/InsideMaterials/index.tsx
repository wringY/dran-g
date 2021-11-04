/*
 * @Desc:
 * @Author: wringY
 * @Date: 2021-11-04 16:53:38
 * @LastEditTime: 2021-11-04 23:26:15
 * @FilePath: \my-app-ts\src\components\Materials\InsideMaterials\index.tsx
 */
import * as Materials from '@material-ui/core'
import { MaterialIterface } from '../index'
const materialsId = 'inside-material-'

const items = [
    {
        type: 'Button',
        id: materialsId + 'button',
        style: {},
        props: {},
        label: '按钮',
        icon: 'anniu'
    },
    {
        type: 'Checkbox',
        id: materialsId + 'checkbox',
        style: {},
        props: {},
        label: '复选框',
        icon: 'checkbox-checked'
    },
    {
        type: 'Fab',
        id: materialsId + 'fab',
        style: {},
        props: {},
        label: '浮动操作按钮',
        icon: 'anniu'
    },
    {
        type: 'Input',
        style: {},
        id: materialsId + 'input',
        props: {},
        label: '输入框',
        icon: 'shurukuang'
    },
    {
        type: 'RadioGroup',
        style: {},
        props: {},
        id: materialsId + 'radio',
        label: '单选框',
        icon: 'radio-checked'
    },
    {
        type: 'Rating',
        style: {},
        id: materialsId + 'rating',
        props: {},
        label: '评分',
        icon: 'pingfen'
    },
    {
        type: 'Select',
        style: {},
        id: materialsId + 'select',
        props: {},
        label: '选择器',
        icon: 'xuanzeqi'
    }
]

const insideMaterials: MaterialIterface[] = items.map(item => {
    const { type, style, props, id, label, icon } = item
    return {
        component: Materials[type],
        style,
        id,
        props,
        label,
        icon
    }
})

export default insideMaterials
