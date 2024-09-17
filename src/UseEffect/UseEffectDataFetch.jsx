import React, { useEffect, useState } from 'react'
import axios from 'axios'
function UseEffectDataFetch() {

const[posts,setPosts]=useState([])


    useEffect(()=>{
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        axios.get('https://localhost:7014/api/ReviewRating')
        .then(res=>{console.log(res)
          setPosts(res.data)
        })
        
        .catch(err=>{console.log(err)})
    },[])
  return (
    <div>
      <ul>
        {
            posts.map(post=><li key={post.id}>{post.title}</li>)
        }
      </ul>
    </div>
  )
}

export default UseEffectDataFetch
