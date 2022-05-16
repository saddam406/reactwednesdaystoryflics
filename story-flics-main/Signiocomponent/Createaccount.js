import React,{useState,useEffect}  from 'react'
import styles from '../styles/Home.module.css'
import { Form, Button,Input } from 'antd'
import * as yup from 'yup';
import 'antd/dist/antd.css';
import PhoneInput from 'react-phone-input-2'
import {isPossiblePhoneNumber} from 'react-phone-number-input'
  import 'react-phone-input-2/lib/style.css'
import OtpInput from 'react-otp-input'
import { yupResolver } from "@hookform/resolvers/yup";
import 'antd/dist/antd.css';
import { useForm, Controller } from "react-hook-form";
// redux using
import { useDispatch,useSelector} from "react-redux";
import { Sigupdata, Verifydata,Logindata,Userdatapost} from "../Components/Redux/Action";
import { useRouter } from 'next/router'
import { validatePhoneNumberLength } from 'libphonenumber-js/core';


function Createaccount() {
  const router = useRouter()
  const [emailvisibility,setEmailvisibility]=useState(false)
  const [phonevisibility,setPhonevisibility]=useState(false)
  const [yupvalidate,setYupvalidate]=useState(false)
  const [view,setView]=useState([])
  const [otpwait,setOtpwait]=useState([{
    content:false
  }])
  var schema;
let dispatch = useDispatch();

	const { users } = useSelector((state) => state.data);
  const {otp}=useSelector((state)=>state.data)
  useEffect(() => {
		dispatch(Logindata());
	}, []);
  useEffect(() => {
    setOtpwait(otp)
    console.log('otp props',otpwait)
    
    const interval = setInterval(() => {
      validate()
    }, 500);  
    return () => {
      console.log(`clearing interval`);
      clearInterval(interval);
    };
  },)
  
  const validate =()=>{
    if(otpwait==='' || otpwait===undefined){
      console.log("failed")
    }
    else if(otpwait.content==true){
      href='./createpassword'
      router.push(href)
      console.log("success")
    }
    else{
   
      console.log("failed")
    }
}    
  
  
  
  console.log('user datas',users)

  const Onfocusvalidateemail=()=>{ 
            setPhonevisibility(true)
            setEmailvisibility(false)
            setYupvalidate(true)  
  }
  
  const Onfocusvalidatephone=()=>{
    setPhonevisibility(false)
    setEmailvisibility(true)    
  }
  const handleChange=(otp)=>{
    setView({...view,otp})
      console.log('otp value',otp)
  }
if(yupvalidate==true){
   schema=yup.object().shape({
    email:yup.string().email().required('Email is required').matches( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/),
    })
 
  }
  else{
   schema=yup.object().shape({
    mobile:yup.number().required('Mobile is Required').test("MobileNumber", "Enter valid Phone Number", (value) => {
      const condition = isPossiblePhoneNumber(value ? `+${value}` : "");
      return condition;
      
  }),

  })
}
    
  const {handleSubmit,reset,control,formState:{ errors },} = useForm({ resolver: yupResolver(schema)});
  const Onsubmit=(value)=>
  {   
    // console.log('country value',country)
    console.log('hii',value)
    if(value.otp===undefined || value.otp===""){
    console.log('create value submit',value)
    dispatch(Sigupdata(value))
  setView(value)  

    }
   
    else{
    console.log('create verify value submit',value)
    setView(value)
    
    }
  }
  var href

const Onsubmitotp=()=>{
  console.log("otp",view)
  dispatch(Verifydata(view))  
  dispatch(Userdatapost(view))
  console.log("otp wait",otpwait)
}

  return (
    <div><div className={styles.page}>
    <div className={styles.lo}>
    <a href='/'><img src='https://github.com/vijay9655/Sample-img/blob/main/Storyflics%20Logo.png?raw=true' className={styles.log}/></a>
    </div>
     <div className={styles.bordd}>
        <p style={{color:'#FF8B00', textAlign:'center',fontWeight:'bold',fontSize:'20px',marginTop:'20px'}}>Create new account</p>
            <div className={styles.padi}>
            <Form onFinish={handleSubmit(Onsubmit)}>
            <Form.Item style={{marginTop:'-20px'}}>
              <label style={{color:'white'}}>Email</label>
              <Controller
               name='email'
               control={control}
               render={({field})=>(
              <Input placeholder='Enter Email' disabled={emailvisibility} onFocus={Onfocusvalidateemail} type='email' {...field} style={{width:'95%',height:'34px',borderRadius:'5px',color:"white",marginTop:'0px'}}/>
               )}/>{errors.email?.message}
            </Form.Item>
            <p style={{color:'#FF8B00',marginLeft:'50%',fontSize:'15px',marginTop:'-10px'}}>or</p>
            <Form.Item style={{marginTop:"-21px"}}>
                <label style={{color:'white',marginTop:'20px'}}>Mobile number</label>
                <Controller
               name='mobile'
               control={control}
               render={({field})=>(
                <PhoneInput onFocus={Onfocusvalidatephone} disabled={phonevisibility} {...field} country={'in'}  inputStyle={{width:'95%',height:'34px'}} />
               )}/>{errors.mobile?.message}
            </Form.Item>
            <Button htmlType='submit'  style={{width:'95%',color:'white',backgroundColor:'#FF8B00',border:'none',borderRadius:'5px'}}>Send OTP</Button>
            <p style={{color:'#FF8B00', marginTop:'0px'}}>Resend OTP</p>

            <Form.Item style={{marginTop:'10px'}}>
            <label style={{color:'white'}}>Enter OTP</label>
            
           

            <OtpInput numInputs={6} value={view.otp} onChange={handleChange} 
            separator={<span style={{color:' #314a66'}}>--</span>} inputStyle={{width:'42px',height:'42px',border:'none',borderRadius:'4px'}}  />
         

            
           </Form.Item>
           <Button  style={{width:'95%',color:'white',backgroundColor:'#FF8B00',border:'none',borderRadius:'5px'}}><a href={href} onClick={Onsubmitotp}>Verify</a></Button>
           {/* {view===true?<Button htmlType='submit' style={{width:'95%',color:'white',backgroundColor:'#FF8B00',border:'none',borderRadius:'5px'}}><a href='./createpassword'>Verify</a></Button>:<Button htmlType='submit' style={{width:'95%',color:'white',backgroundColor:'#FF8B00',border:'none',borderRadius:'5px'}}>Verify</Button> } */}
          
            </Form>
            <p style={{textAlign:'center',color:'white', marginTop:'15px'}}>Already have an account ? <span ><a href={href} style={{color:'#FF8B00'}}>Sign In</a></span></p>
            </div>
     </div>
 </div>       
    </div>
  )
}

export default Createaccount