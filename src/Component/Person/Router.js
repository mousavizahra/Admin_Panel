import React from 'react'
import List from './List'
 import New from './New'
 import Full from './Full'
 import Edit from './Edit'
 import {Route,Routes} from 'react-router-dom'

export default function Router() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<List />} />
      <Route path='/new' element={<New />} />
      <Route path='/:id' element={<Full />} />
      <Route path='/:id/edit' element={<Edit />} />
    </Routes>
    </div>
  )
}
