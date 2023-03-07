import React, {useState,useEffect} from 'react'
import '../assets/stylesheet/card.css'
import Navbar from './Navbar'
import Card from './Card'


function PostView() {
    const [postDataList, setPostDataList] = useState([])
    const getpostDataList = async () => {
     fetch('http://localhost:8000/postview')
       // fetch('https://server-insta-chi.vercel.app/postview')
            .then(resp => resp.json())
            .then(data =>{
                console.log(data)
                setPostDataList(data)})
            .catch(err => console.log(err))
        }

        useEffect(() => {
            getpostDataList()
        }, [])

  return (
    <div>
        <Navbar/>
        <p>Total data posted  {postDataList.length}</p>
        <div id='cardWrapper'>
                {postDataList.map((item, index) => {
                    return (
                        <div className='col' key={index} id='card' >
                            <Card author={item.author} location={item.location} description={item.description} imgUrl={item.imgUrl} />
                        </div>
                    )
                })}
            </div>
        </div>
  )
}

export default PostView