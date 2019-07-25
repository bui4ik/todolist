import React from 'react'
import * as S from './styles'


const AdditionalInfo = ({isCompleted, priority, creationDate}) => {
  return (
    <>
      {isCompleted ? (
        <S.Container>
          <S.CompleteStatus>Completed</S.CompleteStatus>
        </S.Container>
      ) : (
        <S.Container>
          <S.Priority priority={priority} >{priority} Priority</S.Priority>
          <S.CreationDate format="LLL">{creationDate}</S.CreationDate>
        </S.Container>
      )}
    </>
  )
}

export default AdditionalInfo
