import * as React from 'react'
import styles from './index.less'
import Grid from './Grid'
import { MaterialIterface } from '../Materials'
import { Provider } from 'react-redux'
import store from '@/store'
import { connect } from 'react-redux'
import { addComponent, delComponent } from '@/store/actions'
import MaterialList from '../Materials'

const { useState } = React
const MaterialsArr = Object.values(MaterialList).flat(999)

const Canvas = () => {
    const [records, setRecords] = useState<MaterialIterface[]>([])
    const handleDrop: React.DragEventHandler<HTMLDivElement> = e => {
        // const Material = MaterialsArr.find(
        //     material => material.id === e.dataTransfer.getData('materialId')
        // )
        // Material && setRecords(records.concat(Material))
        e.preventDefault()
    }
    const handleDragOver: React.DragEventHandler<HTMLDivElement> = e => {
        e.dataTransfer.dropEffect = 'copy'
        e.preventDefault()
    }
    // const render = () => {
    //     return records.map(c => {
    //         const { component: Com, id } = c
    //         return <Com key={id} />
    //     })
    // }
    return (
        <Provider store={store}>
            <div
                className={styles.canvas}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                {/* 网格线 */}
                <Grid />
                {/* {render()} */}
            </div>
        </Provider>
    )
}

const mapStateToProps = state => {
    return {
        componentData: state.state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addComponent(components) {
            dispatch(addComponent(components))
        },
        delComponent(id) {
            dispatch(delComponent(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas)
