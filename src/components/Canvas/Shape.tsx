/*
 * @Desc:
 * @Author: wringY
 * @Date: 2021-11-10 18:57:23
 * @LastEditTime: 2021-11-14 18:57:38
 * @FilePath: \dran-g\src\components\Canvas\Shape.tsx
 */
// 用来记录组件在画布中的位置信息, 同时支持拉伸，旋转，锁定等操作。
import * as React from 'react'
import styles from './index.less'
import { Autorenew, LockOutlined } from '@material-ui/icons'

interface ShapeInterface {
    component: React.FC<any>
    defaultStyles: React.CSSProperties // 对应material的样式
    propsValue: any
    shapeStyle: React.CSSProperties // 当前shape组件的样式，主要是大小，位置等
}

const pointList = ['lt', 't', 'rt', 'r', 'rb', 'b', 'lb', 'l'] // 八个方向

const Shape: React.FC<ShapeInterface> = ({
    component,
    defaultStyles,
    propsValue,
    shapeStyle
}) => {
    const Com = component
    return (
        <div className={styles.shape} style={shapeStyle}>
            {/* 旋转icon */}
            {/* <Autorenew sx={{ color: '#59c7f9' }} /> */}
            {/* 锁定icon 不允许进行布局操作  // todo */}
            {/* <LockOutlined sx={{ color: '#59c7f9' }} /> */}
            {/* 拉伸icon */}
            <PointerSkeleton
                pointList={pointList}
                size={{
                    width: defaultStyles.width as number,
                    height: defaultStyles.height as number
                }}
            />
            <Com styles={defaultStyles} {...propsValue} />
        </div>
    )
}

interface PointerSkeletonProps {
    pointList: string[]
    size: {
        width: number
        height: number
    }
}

const PointerSkeleton: React.FC<PointerSkeletonProps> = ({
    pointList,
    size
}) => {
    // 设置拉伸骨架样式
    const setSkeletonStyle = item => {
        const { width, height } = size

        // 判断方向
        const hasL = /l/.test(item)
        const hasR = /r/.test(item)
        const hasT = /t/.test(item)
        const hasB = /b/.test(item)
        // 骨架点的位置信息
        let newLeft = 0
        let newTop = 0
        debugger
        // 四个角的点
        if (item.length === 2) {
            newLeft = hasL ? 0 : (width as number)
            newTop = hasT ? 0 : (height as number)
        } else {
            // 上下的两点，宽度居中
            if (hasT || hasB) {
                newLeft = width / 2
                newTop = hasT ? 0 : height
            }
            // 左右的两点，高度居中
            if (hasL || hasR) {
                newLeft = hasL ? 0 : width
                newTop = height / 2
            }
        }

        const style = {
            left: `${newLeft}px`,
            top: `${newTop}px`,
            marginLeft: '-4px',
            marginTop: '-4px'
        }
        return style
    }
    return (
        <>
            {pointList.map(item => {
                return (
                    <div
                        className={styles.shapeIcon}
                        key={item}
                        style={setSkeletonStyle(item)}
                    ></div>
                )
            })}
        </>
    )
}

export default Shape
