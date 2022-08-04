import { ADD_EMPLOYEE } from "../actions/Employee";

const INITIAL_STATE = {
    fname: '', 
    lname: '',
    tel: '',
    email: ''
}
export default function empReducer (state=INITIAL_STATE, action){
    switch(action.type) {
        case ADD_EMPLOYEE: 
            return [
                ...state, action.payload
            ]
        default: return false
    }
}