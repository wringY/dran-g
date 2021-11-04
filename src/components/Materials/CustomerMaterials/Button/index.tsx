/*
 * @Desc:
 * @Author: wringY
 * @Date: 2021-11-03 17:37:21
 * @LastEditTime: 2021-11-03 23:59:29
 * @FilePath: \my-app-ts\src\components\Materials\CustomerComponents\Button\index.tsx
 */
import * as React from 'react'
interface ButtonInterface {
    value: string
    style: React.CSSProperties
}
const CButton: React.FC<ButtonInterface> = ({ value, style }) => {
    return <button style={style}>{value}</button>
}
export default CButton
