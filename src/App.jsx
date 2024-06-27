import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Red from './pages/Red'
import Indigo from './pages/Indigo'
import Black from './pages/Black'
import Nav from './layout/Nav'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route index element={<Indigo />} />
          <Route path='/red' element={<Red />} />
          <Route path='/black' element={<Black />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
