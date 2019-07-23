import React from 'react'
import * as S from './styles'
import Badge from './Badge'
import AdditionalInfo from './AdditionalInfo'
import MainInfo from './MainInfo'

const Task = ({ task }) => {
  const { name, description, creationDate, isCompleted, priority, id } = task
  return (
    <S.Container>
      <Badge name={name} />
      <S.TaskBody>
        <AdditionalInfo isCompleted={isCompleted} priority={priority} creationDate={creationDate} />
        <MainInfo
          name={name}
          description={description}
          isCompleted={isCompleted}
          id={id}
          priority={priority}
        />
      </S.TaskBody>
    </S.Container>
  )
}

export default Task
