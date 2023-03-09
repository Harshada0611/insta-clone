import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/stylesheet/home.css'
import { useNavigate } from 'react-router-dom'
function Home() {
    const naviagte = useNavigate()

    const submitBtn = () => {
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