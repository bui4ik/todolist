import React from 'react'
import * as S from './styles'

const Badge = ({name, badgeColor}) => {
  return (
    <S.Container badgeColor={badgeColor}>
      <S.Letter>{name[0].toUpperCase()}</S.Letter>
    </S.Container>
    )
}

export default Badge


