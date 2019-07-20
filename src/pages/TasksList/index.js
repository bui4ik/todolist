import React from 'react'
import Template from '../Template'
import * as S from './styles'
import Task from './Task'
import SectionTitle from './SectionTitle'
import * as selectors from 'store/tasksList/selectors'
import { connect } from 'react-redux'
import { addTask } from 'store/tasksList/thunk'

const TasksList = ({ tasks }) => {
  return (
    <Template>
      <SectionTitle text={'To Do'} showView={true} count={tasks.filter(task => !task.isCompleted).length} />
      <S.TasksTable>
        {tasks.map(task => !task.isCompleted &&(
          <Task
            name={task.name}
            description={task.description}
            creationDate={task.creationDate}
            isCompleted={task.isCompleted}
          />
        ))}
      </S.TasksTable>
      <SectionTitle text={'Completed'} showView={false} count={tasks.filter(task => task.isCompleted).length} />
      <S.TasksTable>
        {tasks.map(task => task.isCompleted &&(
          <Task
            name={task.name}
            description={task.description}
            creationDate={task.creationDate}
            isCompleted={task.isCompleted}
          />
        ))}
      </S.TasksTable>
    </Template>
  )
}

const mapStateToProps = state => {
  return {
    tasks: selectors.tasksSelector(state),
    isLoading: selectors.isLoadingsSelector(state),
    error: selectors.errorSelector(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTask: data => dispatch(addTask(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TasksList)
