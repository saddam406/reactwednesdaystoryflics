import React,{useState} from 'react'
import {useForm,Controller} from 'react-hook-form'

import styles from '../styles/Home.module.css'
import 'antd/dist/antd.css';
  import { Select } from 'antd';
  const { Option } = Select;
function Selectcom() {
  
  
  return (
    <div>       
       <Select className={styles.select} 
          defaultValue={'english'}         
          dropdownClassName={styles.vj}
          // options={options}
        >
          <Option style={{color:'#747474',fontWeight:'bold'}} value="english">English</Option>
          <Option style={{color:'#747474',fontWeight:'bold'}} value="tamil">Tamil</Option>
          <Option style={{color:'#747474',fontWeight:'bold'}} value="hindi">Hindi</Option>



        </Select>
 </div>
  )
}

export default Selectcom