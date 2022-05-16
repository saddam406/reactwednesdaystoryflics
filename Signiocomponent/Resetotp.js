import React,{useState} from 'react'
import styles from '../styles/Home.module.css'
import { Form, Button} from 'antd'
import OtpInput from 'react-otp-input'
import 'antd/dist/antd.css';

function Resetotp() {
    const [Value, setValue] = useState({otp:""});
    const handleChange=(otp)=>{
        
        setValue({otp});
    }
  return (
    <div>  <div className={styles.page}>
    <div className={styles.lo}>
        <img src='https://github.com/vijay9655/Sample-img/blob/main/Storyflics%20Logo.png?raw=true' className={styles.log}/>
    </div>
    
    <div className={styles.bo}>
       <p style={{color:'#FF8B00', textAlign:'center',fontSize:'24px',marginTop:'20px'}}>Reset Password</p>
         <div className={styles.paddd}>
            <p style={{color:'white',textAlign:'center'}}>Please enter the verification code sent</p>
            <p style={{color:'white',marginLeft:'100px',marginTop:'-20px'}}>to <span style={{color:'orange'}}>xyz@gmail.com</span></p> 

          <Form>
              <Form.Item style={{marginLeft:'20px'}}>
                  <label style={{color:'white'}}>Enter OTP</label>
                  <OtpInput numInputs={6} value={Value.otp}
                  onChange={handleChange} separator={<span style={{color:' #314a66'}}>-</span>} inputStyle={{width:'42px',height:'42px',border:'none',borderRadius:'4px'}}  />
              </Form.Item>
              <Button style={{width:'86%',marginLeft:'22px',color:'white',backgroundColor:'#FF8B00',border:'none',borderRadius:'5px', marginTop:'10px'}}>Verify</Button>
              <p style={{color:'#FF8B00', textAlign:'center', marginTop:'30px'}}>Resend OTP</p>
              </Form>
         </div>
   </div>
 </div></div>
  )
}

export default Resetotp