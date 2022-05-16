import React from 'react'
import Signin from '../Signiocomponent/Signin'
import { Provider } from "react-redux";
import store from "../Components/Redux/Store";
function signin() {
  return (
    
    <div>
      <Provider store={store}>
      <Signin/>
			</Provider>
      
      </div>
  )
}

export default signin