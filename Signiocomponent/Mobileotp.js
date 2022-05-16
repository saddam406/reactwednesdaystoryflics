import React from 'react'
import styles from '../styles/Home.module.css'
import { Form, Button,Input} from 'antd'
import 'antd/dist/antd.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function Mobileotp() {
  return (
    <div><div className={styles.page}>
    <div className={styles.lo}>
      <img src='https://github.com/vijay9655/Sample-img/blob/main/Storyflics%20Logo.png?raw=true' className={styles.log}/>
     </div>

     <div className={styles.bo}>
         <p style={{color:'#FF8B00', textAlign:'center',fontSize:'20px',marginTop:'20px'}}>Reset Password</p>
           <div className={styles.paddd}>
            <Form>
               <Form.Item>
               <label style={{color:'white'}}>Email</label>
               <Input style={{width:'95%',height:'34px',borderRadius:'5px',border:'none',marginTop:'0px'}}/>
                </Form.Item>
                <p style={{color:'orange',marginLeft:'45%',fontSize:'15px',marginTop:'-10px'}}>or</p>
                <Form.Item style={{marginTop:"-21px"}}>
                  <label style={{color:'white',marginTop:'20px'}}>Mobile number</label>
                  <PhoneInput country={'in'} inputStyle={{width:'95%',height:'34px'}} />
                </Form.Item>
                <Button style={{width:'95%',padding:'6px',color:'white',backgroundColor:'#FF8B00',border:'none',borderRadius:'5px', marginTop:'10px'}}>Send OTP</Button>
            </Form>
           </div>
     </div>
</div></div>
  )
}

export default Mobileotp