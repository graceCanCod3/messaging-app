import { useState, useEffect } from 'react'
import Likes from './Likes'
import Comments from './Comments'

const Posts = (props) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const res = await axios.get(`${BASE_URL}`)
            setPosts(res)
        }
        getPosts()
    }, [])
    
    return posts ? (
        <div className='posts'>
            {
                posts.map((post) => { 
                    <div className='post-single'>
                        
                    </div>
                
                })
           
           
           
       
            }    
          

        </div>
    ) : null
}

export default Posts

// http://127.0.0.1:3001