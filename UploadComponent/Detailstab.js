import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import { Button, Form, Input, Steps, Upload } from 'antd'
import { height } from '@mui/system';
import TextArea from 'antd/lib/input/TextArea';
import Codeupload from './Codeupload';
import UploadVdo from './Upvideo';

function Detailstab({bg,current}) {
  // const [count, setCount] = useState(0)
  // const bg=props.bg
  // console.log('hiii',bg)
  // console.log('current',current)

  // const next = () => {
  //   setCurrent(current + 1);
  // };

  const { Step } = Steps;

  return (
    <div>
      <div>
        
        <div className={styles.bordee}>
        <Form>
          <Form.Item>
          <div>
            <label style={{fontSize:'20px',color:'white',fontWeight:'bold',float:'left',marginLeft:'20px'}}>Title</label>
           
            <Input showCount maxLength={100} size='large' placeholder='Add a title to story' style={{background:'transparent',width:'95%',borderRadius:'5px',inputSize:'default',color:'white',fontSize:'22px'}}/>
            </div>
          </Form.Item>
          <Form.Item>
            <label style={{fontSize:'20px',color:'white',fontWeight:'bold',float:'left',marginLeft:'20px'}}>Description</label>
            <TextArea showCount maxLength={5000} rows={3} placeholder='Tell viewers about your story' style={{width:'95%',borderRadius:'5px',color:'white',background:'transparent',marginLeft:'20px',fontSize:'20px'}}></TextArea>
          </Form.Item>
          

          <div className={styles.thumb}>
            <UploadVdo/>
          </div>
        </Form>
        </div>
        
      </div>
    </div>
  )
}

export default Detailstab