/*
 * @Desc:
 * @Author: wringY
 * @Date: 2021-11-05 10:40:44
 * @LastEditTime: 2021-11-06 14:31:07
 * @FilePath: \dran-g\src\components\MaterialSelect\Items\index.tsx
 */
import { MaterialIterface } from '../../Materials'
import * as React from 'react'
import styles from './index.less'

type ItemType = Omit<MaterialIterface, 'component' | 'props' | 'style'>
const Item: React.FC<ItemType> = ({ label, icon, id }) => {
    const handleDrap: React.DragEventHandler = e => {
        e.dataTransfer.setData('materialId', id)
    }

    const render = () => {
        if (typeof icon === 'string') {
            return (
                <div className={styles.item} draggable onDragStart={handleDrap}>
                    <span className={`iconfont icon-${icon}`}></span>
                    <span className={styles.text}>{label}</span>
                </div>
            )
        } else {
            const Icon = icon
            return (
                <div className={styles.item} draggable>
                    <Icon />
                    <span className={styles.text}>{label}</span>
                </div>
            )
        }
    }
    return render()
}

export default Item
