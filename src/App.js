import React, { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [range, setRange] = useState(10)
  const [password, setPassword] = useState('....')
  const [state, setState] = useState({
    uppercase: false,
    lowerCase: false,
    number: false,
    symbols: false,
  })

  const handleChange = useCallback(() => {

  }, [])

  console.log(state)

  return <div className={ 'mainBlock' }>
    <div className={ 'box' }>
      <div className={ 'childrenBlock' }>
        <h1 className={ 'title' }>Password generator</h1>
        <span className={ 'currentLength' }>
          <b>Current Length: { range }</b>
        </span>
        <div className={ 'password' }>
          <b>{ password }</b>
        </div>
        <form onSubmit={ handleChange }>
          <div className={ 'rangeWrapper' }>
            <div>
              <span>10</span>
            </div>
            <div className={ 'rangeBox' }>
              <input
                type={ 'range' }
                defaultValue={ range }
                onChange={ (v) => {
                  setRange(v.target.value)
                } }
                min={ 10 }
                max={ 40 }
              />
            </div>
            <div>
              <span>40</span>
            </div>
          </div>
          <div className="wrapper">
            <label htmlFor="includeUpperCase">Include Uppercase </label>
            <div className={ 'wrapChecked' }>
              <input
                onChange={ (v) => {
                  setState({
                    ...state,
                    uppercase: v.target.checked,
                  })
                } }
                type="checkbox"
                id={ 'includeUpperCase' }
              />
            </div>
          </div>
          <div className="wrapper">
            <label htmlFor="LowerCase">Include LowerCase </label>
            <div className={ 'wrapChecked' }>
              <input
                onChange={(v) => {
                  setState({
                    ...state,
                    lowerCase: v.target.checked
                  })
                }}
                type="checkbox"
                id={ 'LowerCase' }
              />
            </div>
          </div>
          <div className="wrapper">
            <label htmlFor="Number">Include Number </label>
            <div className={ 'wrapChecked' }>
              <input
                onChange={(v) => {
                  setState({
                    ...state,
                    number: v.target.checked
                  })
                }}
                type="checkbox"
                id={ 'Number' }
              />
            </div>
          </div>
          <div className="wrapper">
            <label htmlFor="Symbols">Include Symbols </label>
            <div className={ 'wrapChecked' }>
              <input
                onChange={(v) => {
                 setState({
                   ...state,
                   symbols: v.target.checked
                 })
                }}
                type="checkbox"
                id={ 'Symbols' }
              />
            </div>
          </div>

          <div className={ 'generatorButton' }>
            <button type="submit">Generate Password</button>
          </div>
        </form>
      </div>
    </div>
  </div>
}

export default App
