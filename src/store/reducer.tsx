import * as ActionTypes from './actions/type'

export default (state: any = [], action) => {
    debugger
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