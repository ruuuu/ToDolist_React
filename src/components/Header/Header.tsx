import classes from './Header.module.scss' // classes это объект, внутри котрого будут объекты наших стилей, префиксы у классов стилей  инкапсулируют стили
import { NavLink } from 'react-router-dom'


export const Header = () => {

  return (
    <header className={classes.header}>
        <div className={classes.container}>
                                      {/* {`${classes.link} ${classes.active}`} */}
            <NavLink to="/" className={({ isActive }) => isActive  ? classes.active : ''} > Home </NavLink>
            <NavLink to="/todo" className={`${classes.link} ${classes.active}`} > ToDo </NavLink>
        </div>
    </header>
  )
}

