import { ADD_EMPLOYEE } from "./Employee";
import { default as UUID } from 'node-uuid'

export const createEmployee = ()=>({
    type: ADD_EMPLOYEE,
    payload: {
        id: UUID.v4(),
        fname, 
        lname, 
        tel,
        email
    }
})