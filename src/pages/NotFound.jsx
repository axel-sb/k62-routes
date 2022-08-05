import React from 'react'
import notfound from '../notfound.gif'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="page">
      <h1>Page not found</h1>
      <img src={notfound} id="notfound" alt="page not found" />
    </div>
  )
}
