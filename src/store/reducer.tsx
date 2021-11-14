/*
 * @Desc:
 * @Author: wringY
 * @Date: 2021-11-10 19:22:25
 * @LastEditTime: 2021-11-14 10:40:45
 * @FilePath: \dran-g\src\store\reducer.tsx
 */
import * as ActionTypes from './actions/type'
import { MODIFY_ACTION } from './actions'
import { ComponentDataType } from './index'


export default (state: ComponentDataType[] = [], action: MODIFY_ACTION) => {
    switch (action.type) {
        case ActionTypes.ADD_COMPONENT: {
            const { component } = action
            return [...state, component]
        }
        case ActionTypes.DEL_COMPONENT: {
            const { id } = action
            return state.filter(s => s.id !== id)
        }
        default: {
            return state
        }
    }
}
