import React from 'react';
import 'antd/dist/antd.css';
// import './index.css';
import { Upload, Modal } from 'antd';
import { FileImageOutlined } from '@ant-design/icons';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

class UploadVideo extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    previewTitle: '',
    fileList: [],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  render() {
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    const uploadButton = (
        
        <div>
      <FileImageOutlined style={{fontSize:'26px',fontWeight:'bold',marginLeft:'27px'}} />
        <div style={{ marginTop: 8,fontSize:'16px',fontWeight:'bold',marginLeft:'25px' }}>Upload Thumbnail</div>
      </div>
    );
    return (
      <div>
      <div style={{color:'white',fontSize:'20px',fontWeight:'bold',float:'left',marginLeft:'20px'}}>Thumbnail</div>
        <Upload
        name="Up"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
          
        >
          {uploadButton}
        </Upload>
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: '100%',margin:'left' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

export default UploadVideo;