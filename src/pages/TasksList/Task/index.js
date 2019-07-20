import React from 'react'
import * as S from './styles'

const Task = ({name, description, creationDate, isCompleted}) => {
  return (
    <S.Container>
      <S.Badge>
        <S.BadgeLetter>{name[0].toUpperCase()}</S.BadgeLetter>
      </S.Badge>
      <S.TaskBody>
        <S.AdditionalInfoContainer>
          <S.Priority>High Priority</S.Priority>
          <S.Date>{creationDate}</S.Date>
        </S.AdditionalInfoContainer>
        <S.MainInfoContainer>
          <S.Name>{name}</S.Name>
          <S.Description>{description}</S.Description>
        </S.MainInfoContainer>
      </S.TaskBody>
    </S.Container>
  )
}

export default Task
