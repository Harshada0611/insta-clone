import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/stylesheet/home.css'
import { useNavigate } from 'react-router-dom'
function Home() {
    const naviagte = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitBtn = (e) => {
        e.preventDefault();
        fetch('http://localhost:8000/signup', {
            //fetch('https://server-insta-chi.vercel.app/signup',{
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(resp => resp.json())
            .then(result => { console.log(result) })
            .catch(err => console.log(err))
        naviagte('/postview')
    }
    return (
        <>
            <div className='container-fluid' id='homeWrapper'>
                <h1>Welcome to InstaClone</h1>
                <Link to='/postview'><button onClick={submitBtn} className="btn btn-success">Enter</button></Link>

        </div>
        </>
    )
}

export default Home