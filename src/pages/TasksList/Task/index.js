import React from 'react'
import * as S from './styles'
import Badge from './Badge'
import AdditionalInfo from './AdditionalInfo'
import MainInfo from './MainInfo'
import { Draggable } from 'react-beautiful-dnd'

const Task = ({ task, index, viewType }) => {
  const { name, description, creationDate, isCompleted, priority, id, badgeColor } = task
  return (
    <Draggable draggableId={id} index={index}>
      {(provided)=>(
        <S.Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          viewType={viewType}
        >
          <Badge name={name} badgeColor={badgeColor}/>
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
      )}
    </Draggable>
  )
}

export default Task
