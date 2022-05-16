import React from 'react'
import {useForm} from 'react-hook-form'
import styles from '../styles/Home.module.css'
import { Upload } from 'antd'

function Createhookup() {

const { register, handleSubmit } = useForm ()

const onSubmit =(data) =>{
    console.log(data)
}
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <img src='https://github.com/JK-Jayakumar/JK-Jayakumar/blob/main/Upload%20icon.png?raw=true' className={styles.hook}/>
            <Upload>
                Select File
            </Upload>
        </form>
    </div>
  )
}

export default Createhookup