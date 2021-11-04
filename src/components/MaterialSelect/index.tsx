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
import Kind from './Kinds'

const MateriaSelect = () => {
    return (
        <div className={styles.materialSelect}>
            {Object.keys(MaterialList).map(type => {
                return (
                    <Kind
                        key={type}
                        materials={MaterialList[type]}
                        type={type}
                    />
                )
            })}
        </div>
    )
}

export default MateriaSelect
