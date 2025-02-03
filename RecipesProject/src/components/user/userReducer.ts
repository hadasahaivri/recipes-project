import { createContext, Dispatch } from "react";


export type UserType = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    adress:string
    password: string;
    phone: string;
}

type Action = {
    type: 'SIGNUP';
    data: Pick<UserType, 'id' | 'email' | 'password'>;
} | {
    type: 'LOGIN';
    data: UserType;
} | {
    type: 'UPDATE';
    data: Partial<UserType>
} | {
    type: 'LOGOUT';
}

export const userReducer = (state: UserType, action: Action): UserType => {
    console.log("UserReducer action received:", action);
    switch (action.type) {
        case 'SIGNUP':
            return { ...state, ...action.data };
        case 'LOGIN':
            return { ...state, ...action.data }
        case 'UPDATE':
            return { ...state, ...action.data }
        case 'LOGOUT':
            return {} as UserType;
        default:
            return state;
    }
}
export default userReducer;

export const initialState:UserType={
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    adress:'',
    password:'',
    phone: '',
}

export const UserContext= createContext<{
    state: UserType;
    dispatch: Dispatch<Action>;
}>({
    state: initialState,
    dispatch:()=>null,
})




