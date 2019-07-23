import * as actions from './actions'

export const addTask = (newTask) => async dispatch => {
  dispatch(actions.addTaskRequest())
  try {
    dispatch(actions.addTaskSuccess(newTask))
  } catch (e) {
    dispatch(actions.addTaskFailure(e))
    console.log(e);
  }
}

export const deleteTask = (id) => async dispatch => {
  dispatch(actions.deleteTaskRequest())
  try {
    dispatch(actions.deleteTaskSuccess(id))
  } catch (e) {
    dispatch(actions.deleteTaskFailure(e))
    console.log(e);
  }
}

export const completeTask = (id) => async dispatch => {
  dispatch(actions.completeTaskRequest())
  try {
    dispatch(actions.completeTaskSuccess(id))
  } catch (e) {
    dispatch(actions.completeTaskFailure(e))
    console.log(e);
  }
}

export const editTask = (info) => async dispatch => {
  dispatch(actions.editTaskRequest())
  try {
    dispatch(actions.editTaskSuccess(info))
  } catch (e) {
    dispatch(actions.editTaskFailure(e))
    console.log(e);
  }
}


