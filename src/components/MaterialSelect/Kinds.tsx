import * as React from 'react'
import { MaterialIterface } from '../Materials'
import styles from './index.less'
import Item from './Items'

enum MaterialsType {
    'insideMaterials' = '内置组件',
    'customreMaterials' = '自定义组件'
}

interface KindInterface {
    type: string
    materials: MaterialIterface[]
}

const Kind: React.FC<KindInterface> = ({ type, materials }) => {
    return (
        <div>
            <p className={styles.title}>{MaterialsType[type]}</p>
            <div>
                {materials.map(c => {
                    const { component, style, id, label, icon } = c
                    return <Item icon={icon} id={id} key={id} label={label} />
                })}
            </div>
        </div>
    )
}
export default Kind
