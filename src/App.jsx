/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import './App.css'
import { Route, Routes } from 'react-router-dom'
import 'yet-another-react-lightbox/styles.css'
import './styles.css'
import Home from './pages/Home'
import CBE from './pages/CBE'
import SST from './pages/SST'
import UUR from './pages/UUR'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<CBE />} path="/cbe" />
          <Route element={<SST />} path="/sst" />
          <Route element={<UUR />} path="/uur" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </div>
      <div /> {/*empty, self-closing tag just for fun*/}
    </>
  )
}

export default App
