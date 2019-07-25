import React from 'react'
import { connect } from 'react-redux'
import * as selectors from 'store/tasksList/selectors'
import { bindActionCreators } from 'redux'
import * as actions from 'store/tasksList/actions'
import * as thunk from 'store/tasksList/thunk'
import Template from '../Template'
import Task from './Task'
import SectionTitle from './SectionTitle'
import * as S from './styles'
import { Droppable, DragDropContext } from 'react-beautiful-dnd'

class TasksList extends React.Component {
  state = {
    sortWindow: false,
  }

  openCloseSortWindow = () => {
    this.setState(({ sortWindow }) => ({ sortWindow: !sortWindow }))
  }

  sortActiveTasks = (type = 'All') => {
    const {
      actions: { setPrioritySortType },
    } = this.props
    setPrioritySortType(type)
  }

  onDragEnd = result => {
    const { destination, source, draggableId } = result
    console.log(result)

    if (destination === null) {
      return
    }

    if (destination.droppableId !== source.droppableId) {
      const { completeTask } = this.props.actions
      completeTask(draggableId)
    }
  }

  render() {
    const {
      tasks,
      prioritySortSelector,
      priority,
      dateSortType,
      viewType,
      actions: { setDateSortType, setViewType },
    } = this.props
    const { sortWindow } = this.state
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Template>
          <SectionTitle
            text="To Do"
            count={tasks.filter(task => !task.isCompleted).length}
            openCloseSortWindow={this.openCloseSortWindow}
            sortWindow={sortWindow}
            sortActiveTasks={this.sortActiveTasks}
            initialValues={priority}
            setDateSortType={setDateSortType}
            dateSortType={dateSortType}
            setViewType={setViewType}
            showView
          />
          <Droppable droppableId='activeTasks'>
            {provided => (
              <S.TasksTable
                ref={provided.innerRef}
                {...provided.droppableProps}
                viewType={viewType}
              >
                {prioritySortSelector.map((task, index) => (
                  <Task key={task.id} task={task} index={index} viewType={viewType} />
                ))}
                {provided.placeholder}
              </S.TasksTable>
            )}
          </Droppable>
          <SectionTitle
            text="Completed"
            showView={false}
            count={tasks.filter(task => task.isCompleted).length}
          />
          <Droppable droppableId='completedTasks'>
            {provided => (
              <S.TasksTable ref={provided.innerRef} {...provided.droppableProps}>
                {tasks.map(
                  (task, index) =>
                    task.isCompleted && (
                      <Task key={task.id} task={task} index={index} viewType={viewType} />
                    ),
                )}
                {provided.placeholder}
              </S.TasksTable>
            )}
          </Droppable>
        </Template>
      </DragDropContext>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: selectors.tasksSelector(state),
    lowPriorityTasks: selectors.lowPriorityTasksSelector(state),
    mediumPriorityTasks: selectors.mediumPriorityTasksSelector(state),
    highPriorityTasks: selectors.highPriorityTasksSelector(state),
    tasksDescendingOrder: selectors.sortedByDateTasksDescendingSelector(state),
    prioritySortSelector: selectors.prioritySortSelector(state),
    priority: selectors.prioritySelector(state),
    dateSortType: selectors.dateSortType(state),
    viewType: selectors.viewTypeSelector(state),
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      setPrioritySortType: actions.setPrioritySortType,
      setDateSortType: actions.setDateSortType,
      completeTask: thunk.completeTask,
      setViewType: actions.setViewType,
    },
    dispatch,
  ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TasksList)
