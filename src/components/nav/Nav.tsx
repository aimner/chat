import React from 'react'
import classes from './Nav.module.scss'
import {ReactComponent as ChatSvg} from '../../assets/svg/nav/chat.svg'
import {ReactComponent as UsersSvg} from '../../assets/svg/nav/users.svg'

export const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li><ChatSvg className={classes.svg} width='50' height='50'/></li>
        <li><UsersSvg className={classes.svg} width='50' height='50'/></li>

      </ul>
    </nav>
  )
}
