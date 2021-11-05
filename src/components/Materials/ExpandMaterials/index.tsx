// 全局的弹窗
import * as React from 'react'
import { Modal } from '@material-ui/core'
import styles from './index.less'
import { MaterialsType } from '../../MaterialSelect/Category'

interface ExpandMaterialsInterface {
    open: boolean
    type: string
    handleClose: () => void
}

const ExpandMaterials: React.FC<ExpandMaterialsInterface> = ({
    open,
    type,
    handleClose
}) => {
    return (
        <Modal onClose={handleClose} open={open}>
            <div className={styles.container}>
                <p className={styles.title}>{MaterialsType[type]}添加</p>
                todo
            </div>
        </Modal>
    )
}
export default ExpandMaterials
