import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/stylesheet/navbar.css'
import { Icon } from 'react-icons-kit'
import { camera } from 'react-icons-kit/icomoon/camera'

import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  return (
    <div className='container-fluid' id='navbarWrapper'>
      <h1 onClick={() => (navigate('/'))} style={{ cursor: 'pointer' }}>InstaClone</h1>
      <div style={{ marginLeft: '70rem', paddingTop: '1.5rem' }}><Link to='/postfrom'><Icon icon={camera} size={40} style={{ color: 'brown' }}></Icon></Link></div>
    </div>
  )
}

export default Navbar