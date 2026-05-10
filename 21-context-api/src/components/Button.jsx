import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Button = () => {

    const [theme,setTheme] = useContext(ThemeDataContext)

    function btnClicked(){
        setTheme('dark')
    }

  return (
    <div>
        <button
            onClick={btnClicked}
        >Change Theme</button>
    </div>
  )
}

export default Button