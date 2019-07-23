import * as S from './styles'
import Moment from 'react-moment'
import React from 'react'

const AdditionalInfo = ({isCompleted, priority, creationDate}) => {
  return (
    <>
      {isCompleted ? (
        <S.Container>
          <S.Priority>Completed</S.Priority>
        </S.Container>
      ) : (
        <S.Container>
          <S.Priority>{priority} Priority</S.Priority>
          <Moment format="LLL">{creationDate}</Moment>
        </S.Container>
      )}
    </>
  )
}

export default AdditionalInfo
