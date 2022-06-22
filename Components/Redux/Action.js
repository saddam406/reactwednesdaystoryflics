import * as types from './Actiontype' 
import axios, { Axios } from 'axios'
import { passThroughSymbol } from 'next/dist/server/web/spec-compliant/fetch-event'


export const signindata=(datas)=>({
    type:types.Signindata_DATA,
    payload:datas
})
export const signin=(users)=>({
    type:types.Signin_DATA,
    payload:users
})
const deleteData = () => ({
	type: types.DELETE_DATA,
});
export const Signup=(users)=>({
    type:types.Signup_DATA,
    payload:users
})
export const Verify=(otp)=>({
    type:types.Verify_DATA,
    payload:otp
})
export const Password=(password)=>({
    type:types.Password_DATA,
    payload:password
})
//store mock api from user data to transfer create password component
export const Userdatapost=(users)=>{
    return function(dispatch){        
        axios.post('https://62172d3871e7672e5375b02f.mockapi.io/vijayapi/values',users)
        .then((res)=>{
          dispatch(signin(res.data));
          console.log("respose user post method login data",res.data);
        // alert("successfully response data")
        });
    }
}


// altready signin datas view from mock api inside function 
export const Logindata=()=>{
    return function(dispatch){
        
        axios.get('https://62172d3871e7672e5375b02f.mockapi.io/vijayapi/values')
        .then((res)=>{
          dispatch(signin(res.data));
          console.log("response user get method login data",res.data)
        //   alert('Logindata')
        });
    }
}
export const DeleteData = (id) => {   
	return function (dispatch) {
		axios
			.delete(`https://62172d3871e7672e5375b02f.mockapi.io/vijayapi/values/${id}`)
			.then(()=> {
				dispatch(deleteData());
				
			});
	};
// }
};
export const Signindata=(datas)=>{
    console.log('signinn action data',datas)
        return function(dispatch){
        axios.post('http://3.110.168.199:3000/signin',datas)
        .then((res)=>{
            dispatch(signindata(res.data));
            // alert('OTP send successfully')
            console.log("signindata response data",res.data)
            // dispatch(signin());
        })
    }
}

// New signup datas inside function
export const Sigupdata=(users)=>{
    
    return function(dispatch){
        axios.post('http://3.110.168.199:3000/sendotp',users)
        .then(()=>{
            dispatch(Signup());
            // alert('OTP send successfully')
            dispatch(signin());
        })
    }
}
export const Verifydata=(users)=>{
    console.log('verifydata',users)
    return  function(dispatch){
       axios.post('http://3.110.168.199:3000/verifyandtopass',users)
        .then((res)=>{
            dispatch(Verify(res.data));
            console.log("otp send successfully",res.data)
              // dispatch(Signin());             
           
        })
   

    }

}


export const Passworddata=(users)=>{
    console.log("user in action",users)
    return function(dispatch){
        axios.post('http://3.110.168.199:3000/signup',users)
        .then((res)=>{
           dispatch(Password(res.data));
            // dispatch(Signin());
                console.log('succesfully login verified',res.data)
            })
    }
}
