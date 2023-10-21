export const initialstate = {
    basket: [],
    user:null
}
//Selector
export const getBasketTotal=(basket)=> {
    return basket?.reduce((sum , item)=> item.price+sum ,0)
}
const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            //find the index of the id that you want to remove
            const index = state.basket.findIndex((basketItem)=>basketItem.id===action.id);
            //creating a copy of my basket
            let newBasket=[...state.basket];
            if (index>=0){
                newBasket.splice(index,1);
            }
            else{
                console.warn(`Can not remove product id : ${action.id} as it is not in basket !`);
            }
            return {...state, basket: newBasket}
        case "EMPTY_BASKET":
            return {
                ...state,
                basket : []
            }
        case "SET_USER":
            return {
                ...state,
                user:action.user
            }

        default: return state
    }
}
export default reducer