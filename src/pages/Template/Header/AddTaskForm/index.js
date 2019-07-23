import React from 'react'
import { Form, Field } from 'react-final-form'
import * as S from './styles'
import * as selectors from 'store/tasksList/selectors'
import { addTask, editTask } from 'store/tasksList/thunk'
import { connect } from 'react-redux'

class AddTaskForm extends React.Component {
  onSubmit = values => {
    const { tasks, exitForm, addTask, formType, editTask, taskId } = this.props
    if (formType === 'createTask') {
      const id = tasks.reduce((max, task) => (task.id > max ? task.id : max), tasks[0].id) + 1

      const creationDate = Date.now()
      const newTask = { ...values, id, creationDate, isCompleted: false }
      addTask(newTask)
    } else if (formType === 'editTask') {
      editTask({...values, id: taskId})
    }

    exitForm()
  }

  render() {
    const { exitForm, formName, initialValues } = this.props
    return (
      <S.FormContainer>
        <S.Header>
          <S.Title>{formName}</S.Title>
          <S.ExitButton onClick={exitForm}>✖</S.ExitButton>
        </S.Header>
        <Form
          onSubmit={this.onSubmit}
          initialValues={initialValues}
          render={({ handleSubmit, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <S.TaskName>
                <label>Title</label>
                <Field name="name" component="input" type="text" required />
              </S.TaskName>
              <S.TaskName>
                <label>Description</label>
                <Field name="description" component="textarea" required />
              </S.TaskName>
              <S.Priority>
                <S.PriorityLabel>Priority</S.PriorityLabel>
                <div>
                  <S.PriorityItem>
                    <Field name="priority" component="input" type="radio" value="Low" required />{' '}
                    Low
                  </S.PriorityItem>
                  <S.PriorityItem>
                    <Field name="priority" component="input" type="radio" value="Medium" required />{' '}
                    Medium
                  </S.PriorityItem>
                  <S.PriorityItem>
                    <Field name="priority" component="input" type="radio" value="High" required />{' '}
                    High
                  </S.PriorityItem>
                </div>
              </S.Priority>
              <div className="buttons">
                <S.Button type="submit" disabled={submitting || pristine}>
                  Add Task
                </S.Button>
              </div>
            </form>
          )}
        />
      </S.FormContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: selectors.tasksSelector(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTask: data => dispatch(addTask(data)),
    editTask: info =>dispatch(editTask(info))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTaskForm)
