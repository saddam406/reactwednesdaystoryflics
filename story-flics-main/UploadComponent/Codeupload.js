import React, { useState } from 'react'
import {Steps, Button, message} from 'antd'
import styles from '../styles/Home.module.css'
import Uploadtab from './Uploadtab';
import Detailstab from './Detailstab';
import Categorize from './Categorize';
import Selectbox from './Selectbox';
import Homedrop from '../HomeComponents/Homedrop';


const { Step } = Steps;
// var bg="https://github.com/JK-Jayakumar/JK-Jayakumar/blob/main/Categorize.jpg?raw=true"


function Codeupload() {

const [current, setCurrent] = React.useState(0);


    const steps = [
        {
          title: "Upload",
          content: <Uploadtab/>
        },
        {
          title: "Details",
          content: <Detailstab/>
        },
        {
          title: "Categorize",
          content: <Categorize/>
        }
      ];

    

    const next = () => {
      setCurrent(current + 1);
    }
    const prev = () => {
      setCurrent(current - 1);
    };
    
  return (
    <div className={current == 1 ? styles.backg1 : (current == 2 ? styles.backg2 : styles.backg3)}>
    
    <div>
    <Steps progressDot current={current} style={{width:'80%',marginTop:'50px',margin:'auto'}} className={styles.step}>        
    {steps.map((item) => (
      <Step key={item.title} title={item.title} />
    ))}
  </Steps>
  <div className={styles.stepscontent}>
  {
    steps.map((step, index) => {
      return (
        <div style={{ display: index == current ? "block" : "none" }}>
        {
          step.content         
        }
        </div>
      )
    })
  }
  </div>
  <div className={styles.stepsaction}>
  {current > 0 && (
    <Button  onClick={() => prev()}style={{ margin:'0 125px'}} >
      Back
    </Button>
  )}
    {current < steps.length - 1 && (
      <Button type="primary" onClick={() => next()} style={{ float:'right', margin:'0 125px' }}>
        Next
      </Button>
    )}
    {current === steps.length - 1 && (
      <Button
        type="primary" style={{float:'right', margin:'0 125px' }}
        onClick={() => message.success("Processing complete!") }
      >
        Submit
      </Button>
    )}

  </div>
      </div>
    </div>
  )
}

export default Codeupload