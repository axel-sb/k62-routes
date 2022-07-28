import React from 'react'
import Typed from 'typed.js'

function TypedReactHooksDemo() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null)
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null)

  React.useEffect(() => {
    const options = {
      strings: [
        'Art for people who know the value of everything and the price of nothing',
      ],
      typeSpeed: 50,
      backSpeed: 50,
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
    <div className="wrap">
      <h1>Typed.js</h1>

      <div className="type-wrap">
        <span style={{ whiteSpace: 'pre' }} ref={el} />
      </div>

      <button type="button" onClick={() => typed.current.toggle()}>
        Toggle
      </button>
      <button type="button" onClick={() => typed.current.start()}>
        Start
      </button>
      <button type="button" onClick={() => typed.current.stop()}>
        Stop
      </button>
      <button type="button" onClick={() => typed.current.reset()}>
        Reset
      </button>
      <button type="button" onClick={() => typed.current.destroy()}>
        Destroy
      </button>
    </div>
  )
}

export default TypedReactHooksDemo
