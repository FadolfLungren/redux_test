const defaultState = {
    cash:5,
    message:'your mom is gay'
}

export const appReducer = (state = defaultState, action) =>{
    switch(action.type){
        case "ADD":
            return {...state, cash: state.cash + action.payload}
        case "GET":
            return {...state, cash: state.cash - action.payload}
        default:
            return state
    }
}