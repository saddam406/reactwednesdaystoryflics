import { Button, Steps, Upload, Space } from 'antd'
import React, { useState } from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import styles from '../styles/Home.module.css'
import Codeupload from './Codeupload';

const { Step } = Steps;

const step = [
  {
    title:'upload'
  },
  {
    title:'details'
  },
  {
    title:'categories'
  }
]

function Uploadtab() {
  const [current, setCurrent]=useState(0)

  const next = () => {
    setCurrent(current + 1);

  };

  
  return (
    <div className={styles.upp}>
      
       
        <div className={styles.borr}>
           <img src='https://github.com/JK-Jayakumar/JK-Jayakumar/blob/main/Upload%20icon.png?raw=true' className={styles.upicon}/>
             <p style={{fontSize:'20px', textAlign:'center',marginTop:'30px',fontWeight:'bold',fontFamily:'inherit'}}>Drag and drop video file to upload</p>

             <Space direction="vertical" style={{ width: '100%' }} size="large">
               <Upload
                 listType="video"
                 maxCount={1}
                 >
                   <Button> Select File </Button>
               </Upload>
             
           </Space>
       </div>
        
    
    </div>
  )
}

export default Uploadtab