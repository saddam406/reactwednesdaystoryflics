import Head from 'next/head'
import Image from 'next/image'
import Navcomponent from '../Components/Navcomponent'
import Homehead from '../HomeComponents/Homehead'
import Createaccount from '../Signiocomponent/Createaccount'
import Createpassword from '../Signiocomponent/Createpassword'
import Mobileotp from '../Signiocomponent/Mobileotp'
import Resetotp from '../Signiocomponent/Resetotp'
import Resetpassword from '../Signiocomponent/Resetpassword'
import Signin from '../Signiocomponent/Signin'
import Categorize from '../UploadComponent/Categorize'
import Codeupload from '../UploadComponent/Codeupload'
import Createhookup from '../UploadComponent/Createhookup'
import Detailstab from '../UploadComponent/Detailstab'
import Tag from '../UploadComponent/Tagtag'
import Uploadtab from '../UploadComponent/Uploadtab'
import { Provider } from "react-redux";
import store from "../Components/Redux/Store";
import { createStore } from 'redux';
import Selectbox from '../UploadComponent/Selectbox'
import Homeselect from '../HomeComponents/Homeselect'
import Homedrop from '../HomeComponents/Homedrop'




export default function Home() {
 


  return (
    <div>
    
    
    {/* <Codeupload/> */}
    
    
    {/* <Homeselect/> */}
    {/* <Homedrop/>  */}
    {/* <Navcomponent/>    */}
    {/* <Selectbox/> */}
    {/* <Uploadtab/> */}
    {/* <Provider store={store}> */}
    <Navcomponent/>
     {/* <Homehead/> */}
			{/* </Provider>    */}

    {/* <Mobileotp/> */}
    {/* <Resetotp/> */}
    {/* <Createaccount/>*/}
    {/* <Resetpassword/> */}
    {/* <Signin/> */}
    {/* <Createpassword/> */}
     {/* <Tag/> */}
     {/*<Detailstab/> */}
     {/* <Categorize/>*/}
     {/* <Uploadtab/> */}
     {/* <Createhookup/> */}
    </div>
  )
}
