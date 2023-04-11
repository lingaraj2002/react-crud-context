export const initialState = {
    task:[],
    edit:[]
};
export const stateReducer = (state,action)=>{
    switch(action.type){

        case"PUSH":
        return{...state,task:action.payload}

        case"DELETE":
        return{...state,task:action.payload} 
        
        case"EDIT":
        return{...state,edit:action.payload}  

        default:
        return state
    }   
};