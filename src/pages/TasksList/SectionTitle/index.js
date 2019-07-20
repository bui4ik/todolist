import React from 'react'
import * as S from './styles'

const SectionTitle = ({text, showView, count}) =>{
  return(
    <S.Container>
      <S.Title>{text}</S.Title>
      <S.TasksCount>({count})</S.TasksCount>
      <S.TasksDisplayType showView={showView}>Display</S.TasksDisplayType>
    </S.Container>
  )
}

export default SectionTitle
