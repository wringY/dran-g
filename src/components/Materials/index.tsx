/*
 * @Desc:
 * @Author: wringY
 * @Date: 2021-11-03 16:33:54
 * @LastEditTime: 2021-11-14 15:32:43
 * @FilePath: \dran-g\src\components\Materials\index.tsx
 */
import * as React from 'react'
import customreMaterials from './CustomerMaterials'
import insideMaterials from './InsideMaterials'
// 公共样式
export const CommonStyles = {
    rotate: '0',
    opacity: 1
}
export interface MaterialIterface {
    component: React.FC<any>
    icon: string | React.FC<any>
    label: string
    style: React.CSSProperties
    props: {
        [key: string]: any
    }
}
const MaterialList = {
    customreMaterials,
    insideMaterials
}

export default MaterialList
