/*
 * @Desc:
 * @Author: wringY
 * @Date: 2021-11-10 19:24:49
 * @LastEditTime: 2021-11-13 16:11:03
 * @FilePath: \dran-g\src\store\actions\index.ts
 */
import * as ActionsType from './type'
// 导入redux 中action函数类型
import { ActionCreator } from 'redux'
import { ADD_COMPONEN_TYPE, DEL_COMPONENT_TYPE } from './type'
import { MaterialIterface } from '../../components/Materials/index'
// 向store添加组件 action对象
export type ADD_COMPONEN_ACTION = {
    type: ADD_COMPONEN_TYPE
    component: MaterialIterface
}
// 从store中移除组件 action对象
export type DEL_COMPONENT_ACTION = {
    type: DEL_COMPONENT_TYPE
    id: number
}
// 所有可能被派发的action 类型
export type MODIFY_ACTION = ADD_COMPONEN_ACTION | DEL_COMPONENT_ACTION

// 向store添加组件 action creator函数
export const addComponent: ActionCreator<ADD_COMPONEN_ACTION> = (
    component: MaterialIterface
) => {
    return {
        type: ActionsType.ADD_COMPONENT,
        component
    }
}
// 从store中移除组件 action creator函数
export const delComponent: ActionCreator<DEL_COMPONENT_ACTION> = (
    id: number
) => {
    return {
        type: ActionsType.DEL_COMPONENT,
        id
    }
}
