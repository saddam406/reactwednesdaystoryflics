import React from 'react'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';



function Bodycomponent() {
  return (
    <div className={styles.bodyheader}>
                <div style={{marginTop:'-400px',marginLeft:'80px'}}><p style={{fontWeight:'bold',fontSize:'40px',color:'white',marginLeft:'70px',marginTop:'35px',fontFamily:'sans-serif'}}>Hi, we're Storyflics.</p>
        <p style={{fontWeight:'bold',fontSize:'22px',color:'white',marginLeft:'15px',fontFamily:'sans-serif'}}>Storyflics connects a global community of users <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to watch and upload stories.</p>
      <ul style={{listStyleType:'none',display:'flex',marginLeft:'-15px'}}>
           <li><Button style={{background:'#f48c0c',fontWeight:'bold',color:"white",padding:'10px 45px',fontSize:'14px',fontFamily:'sans-serif',position:'unset'}}><a href='./createaccount' style={{color:'white'}}>Watch a Story</a></Button></li>
           <li><Button style={{background:'#f48c0c',fontWeight:'bold',color:"white",marginLeft:'30px',padding:'10px 45px',fontSize:'14px',fontFamily:'sans-serif',position:'unset'}}><a href='./createaccount' style={{color:'white'}}>Upload a Story</a></Button></li>
       </ul>
        </div>
    </div>
  )
}

export default Bodycomponent
