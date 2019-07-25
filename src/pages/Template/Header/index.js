import React from 'react'
import * as S from './styles'
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
    const { addTaskWindow } = this.state
    return (
      <S.Header>
        {addTaskWindow && (
          <AddTaskForm
            exitForm={this.closeAddTaskWindow}
            formName="Create new task"
            formType="createTask"
          />
        )}
        <S.Hamburger>
          <S.HamburgerBar />
          <S.HamburgerBar />
          <S.HamburgerBar />
        </S.Hamburger>
        <S.ButtonsContainer>
          <S.Button onClick={this.openAddTaskWindow}>Add new task</S.Button>
          <S.UserPhoto />
        </S.ButtonsContainer>
      </S.Header>
    )
  }
}

export default Header
