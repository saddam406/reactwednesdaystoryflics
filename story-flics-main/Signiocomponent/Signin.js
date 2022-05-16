import React, { useState,useEffect } from 'react'
import * as yup from 'yup';
import {isPossiblePhoneNumber} from 'react-phone-number-input'
import styles from '../styles/Home.module.css'
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Button,Input} from 'antd'
import 'antd/dist/antd.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import { useForm, Controller } from "react-hook-form";
import { useDispatch,useSelector} from "react-redux";
import { useRouter } from 'next/router'
import {Signindata} from "../Components/Redux/Action";

function Signin() {
  const [yupvalidate,setYupvalidate]=useState(false)
  const [data,setData]=useState([])
  let dispatch = useDispatch();

const router = useRouter()

const { datas } = useSelector((state) => state.data);  
console.log('first',datas)

  var schema
  
  if(yupvalidate==true){
    schema=yup.object().shape({
     email:yup.string().email().required('Email is required').matches( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/),
     password:yup.string().min(4).max(16).required('password is required')
       })
   }
   else{
    schema=yup.object().shape({
     mobile:yup.number().required('Mobile is Required').test("MobileNumber", "Enter valid Phone Number", (value) => {
       const condition = isPossiblePhoneNumber(value ? `+${value}` : "");
       return condition;
   }),
   password:yup.string().min(4).max(16).required('password is required')
   })}
  const [emailvisibility,setEmailvisibility]=useState(false)
  const [phonevisibility,setPhonevisibility]=useState(false)
  const Onfocusvalidateemail=(e)=>{ 
      setPhonevisibility(true)
      setEmailvisibility(false)
      setYupvalidate(true)     
  }
  const Onfocusvalidatephone=(e)=>{
    setPhonevisibility(false)
    setEmailvisibility(true)
  }
  const { handleSubmit, reset, setValue, control,formState:{ errors } } = useForm({ resolver: yupResolver(schema) });
  // console.log('hiii',errors.Email?.message);
  const handlechange=(value,country)=>{
    console.log("values",value)
    console.log("country",country.dialCode)
    setData({mobile:value,country:country.dialCode})
  }

  const Onsubmit=(value)=>{
    console.log(value) 
    setData({...data,value})
    



    // reset({
    //   email:'',
    //   mobile:'',
    //   password:''
    // })
  }
  useEffect(() => {
    console.log('otp props',data)
    if(data==''|| data==undefined|| data==NaN)   {
      console.log('not data found')
    } 
    else{
    // const interval = setInterval(() => {
    // console.log('otp props1',data)

      validate()
    }
    // , 500);  
    // return () => {
    //   console.log(`clearing interval`);
    //   clearInterval(interval);
    // };
  // }
  },[data])
  const validate=()=>{
    console.log('connections')
    dispatch(Signindata(data.value))
  }
  var href
  useEffect(() => {
    console.log("datas of useeffect",datas)
    if(datas.content===true){
      href='./homehead'
      router.push(href)
      console.log("success")
    }
    else{
      console.log('failed')
      // alert("connection field")
    }
  } )
  console.log("datas1",datas)

  
  return (
    <div>
         <div className={styles.page}>
          <div className={styles.lo}>
          <a href='/'><img src='https://github.com/vijay9655/Sample-img/blob/main/Storyflics%20Logo.png?raw=true' className={styles.log}/></a>
          </div>
          <div className={styles.bord}>
              <p style={{color:'#FF8B00', textAlign:'center',fontSize:'20px',marginTop:'20px'}}>Sign In</p>
                <div className={styles.pad}>
                  <Form onFinish={handleSubmit(Onsubmit)}>
                    <Form.Item>
                      
                      <label style={{color:'white'}}>Email</label>
                      <Controller
                      name='email'
                      control={control}
                      render={({field})=>(
                      <Input  placeholder='Enter Email Id' id='vj' disabled={emailvisibility} onFocus={Onfocusvalidateemail} {...field} style={{width:'95%',color:"white",height:'34px',borderRadius:'5px',marginTop:'0px'}}/>
                      
                      )}/><p>{errors.Email?.message}</p>
                    </Form.Item>
                    <p style={{color:'orange',marginLeft:'45%',fontSize:'15px',marginTop:'-20px'}}>or</p>
                    <Form.Item style={{marginTop:"-31px"}}>
                        <label style={{color:'white'}}>Mobile number</label>
                        {/* <Controller
                        name="MobileNumber"
                        control={control}
                        render={({field})=>( */}
                        <PhoneInput name='mobile' onChange={handlechange} placeholder='Enter Mobile Number'  onFocus={Onfocusvalidatephone} disabled={phonevisibility}  country={'in'} inputStyle={{width:'95%',height:'34px'}} />
                        {/* )}/><p>{errors.MobileNumber?.message}</p> */}
                    </Form.Item>
                    <Form.Item style={{marginTop:'-10px'}}>
                    <label style={{color:'white'}}>Password</label>
                    <Controller
                    name='password'
                    control={control}
                    render={({field})=>(
                    <Input placeholder='Enter Password'  {...field} type='password' style={{width:'95%',height:'34px',borderRadius:'5px',marginTop:'0px' }}/>)}/>
                    <p>{errors.Password?.message}</p>
                    </Form.Item>
                    <p style={{marginTop:'-40px',marginLeft:'61%'}}><a href='./resetpassword' style={{color:'#FF8B00'}}>Forget Password?</a></p>
                    <Form.Item>
                    <Button htmlType='submit' style={{width:'95%',color:'white',backgroundColor:'#FF8B00',border:'none',borderRadius:'5px',marginTop:'15px'}}>Sign in</Button>
                    </Form.Item>
                    <p style={{textAlign:'center',color:'white',marginTop:'-10px'}}>Don't have an account ? <span><a href='./createaccount'style={{color:'#FF8B00'}}>Create</a></span></p>
                  </Form>
                </div>          </div>
        </div>
    </div>
  )
}

export default Signin