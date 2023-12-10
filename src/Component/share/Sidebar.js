import {
  DashboardOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import   '../../assets/scss/Sidebar.scss'
 


const {  Sider:AntSidebar  } = Layout;


function getItem (label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type
  }
}
const items = [
  getItem(<Link to='/'>داشبورد</Link>, 'dashboard', <DashboardOutlined />),
  getItem('مدیریت کاربران', 'users', <UserOutlined />, [
    getItem(<Link to='/person'>لیست کاربران</Link>, 'users-list'),
    getItem(<Link to='/person/new'>افزودن کاربر</Link>, 'users-add')
  ]),
  getItem('مدیریت مقالات', 'posts', <UserOutlined />, [
    getItem(<Link to='/post'>لیست مقالات</Link>, 'posts-list'),
    getItem(<Link to='/post/new'>افزودن مقاله</Link>, 'posts-add')
  ]),
  {
    type: 'divider'
  },
  getItem('تنظیمات', 'settings', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12')
  ])
]

export default function Sidebar() {
  return (
    <div  >
        <AntSidebar > 
          <Menu 
          className='Sidebar'
        defaultSelectedKeys={['dashboard']}
        defaultOpenKeys={['users', 'posts']}
        mode='inline'
        items={items}
      /></AntSidebar>
        </div>
  )
}
