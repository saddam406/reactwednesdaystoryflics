import React from 'react'
import Createaccount from '../Signiocomponent/Createaccount'
import { Provider } from "react-redux";
import store from "../Components/Redux/Store";
function createaccount() {
  return (  
    <div>
      <Provider store={store}>
      <Createaccount/>
			</Provider>
        
    </div>
  )
}

export default createaccount