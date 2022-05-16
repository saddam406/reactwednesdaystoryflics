import React from 'react'
import styles from '../styles/Home.module.css'
import { Avatar, Button,Input } from 'antd'
import {UserOutlined} from '@ant-design/icons'
// import Homeselect from './Homeselect';
// import Homedrop from './Homedrop';


const { Search } = Input;
const onSearch = value => console.log(value);

function Homehead() {
  return (
    <div>
        <div className={styles.Navbar}>
         
           <a href='/' style={{color:'white'}}><img src='https://github.com/vijay9655/Sample-img/blob/main/Storyflics%20Logo.png?raw=true' className={styles.loogo}/></a>
            <div>
              <ul className={styles.me}>
                <li><a style={{color:'white'}} href='#'>Home</a></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   {/* <Homedrop/> */}
              
                <Search placeholder="Search..."  onSearch={onSearch} style={{ width: 300,marginLeft:'390px',marginTop:'-4px' ,border:"1px solid white",background:'rgb(8 44 68)'}} bordered={false} compact={false} />

                <Button style={{backgroundColor:'#FF8B00',color:'white',marginLeft:'20px',marginTop:'-4px', width:'10%',border:'none'}}><a style={{color:"white"}} href='./upload'>Upload</a></Button>

               <a href='/' style={{color:'white'}}><Avatar icon={<UserOutlined/>} style={{marginTop:'-4px',marginLeft:'30px',width:'50px'}}/></a> 
            </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Homehead