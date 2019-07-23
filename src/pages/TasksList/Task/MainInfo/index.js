import * as S from './styles'
import ReactSVG from 'react-svg'
import more from '../more.svg'
import React from 'react'
import { completeTask, deleteTask } from 'store/tasksList/thunk'
import { connect } from 'react-redux'
import AddTaskForm from '../../../Template/Header/AddTaskForm'

class MainInfo extends React.Component {
  state = {
    taskSettings: false,
    editTask: false,
  }

  openCloseTaskSettings = () => {
    this.setState({ taskSettings: !this.state.taskSettings })
  }

  openCloseTaskEditor = () => {
    this.setState({ editTask: !this.state.editTask })
    this.setState({ taskSettings: false })
  }

  deleteTask = e => {
    this.props.deleteTask(e.currentTarget.id)
    this.openCloseTaskSettings()
  }

  completeTask = e => {
    this.props.completeTask(e.currentTarget.id)
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
          {taskSettings ? (
            <S.EditTask>
              {isCompleted ? null : (
                <S.EditTaskButton onClick={this.openCloseTaskEditor}>Edit task</S.EditTaskButton>
              )}
              <S.EditTaskButton id={id} onClick={e => this.completeTask(e)}>
                {isCompleted ? 'Mark as uncompleted' : 'Mark as completed'}
              </S.EditTaskButton>
              <S.EditTaskButton id={id} onClick={e => this.deleteTask(e)}>
                Delete
              </S.EditTaskButton>
            </S.EditTask>
          ) : null}
          {editTask ? (
            <AddTaskForm
              formName={'Edit task'}
              exitForm={this.openCloseTaskEditor}
              formType={'editTask'}
              taskId={id}
              initialValues={{ name, description, priority }}
            />
          ) : null}
          <S.MoreContainer onClick={this.openCloseTaskSettings}>
            <ReactSVG src={more} />
          </S.MoreContainer>
        </S.EditTaskContainer>
      </S.Container>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTask: id => dispatch(deleteTask(id)),
    completeTask: id => dispatch(completeTask(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainInfo)
