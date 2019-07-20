// active tasks
export const ADD_TASK_REQUEST = 'ADD_TASK_REQUEST'
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS'
export const ADD_TASK_FAILURE = 'ADD_TASK_FAILURE'

//  active tasks action creators
export const addTaskRequest = () => ({
  type: ADD_TASK_REQUEST,
})
export const addTaskSuccess = (task) => ({
  type: ADD_TASK_SUCCESS,
  payload: { task },
})
export const addTaskFailure = error => ({
  type: ADD_TASK_FAILURE,
  payload: { error },
})
