/*
 * @Desc:
 * @Author: wringY
 * @Date: 2021-11-03 22:14:45
 * @LastEditTime: 2021-11-04 22:57:42
 * @FilePath: \my-app-ts\src\components\MaterialSelect\index.tsx
 */
/*
 * @Desc:
 * @Author: wringY
 * @Date: 2021-11-03 22:14:45
 * @LastEditTime: 2021-11-03 23:34:23
 * @FilePath: \my-app-ts\src\components\MaterialSelect\index.tsx
 */
import * as React from 'react'
import MaterialList from '../Materials'
import styles from './index.less'
import Category from './Category'
import ExpandMaterials from '@/components/Materials/ExpandMaterials'
const { useState } = React

const MateriaSelect = () => {
    const [isShowExpand, setShow] = useState(false)
    const [type, setType] = useState('customreMaterials')
    const initExpand = (type: string) => {
        setType(type)
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }

    return (
        <div className={styles.materialSelect}>
            {Object.keys(MaterialList).map(type => {
                return (
                    <Category
                        initExpand={initExpand}
                        key={type}
                        materials={MaterialList[type]}
                        type={type}
                    />
                )
            })}
            <ExpandMaterials
                handleClose={handleClose}
                open={isShowExpand}
                type={type}
            />
        </div>
    )
}

export default MateriaSelect
