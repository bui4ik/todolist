import React from 'react'
import { Form, Field } from 'react-final-form'
import * as selectors from 'store/tasksList/selectors'
import * as actions from 'store/tasksList/thunk'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as S from './styles'

class AddTaskForm extends React.Component {
  onSubmit = values => {
    const {
      tasks,
      exitForm,
      formType,
      taskId,
      actions: { addTask, editTask },
    } = this.props
    if (formType === 'createTask') {
      const id = tasks.reduce((max, task) => (task.id > max ? task.id : max), tasks[0].id) + 1

      if (!values.badgeColor) {
        values.badgeColor = '#ba68c8';
      }

      const creationDate = Date.now()
      const newTask = { ...values, id, creationDate, isCompleted: false }
      addTask(newTask)
    } else if (formType === 'editTask'){
      editTask({ ...values, id: taskId })
    }

    exitForm()
  }

  render() {
    const { exitForm, formName, initialValues, formType } = this.props
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
                <S.FieldInput name="name" component="input" type="text" required />
              </S.TaskName>
              <S.TaskName>
                <label>Description</label>
                <S.FieldInput name="description" component="textarea" required />
              </S.TaskName>
              <S.Priority>
                <S.PriorityLabel>Priority</S.PriorityLabel>
                <div>
                  <S.PriorityItem priority={'Low'}>
                    <Field name="priority" component="input" type="radio" value="Low" required />{' '}
                    Low
                  </S.PriorityItem>
                  <S.PriorityItem priority={'Medium'}>
                    <Field name="priority" component="input" type="radio" value="Medium" required />{' '}
                    Medium
                  </S.PriorityItem>
                  <S.PriorityItem priority={'High'}>
                    <Field name="priority" component="input" type="radio" value="High" required />{' '}
                    High
                  </S.PriorityItem>
                </div>
              </S.Priority>
              <S.Priority>
                <S.PriorityLabel>Select Color</S.PriorityLabel>
                <Field name="badgeColor" component="select">
                  <option />
                  <option value="#1da1f2">💙 Blue</option>
                  <option value="#ffad1f">💛 Yellow</option>
                  <option value="#e0245e">💗 Pink</option>
                  <option value="#e0245e">💜 Purple</option>
                  <option value="#f45d22">🧡 Orange</option>
                  <option value="#17bf63">💚 Green</option>
                </Field>
              </S.Priority>
              <S.Button type="submit" disabled={submitting || pristine}>
                {formType === 'createTask' ? 'Add task' : 'Save changes'}
              </S.Button>
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

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      addTask: actions.addTask,
      editTask: actions.editTask,
    },
    dispatch,
  ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTaskForm)
