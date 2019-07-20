import React from 'react'
import * as S from './styles'
import logo from './img/to-do-list.svg'
import ReactSVG from 'react-svg'
import home from './img/home.svg'
import settings from './img/settings.svg'

const Sidebar = () =>{
  return (
    <S.Container>
        <S.Logo src={logo}/>
      <S.Menu>
        <S.Item exact to={'/'}>
          <ReactSVG src={home}/>
        </S.Item>
        <S.Item to={'/settings'}>
          <ReactSVG src={settings}/>
        </S.Item>
      </S.Menu>
    </S.Container>
  )
}

export default Sidebar
