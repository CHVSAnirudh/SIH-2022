import React, { useState } from 'react'
import './fisherman.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

function FishermanUpload() {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const fileSelectedHandler = (event) =>{
    setSelectedFile(event.target.files[0])
}
  const [name, setName] = useState("");
  const dataUpload = (event) => {
    
    // let file = this.state.file
    // let formData = new FormData()
    // console.log(file);
    // formData.append('image', this.state.file)
    // axios.post("https://7668-2405-201-c03b-3b77-5dde-c97e-ab23-f475.ngrok.io/api/get/upload",formData).then((res) =>{})
    event.preventDefault()
    const formData = new FormData();
    formData.append("selectedFile", selectedFile);
    try {
      const response = axios({
        method: "post",
        url: "https://0119-2405-201-c03b-3b77-5dde-c97e-ab23-f475.ngrok.io/api/get/upload",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch(error) {
      console.log(error)
    }

  }
  return (
    <>
      <div className='fullContainer'>
          <form className='form'>
                <input className="upload" type="file"  onChange={fileSelectedHandler} />
                <label>
                  <input
                    type="text"
                    className='weight'
                    value={name}
                    placeholder="Estimated Catch Weight...(in KG)"
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <Link to='/fisherman/estimations'><button className="confirmSubmit" type="submit">SUBMIT</button></Link>  
          </form>
          
      </div>
    </>
  )
}

export default FishermanUpload