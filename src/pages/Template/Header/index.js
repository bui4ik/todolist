import React from 'react'
import * as S from './styles'
import { addTask } from 'store/tasksList/thunk'
import { connect } from 'react-redux'
import AddTaskForm from './AddTaskForm'

class Header extends React.Component {
  state = {
    addTaskWindow: false,
  }

  openAddTaskWindow = () => {
    this.setState({ addTaskWindow: true })
  }

  closeAddTaskWindow = () => {
    this.setState({ addTaskWindow: false })
  }

  render() {
    const { addTask } = this.props
    const { addTaskWindow } = this.state
    return (
      <S.Header>
        {addTaskWindow ? (
          <AddTaskForm
            exitForm={this.closeAddTaskWindow}
            addTask={addTask}
            formName={'Create new task'}
            formType={'createTask'}
          />
        ) : null}
        <S.Hamburger>
          <S.HamburgerBar />
          <S.HamburgerBar />
          <S.HamburgerBar />
        </S.Hamburger>
        <S.ButtonsContainer>
          <S.Sort>AZ</S.Sort>
          <S.Button onClick={this.openAddTaskWindow}>+ Add ToDo</S.Button>
          <S.UserPhoto />
        </S.ButtonsContainer>
      </S.Header>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    addTask: data => dispatch(addTask(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)
