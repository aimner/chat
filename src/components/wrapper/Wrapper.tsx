import React from 'react'
import { Outlet } from 'react-router-dom'

import classes from './Wrapper.module.scss'

export const Wrapper = () => {
  return (
    <div><Outlet /></div>
  )
}
