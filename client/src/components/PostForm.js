import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../assets/stylesheet/form.css'
import Navbar from './Navbar'


function PostForm() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    author: '',
    location: '',
    description: '',
    imgUrl: ''
  })
  const [image, setImage] = useState('')


  //handle inputs
  const handleInputs = (e) => {
    const { name, value } = e.target
    setForm(prevState => ({ ...prevState, [name]: value }))
  }


  //post data form
  const postData = async () => {
    await axios.post('https://insta-clone-74y2.onrender.com/postform', form)
      .then(resp => { //console.log(resp) 
      })
      .catch(err => { console.log(err) })

    navigate('/postview')
  }

  useEffect(() => {
    if (form.imgUrl) {
      postData();
    }
  }, [form.imgUrl])

  //upload image function
  const uploadImage = async () => {
    const imgData = new FormData()
    imgData.append('file', image)
    imgData.append("upload_preset", "insta_clone")
    await axios.post('https://api.cloudinary.com/v1_1/harshada0611/image/upload', imgData)
      //imgData is instace that we create in line no 31
      .then((resp) => {
        console.log(resp.data.url)
       setForm({...form, imgUrl:resp.data.url})
      })
      .catch((err) => { console.log('something went wrong', err) })
  }

  return (
    <div id='UserFormWrapper'>
      <div><Navbar/></div>
      <div id='formWrapper'>
        <h4>POST DATA</h4>
        <div>
          <input type='file' onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <div id='senderName'>
          <input type='text' placeholder='Authour name' name='author' value={form.author} onChange={handleInputs} />
        </div>
        <div>
          <input type='text' placeholder='Location' name='location' value={form.location} onChange={handleInputs} />
        </div>
        <div>
          <textarea type='text' placeholder='Description' name='description' value={form.description} onChange={handleInputs} />
        </div>

        {/* do not set value attribute for file but why??*/}
        <div id='button'>
          <button className='btn btn-warning' onClick={uploadImage}>SUBMIT</button>
        </div>
      </div>
    </div>
  )
}

export default PostForm