//here we defined all the applications  level states and define actions to make the changes on the state

export const initialState = {
    basket: [],
}

const reducer = (state,action)=>{
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket,action.item],
            }
    }
};

export default reducer;