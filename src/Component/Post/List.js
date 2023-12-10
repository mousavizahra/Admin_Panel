import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import {Table} from 'antd'
import {  EyeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
 


export default function Posts() {
    const [posts,setPosts]=useState()

   const columns = [
      { key: 'id',dataIndex: 'id', title: 'شناسه' },
      { key: 'title', dataIndex: 'title', title: 'عنوان' },
      {
        key: 'actions',
        title: 'عملیات',
        render: (_, record) => (
          <>
            <Link to={`/post/${record.id}`}>
              <EyeOutlined />
            </Link>
          </>
        )
      }
    ]

    useEffect(() => {
      axios('https://jsonplaceholder.typicode.com/posts').then(({data:posts})=> setPosts(posts))
    },[])
    console.log(posts)
    
  return (
    <div> 
        {/* <div>
          آخرین مقاله بازدید شده:
          { posts.title}
        </div> */}
        <Table dataSource={posts} columns={columns} />
        
    </div>
  )
}
 