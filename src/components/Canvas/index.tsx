/*
 * @Desc:
 * @Author: wringY
 * @Date: 2021-11-10 11:14:08
 * @LastEditTime: 2021-11-14 16:28:30
 * @FilePath: \dran-g\src\components\Canvas\index.tsx
 */
import * as React from 'react'
import styles from './index.less'
import Grid from './Grid'
import { Dispatch } from 'redux'
import {
    connect,
    MapDispatchToPropsFunction,
    MapStateToProps
} from 'react-redux'
import { MaterialIterface } from '@/components/Materials'
import { addComponent, delComponent } from '@/store/actions'
import { MODIFY_ACTION } from '@/store/actions'
import MaterialList from '@/components/Materials'
import generateId from '@/utils/generateID'
import Shape from './Shape'
import { ComponentDataType, StoreInterface } from '@/store/index'
import { CommonStyles } from '@/components/Materials'
import _ from 'loadsh'
const ShapeStylesProps = ['width', 'height', 'top', 'left', 'rotate']
const { useRef } = React

type CanvasProps = {
    addComponent: (c: MaterialIterface) => void
    delComponent: (id: number) => void
    componentData: ComponentDataType[]
}

const Canvas: React.FC<CanvasProps> = ({
    componentData,
    addComponent,
    delComponent
}) => {
    const canvasRef = useRef<HTMLDivElement>(null)
    // 拖拽到目标区域释放事件
    const handleDrop: React.DragEventHandler<HTMLDivElement> = e => {
        const type = e.dataTransfer.getData('materialType')
        const index = e.dataTransfer.getData('index')
        // !引用类型真的烦，可以考虑使用i
        const component = _.cloneDeep(MaterialList[type][index])
        const rectInfo =
            canvasRef.current && canvasRef.current.getBoundingClientRect()
        if (rectInfo) {
            // 当前鼠标距离可视区域左边的距离 - 当前画布距离视口左边区域的距离
            component.style.left = e.clientX - rectInfo.left
            component.style.top = e.clientY - rectInfo.top
            debugger
        }
        component.id = generateId()
        // 记录当前material 在画布中的位置信息
        addComponent(component)
        e.preventDefault()
    }
    // 拖拽经过经过目标区域
    const handleDragOver: React.DragEventHandler<HTMLDivElement> = e => {
        e.dataTransfer.dropEffect = 'copy'
        e.preventDefault()
    }
    // 生成shape组件的样式，主要是通过定位，把组件放到释放的目标位置。
    const getShape = (style: React.CSSProperties): React.CSSProperties => {
        const result: React.CSSProperties = {}
        ShapeStylesProps.forEach(attr => {
            if (attr !== 'rotate') {
                result[attr] = style[attr] + 'px'
            } else {
                // 元素旋转
                result.transform = 'rotate(' + style[attr] + 'deg)'
            }
        })
        return result
    }
    const renderCore = () => {
        return componentData.map(c => {
            const { component, id, style, props } = c
            debugger
            const shapeStyles = getShape({ ...style, ...CommonStyles })
            return (
                <Shape
                    component={component}
                    defaultStyles={style}
                    key={`component-${id}`}
                    propsValue={props}
                    shapeStyle={shapeStyles}
                />
            )
        })
    }
    return (
        <div
            className={styles.canvas}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            ref={canvasRef}
        >
            {/* 网格线 */}
            <Grid />
            {renderCore()}
        </div>
    )
}
const mapStateToProps: MapStateToProps<
    Pick<CanvasProps, 'componentData'>,
    unknown,
    StoreInterface
> = state => {
    return {
        componentData: state.componentData
    }
}

const mapDispatchToProps: MapDispatchToPropsFunction<
    Omit<CanvasProps, 'componentData'>,
    unknown
> = (dispatch: Dispatch<MODIFY_ACTION>) => {
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
