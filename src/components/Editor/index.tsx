/*
 * @Desc:
 * @Author: wringY
 * @Date: 2021-11-05 10:40:44
 * @LastEditTime: 2021-11-06 14:47:56
 * @FilePath: \dran-g\src\components\Editor\index.tsx
 */
import { keys } from '@material-ui/system'
import * as React from 'react'
import MaterialList from '../Materials'
import { MaterialIterface } from '../Materials'
const { useState } = React
const MaterialsArr = Object.values(MaterialList).flat(999)

const Test = () => {
    const [records, setRecords] = useState<MaterialIterface[]>([])
    const hanleDrog: React.DragEventHandler<HTMLDivElement> = e => {
        const Material = MaterialsArr.find(
            material => material.id === e.dataTransfer.getData('materialId')
        )
        Material && setRecords(records.concat(Material))
        e.preventDefault()
    }
    const hanleDrag1: React.DragEventHandler<HTMLDivElement> = e => {
        e.dataTransfer.dropEffect = 'copy'
        e.preventDefault()
    }
    const render = () => {
        return records.map(c => {
            const { component: Com, id } = c
            return <Com key={id} />
        })
    }
    return (
        <div
            onDragOver={hanleDrag1}
            onDrop={hanleDrog}
            style={{ width: 500, height: 500, background: 'red' }}
        >
            {render()}
        </div>
    )
}

export default Test
