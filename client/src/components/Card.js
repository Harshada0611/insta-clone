import React, { useState } from 'react'
import { Icon } from 'react-icons-kit'
import { thumbsOUp } from 'react-icons-kit/fa/thumbsOUp'




function Card({author,location,description,imgUrl}) {

    const [likeCount, setLikeCount] = useState(10)

    //handle like count
    const handleLikeCount = () => {
        const count = likeCount + 1
        setLikeCount(count)
        localStorage.setItem('likes',likeCount)
    }

    return (
        <div id='cardWrapper' key={0} >
            <div id='card' className="card">
                <h5>{author}</h5>
                <p>{location}</p>
                <div id='imageWrapper'><img src={imgUrl} alt='' id='postimage' /></div>
                <p>{description}</p>

                <div id='likes-date-wrapper'>
                    <span id='likes' >
                        <Icon onClick={handleLikeCount} icon={thumbsOUp} size={25}></Icon>
                        <span style={{ padding: ' 0.5rem', fontSize: '1.2rem' ,backgroundColor:'white'}}>{likeCount}</span>
                    </span>
                    {/* <span id='date'>10 Jan 2023</span> */}
                </div>
            </div>
        </div >
    )
}


export default Card