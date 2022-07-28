import React from 'react'
import Typed from 'typed.js'
import logo from '../logo.svg'
import Slogan from './Slogan'
import './Header.css'

function Header() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null)
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null)

  React.useEffect(() => {
    const options = {
      strings: [
        'Art for people who know the value of everything',
        'and the price of nothing',
      ],
      typeSpeed: 50,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 500,
    }
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options)

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy()
    }
  }, [])

  return (
    <header className="app-header">
      <img src={logo} className="App-logo" alt="logo" />

      <div className="type-wrap" onAnimationEnd={Slogan}>
        <span style={{ whiteSpace: 'pre' }} ref={el} />
      </div>
      <h2>
        Art for people who know the value of everything and the price of nothing
      </h2>
    </header>
  )
}
export default Header
