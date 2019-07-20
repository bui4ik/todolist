import * as actions from './actions'

export const addTask = (data) => async dispatch => {
  dispatch(actions.addTaskRequest())
  try {
    dispatch(actions.addTaskSuccess(data))
  } catch (e) {
    dispatch(actions.addTaskFailure(e))
    console.log(e);
  }
}
