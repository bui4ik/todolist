import React from 'react'
import Template from '../Template'
import * as S from './styles'
import Task from './Task'
import SectionTitle from './SectionTitle'
import * as selectors from 'store/tasksList/selectors'
import { connect } from 'react-redux'
import { addTask } from 'store/tasksList/thunk'

class TasksList extends React.Component {
  state = {
    sortWindow: false,
    activeTasksSortType: 'All',
  }

  openCloseSortWindow = () => {
    this.setState({ sortWindow: !this.state.sortWindow })
  }

  sortActiveTasks = (type = 'All') => {
    this.setState({ activeTasksSortType: type })
  }

  render() {
    const {
      tasks,
      lowPriorityTasks,
      mediumPriorityTasks,
      highPriorityTasks,
    } = this.props
    const { sortWindow, activeTasksSortType } = this.state
    return (
      <Template>
        <SectionTitle
          text={'To Do'}
          showView={true}
          count={tasks.filter(task => !task.isCompleted).length}
          openCloseSortWindow={this.openCloseSortWindow}
          sortWindow={sortWindow}
          sortActiveTasks={this.sortActiveTasks}
          initialValues={activeTasksSortType}
        />
        <S.TasksTable>
          {activeTasksSortType === 'All' &&
            tasks.map(task => !task.isCompleted && <Task key={task.id} task={task} />)}
          {activeTasksSortType === 'Low' &&
            lowPriorityTasks.map(task => !task.isCompleted && <Task key={task.id} task={task} />)}
          {activeTasksSortType === 'Medium' &&
            mediumPriorityTasks.map(
              task => !task.isCompleted && <Task key={task.id} task={task} />,
            )}
          {activeTasksSortType === 'High' &&
            highPriorityTasks.map(task => !task.isCompleted && <Task key={task.id} task={task} />)}
        </S.TasksTable>
        <SectionTitle
          text={'Completed'}
          showView={false}
          count={tasks.filter(task => task.isCompleted).length}
        />
        <S.TasksTable>
          {tasks.map(task => task.isCompleted && <Task key={task.id} task={task} />)}
        </S.TasksTable>
      </Template>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: selectors.tasksSelector(state),
    lowPriorityTasks: selectors.lowPriorityTasksSelector(state),
    mediumPriorityTasks: selectors.mediumPriorityTasksSelector(state),
    highPriorityTasks: selectors.highPriorityTasksSelector(state),
    tasksAscendingOrder: selectors.sortedByDateTasksAscendingSelector(state),
    tasksDescendingOrder: selectors.sortedByDateTasksDescendingSelector(state),
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
