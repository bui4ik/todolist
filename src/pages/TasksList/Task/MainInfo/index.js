import ReactSVG from 'react-svg'
import React from 'react'
import * as actions from 'store/tasksList/thunk'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import more from '../more.svg'
import AddTaskForm from '../../../Template/Header/AddTaskForm'
import * as S from './styles'
import OutsideClickHandler from 'react-outside-click-handler/esm/OutsideClickHandler'


class MainInfo extends React.Component {
  state = {
    taskSettings: false,
    editTask: false,
  }

  openCloseTaskSettings = () => {
    this.setState(({ taskSettings }) => ({ taskSettings: !taskSettings }))
  }

  openCloseTaskEditor = () => {
    this.setState(({ editTask }) => ({ editTask: !editTask }))
    this.setState({ taskSettings: false })
  }

  deleteTask = e => {
    const { actions: {deleteTask} } = this.props
    deleteTask(e.currentTarget.id)
    this.openCloseTaskSettings()
  }

  completeTask = e => {
    const { actions: {completeTask} } = this.props
    completeTask(e.currentTarget.id)
    this.openCloseTaskSettings()
  }

  render() {
    const { name, description, isCompleted, id, priority } = this.props
    const { taskSettings, editTask } = this.state
    return (
      <S.Container>
        <div>
          <S.Name>{name}</S.Name>
          <S.Description>{description}</S.Description>
        </div>
        <S.EditTaskContainer>
          {taskSettings && (
            <OutsideClickHandler
              disabled = {!taskSettings}
              onOutsideClick={() => this.openCloseTaskSettings()}
            >
            <S.EditTask>
              {!isCompleted && (
                <S.EditTaskButton onClick={this.openCloseTaskEditor}>Edit task</S.EditTaskButton>
              )}
              <S.EditTaskButton id={id} onClick={e => this.completeTask(e)}>
                {isCompleted ? 'Mark as uncompleted' : 'Mark as completed'}
              </S.EditTaskButton>
              <S.EditTaskButton id={id} onClick={e => this.deleteTask(e)}>
                Delete
              </S.EditTaskButton>
            </S.EditTask>
            </OutsideClickHandler>
          )}
          {editTask && (
            <AddTaskForm
              formName='Edit task'
              exitForm={this.openCloseTaskEditor}
              formType='editTask'
              taskId={id}
              initialValues={{ name, description, priority }}
            />
          )}
          <S.MoreContainer onClick={this.openCloseTaskSettings}>
            <ReactSVG src={more} />
          </S.MoreContainer>
        </S.EditTaskContainer>
      </S.Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      deleteTask: actions.deleteTask,
      completeTask: actions.completeTask,
    },
    dispatch,
  ),
})

export default connect(
  null,
  mapDispatchToProps,
)(MainInfo)
