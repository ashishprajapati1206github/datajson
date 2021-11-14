import { ADD_TO_CART,REMOVE_TO_CART } from '../constants'
const initialState = {
    data: []
}
export default function cardItems(state = [initialState], action) {
    switch (action.type) {
        case ADD_TO_CART:
            // console.warn("reducer",action)
            return [
                ...state,
                {data:action.data}
            ]
            case REMOVE_TO_CART:
            // console.warn("reducer",action)
            state.pop();
            return [
                ...state,
                
            ]
        default:
            return state
    }


}
