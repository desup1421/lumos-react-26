import React from 'react'
import { useParams } from 'react-router-dom'

const PostDetail = () => {
  const { slug } = useParams()
  return (
    <div>
      <h1>Post detail for slug: <span className='font-bold'>{slug}</span></h1>
    </div>
  )
}

export default PostDetail