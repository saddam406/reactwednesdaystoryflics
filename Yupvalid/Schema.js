import * as yup from 'yup';
import {isPossiblePhoneNumber} from 'react-phone-number-input'

export const schema=yup.object().shape({
    Email:yup.string().email().required('Email is required').matches( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/),
    MobileNumber:yup.number().required('Mobile is Required').test("MobileNumber", "Enter valid Phone Number", (value) => {
        const condition = isPossiblePhoneNumber(value ? `+${value}` : "");
        return condition;    
    }),
   
    Password:yup.string().min(4).max(10).required('password is required')
})