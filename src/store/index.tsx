// 使用react-redux 来管理应用状态
import { createStore, combineReducers } from 'redux'
import componentDataReducer from './reducer'
interface StoreInterface {
    componentData: any[]
}

const initValues: StoreInterface = {
    componentData: [] // 画布组件数据
}
const reducer = combineReducers({
    componentData: componentDataReducer
})

const store = createStore(reducer, initValues)
export default store
