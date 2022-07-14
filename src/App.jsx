import './App.css'
import { Link, Route, Routes } from 'react-router-dom'

import './styles.css'
import K62 from './pages/K62'
import CBE from './pages/CBE'
import SST from './pages/SST'
import UUR from './pages/UUR'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <div className="links">
        <Link to="/"> k62 &middot;</Link>

        <Link to="/cbe"> &middot; Corinna Bernshaus &middot; </Link>

        <Link to="/sst"> &middot; Stefan Stüttgen &middot; </Link>

        <Link to="/uur"> &middot; Uscha Urbainski &middot; </Link>
      </div>

      <div>
        <Routes>
          <Route element={<K62 />} path="/" />

          <Route element={<NotFound />} path="*" />

          <Route element={<CBE />} path="/cbe" />

          <Route element={<SST />} path="/sst" />

          <Route element={<UUR />} path="/uur" />
        </Routes>
      </div>
    </>
  )
}
