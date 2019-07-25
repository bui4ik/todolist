import React from 'react'
import ReactSVG from 'react-svg'
import logo from 'assets/to-do-list.svg'
import home from 'assets/home.svg'
import settings from 'assets/settings.svg'
import * as S from './styles'

const Sidebar = () =>{
  return (
    <S.Container>
        <S.Logo src={logo}/>
      <S.Menu>
        <S.Item exact to='/'>
          <ReactSVG src={home}/>
        </S.Item>
        <S.Item to='/settings'>
          <ReactSVG src={settings}/>
        </S.Item>
      </S.Menu>
    </S.Container>
  )
}

export default Sidebar
