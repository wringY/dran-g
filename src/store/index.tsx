/*
 * @Desc:
 * @Author: wringY
 * @Date: 2021-11-05 10:40:44
 * @LastEditTime: 2021-11-14 11:21:55
 * @FilePath: \dran-g\src\store\index.tsx
 */
// 使用react-redux 来管理应用状态
import { createStore, combineReducers, Store } from 'redux'
import componentDataReducer from './reducer'
import { MaterialIterface } from '../components/Materials/index'

/* 画布数据类型 */
export type ComponentDataType = MaterialIterface & { id: number }
export interface StoreInterface {
    componentData: ComponentDataType[]
}

const initValues: StoreInterface = {
    componentData: [] // 画布组件数据
}
const reducer = combineReducers({
    componentData: componentDataReducer
})

const store: Store = createStore(reducer, initValues as any)
export default store
