import React,{useState} from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from '../styles/Home.module.css'
import {useForm,Controller} from 'react-hook-form'
import Bodycomponent from './Bodycomponent';

import Selectcom from './Selectcom'
import Bodycomponent1 from './Bodycomponent1';
import Bodycomponent2 from './Bodycomponent2';
import Bodycomponent3 from './Bodycomponent3';
import Footercomponent from './Footercomponent';

function Navcomponent() {  
    const {handleSubmit,control}=useForm()
      const onsubmit=(value)=>{
          console.log("select",value)
      }
  return (
    <div>
        <form onSubmit={handleSubmit(onsubmit)}>            
         <Stack  className={styles.container} style={{background:"#31466E",width:"100%",height:'60px',position:'fixed'}} spacing={6} direction="row">
        <img style={{padding:'10px 0px 10px 0px',height:'65px',marginTop:'-2px'}} src='https://github.com/vijay9655/Sample-img/blob/main/Storyflics%20Logo.png?raw=true'/>
         <Selectcom/>
         <Button style={{background:'#f48c0c',color:'white',width:'100px',height:'33px',marginTop:'14px',borderRadius:'5px',fontSize:'12px'}}><a href="./signin" style={{color:'white'}}>sign in</a></Button>
     </Stack>
     <Bodycomponent/>
     <Bodycomponent1/>
     <Bodycomponent2/>
     <Bodycomponent3/>
     <Footercomponent/>     

     </form>
   
     </div>       
    
  )
};

export default Navcomponent