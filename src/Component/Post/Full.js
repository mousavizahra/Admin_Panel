import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import {Divider} from 'antd'

export default function Full() {
    const[post,setPost]=useState({})
    const{id} =useParams()

    useEffect(()=>{
        axios(`https://jsonplaceholder.typicode.com/posts/${id}`).then(({data})=> setPost(data))
    },[id])
    console.log(post)
  return (
    <div> 
    <h3>نمایش مقاله</h3>
      <Divider />
      <label>عنوان:</label>
      <Divider type='vertical' />
      {post.title}
      <Divider />
      <label>متن:</label>
      <Divider type='vertical' />
      {post.body}
      <Divider />
      <Link to='/post'> بازگشت به لیست مقالات</Link>
    </div>
  )
}