import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import {Table} from 'antd'
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { Popconfirm } from 'antd'


export default function  () {
    const [persons,setPersons]=useState()

    const columns = [
        { key: 'id',dataIndex: 'id',title: 'شناسه' },
        { key: 'name',dataIndex: 'name', title: 'نام' },
        { key: 'username',dataIndex: ' username', title: 'نام کاربری' },
        { key: 'email', dataIndex: 'email',title: 'ایمیل' },
        {
          key: 'address',
          title: 'آدرس',
          render: (field, record) =>
            `${field.city} - ${field.street} - ${record.phone}`
        },
        {
            key: 'actions',
            title: 'عملیات',
            render: (_, record) => (
              <>
                <Link to={`/person/${record.id}`}>
                  <EyeOutlined />
                </Link>
                <Popconfirm
                  title='آیا از حذف این رکورد مطمین هستید؟'
                  onConfirm={() => this.props.removeItem(record.id)}
                >
                  <DeleteOutlined
                    style={{ margin: '10px', color: 'red', cursor: 'pointer' }}
                  />
                </Popconfirm>
                <Link to={`/person/${record.id}/edit`}>
                  <EditOutlined />
                </Link>
              </>
            )
          }
    ]

    useEffect(() => {
      axios('https://jsonplaceholder.typicode.com/users').then(({data:persons})=> setPersons(persons))
    },[])
    
  return (
    <div> 
        <Table  dataSource={persons} columns={columns}/>
        
    </div>
  )
}
 