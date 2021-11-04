import { MaterialIterface } from '../../Materials'
import * as React from 'react'
import styles from './index.less'

type ItemType = Omit<MaterialIterface, 'component' | 'props' | 'style'>
const Item: React.FC<ItemType> = ({ label, icon }) => {
    return (
        <div className={styles.item}>
            <span className={`iconfont icon-${icon}`}></span>
            <span className={styles.text}>{label}</span>
        </div>
    )
}

export default Item
