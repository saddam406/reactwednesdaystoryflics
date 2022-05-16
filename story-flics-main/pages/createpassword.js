import React from 'react'
import Createpassword from '../Signiocomponent/Createpassword'
import { Provider } from "react-redux";
import store from "../Components/Redux/Store";

function createpassword() {
  return (
    <div>
      <Provider store={store}>
      <Createpassword/>
      </Provider>
      </div>
  )
}

export default createpassword

