import * as ActionsType from './type'

export const addComponent = component => {
    return {
        type: ActionsType.ADD_COMPONENT,
        component
    }
}
export const delComponent = id => {
    return {
        type: ActionsType.DEL_COMPONENT,
        id
    }
}
