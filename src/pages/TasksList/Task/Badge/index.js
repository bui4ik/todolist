import * as S from './styles'
import React from 'react'

const Badge = ({name}) => {
  return (
    <S.Container>
      <S.Letter>{name[0].toUpperCase()}</S.Letter>
    </S.Container>
    )
}

export default Badge
