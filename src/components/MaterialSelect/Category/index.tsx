/*
 * @Desc:
 * @Author: wringY
 * @Date: 2021-11-05 11:16:25
 * @LastEditTime: 2021-11-06 14:31:16
 * @FilePath: \dran-g\src\components\MaterialSelect\Category\index.tsx
 */
import * as React from 'react'
import { MaterialIterface } from '../../Materials'
import styles from '../index.less'
import Item from '../Items'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'

export enum MaterialsType {
    'insideMaterials' = '内置组件',
    'customreMaterials' = '自定义组件'
}

interface Categorynterface {
    type: string
    materials: MaterialIterface[]
    initExpand: (type: string) => any
}

const Category: React.FC<Categorynterface> = ({
    type,
    materials,
    initExpand
}) => {
    return (
        <div>
            <p className={styles.title}>
                {MaterialsType[type]}
                <AddCircleOutlineIcon
                    className={styles.add}
                    onClick={() => initExpand(type)}
                />
            </p>
            <div>
                {materials.map((c, idx) => {
                    const { label, icon } = c
                    return (
                        <Item
                            icon={icon}
                            idx={idx}
                            key={idx}
                            label={label}
                            type={type}
                        />
                    )
                })}
            </div>
        </div>
    )
}
export default Category
