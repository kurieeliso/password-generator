import React, { useCallback, useState } from 'react'
import { v4 as uuid } from 'uuid'
import './App.css'

const PASSWORD_LEN_MIN = 4
const PASSWORD_LEN_MAX = 32
const PASSWORD_LEN_DEF = 6
const OPTIONS = [
  {
    title: 'Include Number',
    id: uuid(),
    labelTitle: 'number',
    checked: true,
  },
  {
    title: 'Include Symbols',
    id: uuid(),
    labelTitle: 'symbols',
    checked: false,
  },
  {
    title: 'Include LowerCase',
    id: uuid(),
    labelTitle: 'lowerCase',
    checked: false,
  },
  {
    title: 'Include UpperCase',
    id: uuid(),
    labelTitle: 'upperCase',
    checked: false,
  },
]

function App() {
  const [range, setRange] = useState(PASSWORD_LEN_DEF)
  const [password, setPassword] = useState('....')
  const [state, setState] = useState({
    upperCase: false,
    lowerCase: false,
    number: true,
    symbols: false,
  })

  const generatePassword = useCallback((e) => {
    e.preventDefault()
    let charsets = ''
    let newPassword = ''

    if (!!state.number) charsets += '1234567890'
    if (!!state.symbols) charsets += '!@#$%^&*()'
    if (!!state.lowerCase) charsets += 'abcdefghijklmnopqrstuvwxyz'
    if (!!state.upperCase) charsets += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    for (let i = 0; i < range; i++) {
      newPassword += charsets.charAt(
        Math.floor(Math.random() * charsets.length),
      )
    }

    setPassword(newPassword)

  }, [range, state])

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
        <form onSubmit={ generatePassword }>
          <div className={ 'rangeWrapper' }>
            <div>
              <span>{ PASSWORD_LEN_MIN }</span>
            </div>
            <div className={ 'rangeBox' }>
              <input
                type={ 'range' }
                defaultValue={ range }
                onChange={ (v) => {
                  setRange(v.target.value)
                } }
                min={ PASSWORD_LEN_MIN }
                max={ PASSWORD_LEN_MAX }
              />
            </div>
            <div>
              <span>{ PASSWORD_LEN_MAX }</span>
            </div>
          </div>

          { OPTIONS.map((item) => {
            return <div className="wrapper" key={ item.id }>
              <label htmlFor={ item.labelTitle }>{ item.title } </label>
              <div className={ 'wrapChecked' }>
                <input
                  checked={ item.checked }
                  name={ item.labelTitle }
                  // checked={state.}
                  onChange={ (e) => {
                    item.checked = e.target.checked
                    setState({
                      ...state,
                      [e.target.name]: e.target.checked,
                    })
                  } }
                  type="checkbox"
                />
              </div>
            </div>
          }) }
          <div className={ 'generatorButton' }>
            <button
              disabled={ !state.number && !state.symbols && !state.upperCase && !state.lowerCase }
              type="submit"
            >
              Generate Password
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
}

export default App
