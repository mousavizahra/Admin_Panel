import { Layout} from 'antd';
import   '../../assets/scss/Header.scss'
 

const { Header:AntHeader } = Layout;

export default function Header() {
  return (
    <div>
        <AntHeader className='Header'> پنل ادمین</AntHeader>
        </div>
  )
}
