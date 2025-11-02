import classes from './Header.module.scss' // classes это объект, внутри котрого будут объекты наших стилей, префиксы у классов стилей  инкапсулируют стили
import { NavLink } from 'react-router-dom'


export const Header = () => {


  const getActiveClass = ({ isActive } : { isActive : boolean }) : string => {
    return isActive  ? `${classes.active} ${classes.link}` : classes.link
  }

  return (
    <header className={classes.header}>
        <div className={classes.container}>
                                      {/* {`${classes.link} ${classes.active}`} */}
            <NavLink to="/" className={getActiveClass}> Home </NavLink>
            <NavLink to="/todo" className={getActiveClass}> ToDo </NavLink>
        </div>
    </header>
  )
}

