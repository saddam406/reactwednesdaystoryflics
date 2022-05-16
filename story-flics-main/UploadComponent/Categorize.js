import React, {useState} from 'react'
import styles from '../styles/Home.module.css'
import {Radio, Select, Steps,Tag} from 'antd'
import Uploadtab from './Uploadtab';
import EditableTagGroup from './Taghash'
import Selectbox from './Selectbox';


const {Option}=Select;

function Categorize() {
    const [count, setCount] = useState(0)
    const [rad, setRad] = useState(1)
    
    const {Step} = Steps

    const onChange= (e)=>{
        setRad(e.target.value)
    }

  return (
        <div >
                
             <div className={styles.cat}>
                <div>
                    <ul style={{listStyleType:'none',display:'left'}}>
                        <li>
                        <div style={{marginTop:'80px'}}>
                          <label style={{color:'white',fontWeight:'bold',float:'left',marginLeft:'-19px'}}>Language</label>
                            <Select style={{width:'50%',backgroundColor:'white',borderRadius:'5px',float:'left',marginLeft:'50px'}} placeholder={'Select'}>
                    
                             <Option value='Tamil'>Tamil</Option>
                             <Option value='Hindi'>Hindi</Option>
                             </Select>          
                        </div>
                        </li><br/>
                        <li style={{marginTop:'50px', display:'flex'}}>
                          <label style={{color:'white',fontWeight:'bold',marginLeft:'-25px'}}>Genres</label>
                             <Selectbox/>
                        </li>

                        <li style={{marginTop:'50px'}}>
                            <label style={{color:'white',fontWeight:'bold',marginLeft:'-10%'}}>Age Group</label>
                             
                            <Radio.Group style={{marginLeft:'30px'}} onChange={onChange} value={rad}>
                                <Radio value={1} style={{color:'white'}}>Kids(5-12)</Radio>
                                <Radio value={2} style={{color:'white'}}>Teens(13-18)</Radio>
                                <Radio value={3} style={{color:'white'}}>Adults(18+)</Radio>
                            </Radio.Group>
                        </li>

                        <li style={{marginTop:'50px',display:'flex'}}>
                            <label style={{color:'white',fontWeight:'bold',marginLeft:'-5%'}}>Tags</label>
                            <EditableTagGroup /> 
                        </li>
                    </ul>
                </div>
             </div>
        </div>
  )
}

export default Categorize