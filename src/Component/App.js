 import { Layout} from 'antd';
 import Header from './share/Header'
 import Sidebar from './share/Sidebar'
 import Footer from './share/Footer'
 import {Routes ,Route} from 'react-router-dom'
 import  '../assets/scss/Content.scss'
 import PersonRouter from './Person/Router'
 import PostRouter from './Post/Router'
 

const {  Content } = Layout;
 export default function App() {
   return (
     <div className='App'>
      <Layout>
     <Header/>
     <Layout >
       <Sidebar/>
       <Content className='content'> 
        <Routes>
          <Route path='/' element={<div> salam</div>}/>
          <Route path='/person/*' element={<PersonRouter />} />
          <Route path='/post/*' element={<PostRouter />} />
        </Routes>
       </Content>
     </Layout>
    <Footer/>
   </Layout>
   </div>
   )
 }
 