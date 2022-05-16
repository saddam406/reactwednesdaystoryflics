import React from 'react';
import 'antd/dist/antd.css';
import { TreeSelect } from 'antd';

const { SHOW_PARENT } = TreeSelect;

const treeData = [
  {
    title: 'Comedy',
    value: '0-0',
    key: '0-0',
   
  },
  {
    title: 'Fantacy',
    value: '0-1',
    key: '0-1',
    
  },
  {
    title: 'Horror',
    value: '0-2',
    key: '0-2',
    
  },
  {
    title: 'Action',
    value: '0-3',
    key: '0-3',
    
  },
  {
    title: 'Mystery',
    value: '0-4',
    key: '0-4',
    
  },
  {
    title: 'Adventure',
    value: '0-5',
    key: '0-5',
    
  },
  {
    title: 'Romance',
    value: '0-6',
    key: '0-6',
    
  },
  {
    title: 'General Fiction',
    value: '0-7',
    key: '0-7',
    
  },
  {
    title: 'Thriller',
    value: '0-8',
    key: '0-8',
    
  },
  {
    title: 'Biography',
    value: '0-9',
    key: '0-9',
    
  },
  {
    title: 'Business',
    value: '0-10',
    key: '0-10',
    
  },
  {
    title: 'Mythology',
    value: '0-11',
    key: '0-11',
    
  },
  {
    title: 'Life style',
    value: '0-12',
    key: '0-12',
    
  },
  {
    title: 'Inspiration',
    value: '0-13',
    key: '0-13',
    
  }
];

class Selectbox extends React.Component {
  state = {
    value: [],
  };

  onChange = value => {
    console.log('onChange ', value);
    this.setState({ value });
  };

  render() {
    const tProps = {
      treeData,
      value: this.state.value,
      onChange: this.onChange,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      placeholder: 'Please select',
      style: {
        width: '30%',
        borderRadius:'5px',
        
      },
    };
    return (
        <TreeSelect {...tProps} style={{marginLeft:'70px',width:"53%"}}/>
        )
  }
}

export default Selectbox;