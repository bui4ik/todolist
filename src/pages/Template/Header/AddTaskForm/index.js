import React from 'react'
import { Form, Field } from 'react-final-form'
import * as S from './styles'
import * as selectors from '../../../../store/tasksList/selectors'
import { addTask } from '../../../../store/tasksList/thunk'
import { connect } from 'react-redux'

class AddTaskForm extends React.Component{

  onSubmit = values => {
    const { tasks } = this.props
    const maxId = tasks.reduce(
      (max, task) => (task.id > max ? task.id : max),
      tasks[0].id
    );

    const date = Date.now().toLocaleString()
    console.log(values, maxId, date);
  }

  render() {
    const {closeAddTaskWindow} = this.props
    return(
      <S.FormContainer>
        <S.Header>
          <S.Title>Create new task</S.Title>
          <S.ExitButton onClick={closeAddTaskWindow}>✖</S.ExitButton>
        </S.Header>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit, form, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <S.TaskName>
                <label>Title</label>
                <Field
                  name="name"
                  component="input"
                  type="text"
                />
              </S.TaskName>
              <S.TaskName>
                <label>Description</label>
                <Field name="description" component="textarea"/>
              </S.TaskName>
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTaskForm)
