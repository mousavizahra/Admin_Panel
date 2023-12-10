import { useParams } from "react-router-dom"
import {useEffect} from 'react'
import { useState } from 'react'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { GENDER_OPTIONS } from '../../tools/constants'
import axios from 'axios'
import { Checkbox, Form, Select, Submit, Text } from '../utils/Form'
import Spinner from '../utils/Spinner'
 

export default function Edit() {
    
  const [person, setPerson] = useState({})

  const { id } = useParams()

  const navigate = useNavigate()

  useEffect(()=>{
    axios(`https://jsonplaceholder.typicode.com/users/${id}`).then(({data})=> setPerson(data))
},[id])


function handelSubmit(values){
  axios('https://jsonplaceholder.typicode.com/users', { method: 'POST', data: values })
    .then(response => {
      message.success('کاربر با موفقیت ساخته شد')
      navigate('/person')
    })
    .catch(err => message.error('متاسفانه مشکلی پیش آمده است'))
} 

if (!person.id) {
  return <Spinner />
}

 
  return (
   <Form onFinish={handelSubmit} initialValues={person}>
        <Text
          label='نام کاربری'
          name='username'
          required
          placeholder='نام کاربری'
          maxLength={5}
        />

        <Text label='نام' name='name' required placeholder='نام' />

        <Checkbox name='admin'>مدیر</Checkbox>

        <Select name='gender' label='جنسیت' required options={GENDER_OPTIONS} />

        <Submit />
      </Form>
  )
}
