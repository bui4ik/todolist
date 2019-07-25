import React from 'react'
import { Form } from 'react-final-form'
import * as selectors from 'store/tasksList/selectors'
import * as actions from 'store/tasksList/thunk'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as S from './styles'
import TitleInput from './FormItems/titleInput'
import DescriptionTextArea from './FormItems/decsriptionTextArea'
import PriorityRadioButtons from './FormItems/priorityRadioButtons'
import ColorsRadioButtons from './FormItems/colorsRadioButtons'

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
        values.badgeColor = '#ba68c8'
      }

      const creationDate = Date.now()
      const newTask = { ...values, id, creationDate, isCompleted: false }
      addTask(newTask)
    } else if (formType === 'editTask') {
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
              <TitleInput />
              <DescriptionTextArea />
              <PriorityRadioButtons />
              <ColorsRadioButtons />
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
