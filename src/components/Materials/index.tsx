/*
 * @Desc:
 * @Author: wringY
 * @Date: 2021-11-03 16:33:54
 * @LastEditTime: 2021-11-04 22:59:33
 * @FilePath: \my-app-ts\src\components\Materials\index.tsx
 */
import * as React from 'react'
import customreMaterials from './CustomerMaterials'
import insideMaterials from './InsideMaterials'

export interface MaterialIterface {
    component: React.FC<any>
    icon: string | React.FC<any>
    label: string
    id: string
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
