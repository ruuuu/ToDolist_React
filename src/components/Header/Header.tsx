import classes from './Header.module.scss' // classes это объект, внутри котрого будут объекты наших стилей, префиксы у классов стилей  инкапсулируют стили



export const Header = () => {

  return (
    <header className={classes.header}>
        <div className={classes.container}>
            <a href="/" className={`${classes.link} ${classes.active}`}>ToDo</a>
        </div>
    </header>
  )
}

