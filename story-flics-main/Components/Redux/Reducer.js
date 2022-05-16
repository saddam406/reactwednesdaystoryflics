import * as types from "./Actiontype"
const initialstate={
    users:[],    
    otp:[],
    password:[],
    datas:[],    
};
const reducers =(state=initialstate,action)=>{
    switch (action.type){
        case types.Signin_DATA:
        case types.Signup_DATA:  
            return {
                ...state,
                users:action.payload,
                            }
        case types.Signindata_DATA:      
            return {
                ...state,
                datas:action.payload,
            }
        case types.Verify_DATA:
            return{
                ...state,
                otp:action.payload,
            };
        case types.Password_DATA:
            return{
                ...state,
                password:action.payload,
            }
        
           
        default:
            return state;
        
    }
};
export default reducers;