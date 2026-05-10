import Nav2 from './Nav2'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {

    const [theme] = useContext(ThemeDataContext)

  return (
    <div className={theme}>
        <h1>Sheryians</h1>
        <Nav2 />
    </div>
  )
}

export default Navbar