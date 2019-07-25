import React from 'react'
import Sidebar from 'pages/Template/SideBar'
import Header from 'pages/Template/Header'
import * as S from './styles'

const Template = ({ children }) => (
  <S.Container>
    <Sidebar/>
    <S.Area>
      <Header/>
      <S.Content>
        {children}
      </S.Content>
    </S.Area>
  </S.Container>
)


export default Template
