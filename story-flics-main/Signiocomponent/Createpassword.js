import React,{useEffect,useState} from 'react'
import styles from '../styles/Home.module.css'
import { Form, Button,Input } from 'antd'
import 'antd/dist/antd.css';
import { useForm, Controller } from "react-hook-form";
import Password from 'antd/lib/input/Password';
import {Passworddata} from "../Components/Redux/Action";
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import {Logindata,DeleteData} from "../Components/Redux/Action";
import { useDispatch,useSelector} from "react-redux";
import { useRouter } from 'next/router'




function Createpassword() {
const router = useRouter()

  const [user,setUser]=useState({})

let dispatch = useDispatch();
const { users } = useSelector((state) => state.data);
const {password} = useSelector((state)=>state.data)

console.log('vijay',users)
console.log('push ',user)

  useEffect(() => {
     setUser(users)
   
  },[])
  useEffect(()=>{
    console.log('user value',user)
    if(user.password!==''){
      dispatch(Passworddata(user))
    }
    const interval = setInterval(() => {
      console.log("password response",password)
      validate()
    }, 1000);
  
    return () => {
      console.log(`clearing interval`);
      clearInterval(interval);
    };
  },[user])
console.log('user value',user)
const schema = Yup.object().shape({
  password: Yup.string().min(8).max(16).required("please enter password").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/),
  confirmpassword: Yup.string().min(8).max(16).label('confirm password').required("please enter password").oneOf([Yup.ref('password'), null], 'Passwords must match'),
});
  const {handleSubmit,reset,value,control,formState:{ errors },} = useForm({ resolver: yupResolver(schema)});
  console.log('value',value)
  const Onsubmit=(value)=>{
    setUser({...user,password:value.password})

  
        console.log('set interval data',user)
  
        var id=1
        dispatch(DeleteData(id))    
        for(let i=0;i<=user.length;i++){
          id=id+1;
          dispatch(DeleteData(id))    
            }    
  }
  var href
  const validate =()=>{
   
    if(password==='' || password===undefined){
      console.log("failed")
    }
    else if(password.content==true){
      // change into home page navigate
      href='./homehead'
      router.push(href)
      console.log("success")
    }
    else{
         console.log("failed")
    }
}    


  return (
    <div> 
        <div className={styles.page}>
          <div className={styles.lo}>
          <a href='/'> <img src='https://github.com/vijay9655/Sample-img/blob/main/Storyflics%20Logo.png?raw=true' className={styles.log}/></a>
          </div>

          <div className={styles.bor}>
            <p style={{color:'#FF8B00', textAlign:'center',fontSize:'24px',marginTop:'20px'}}>Create new password</p>
                <div className={styles.padd}>
                    <Form onFinish={handleSubmit(Onsubmit)}>
                        <Form.Item> 
                             <label style={{color:'white'}}>New Password</label>
                             <Controller
                             control={control}
                             name="password"
                             render={({field})=>(
                             <Input  {...field} type='password' style={{width:'95%',height:'34px',borderRadius:'5px',color:'white',marginTop:'10px'}}/>
                             )}/>{errors.password?.message}
                        </Form.Item>

                        <Form.Item style={{marginTop:'-15px'}}>
                             <label style={{color:'white'}}>Confirm New Password</label>
                             <Controller
                             control={control}
                             name="confirmpassword"
                             render={({field})=>(
                             <Input type="password" {...field} style={{width:'95%',height:'34px',borderRadius:'5px',color:'white',marginTop:'10px'}}/> 
                             )}/>{errors.confirmpassword?.message}
                        </Form.Item>

                        <Button htmlType='submit' style={{width:'95%',color:'white',backgroundColor:'#FF8B00',borderRadius:'5px',marginTop:'10px'}}>Confirm</Button>
                    </Form>
                </div>
          </div>
       </div>
    </div>
  )
}

export default Createpassword