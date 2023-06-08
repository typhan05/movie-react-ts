import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Detail from '../pages/Detail'

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='movies/:id' element={<Detail />} />
    </Route>
  )
)
