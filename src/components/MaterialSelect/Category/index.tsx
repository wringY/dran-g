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
                {materials.map(c => {
                    const { id, label, icon } = c
                    return <Item icon={icon} id={id} key={id} label={label} />
                })}
            </div>
        </div>
    )
}
export default Category
