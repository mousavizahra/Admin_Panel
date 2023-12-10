import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import {Divider} from 'antd'

export default function Full() {
    const[person,setPerson]=useState({})
    const{id} =useParams()

    useEffect(()=>{
        axios(`https://jsonplaceholder.typicode.com/users/${id}`).then(({data})=> setPerson(data))
    },[id])
  return (
    <div> 
        <h3>نمایش کاربر</h3>
      <Divider />
      <label>نام:</label>
      <Divider type='vertical' />
      {person.name}
      <Divider />
      <label>ایمیل:</label>
      <Divider type='vertical' />
      {person.email}
      <Divider />
      <Link to='/person'> بازگشت به لیست کاربران</Link>
    </div>
  )
}