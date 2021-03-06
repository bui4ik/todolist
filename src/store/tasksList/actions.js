// tasks
export const ADD_TASK_REQUEST = 'ADD_TASK_REQUEST'
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS'
export const ADD_TASK_FAILURE = 'ADD_TASK_FAILURE'

export const DELETE_TASK_REQUEST = 'DELETE_TASK_REQUEST'
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS'
export const DELETE_TASK_FAILURE = 'DELETE_TASK_FAILURE'

export const COMPLETE_TASK_REQUEST = 'COMPLETE_TASK_REQUEST'
export const COMPLETE_TASK_SUCCESS = 'COMPLETE_TASK_SUCCESS'
export const COMPLETE_TASK_FAILURE = 'COMPLETE_TASK_FAILURE'

export const EDIT_TASK_REQUEST = 'EDIT_TASK_REQUEST'
export const EDIT_TASK_SUCCESS = 'EDIT_TASK_SUCCESS'
export const EDIT_TASK_FAILURE = 'EDIT_TASK_FAILURE'

export const SET_PRIORITY_SORT_TYPE = 'SET_PRIORITY_SORT_TYPE'
export const SET_DATE_SORT_TYPE = 'SET_DATE_SORT_TYPE'
export const SET_COLOR_SCHEME = 'SET_COLOR_SCHEME'
export const SET_VIEW_TYPE = 'SET_VIEW_TYPE'

//  tasks action creators
export const addTaskRequest = () => ({
  type: ADD_TASK_REQUEST,
})

export const addTaskSuccess = newTask => ({
  type: ADD_TASK_SUCCESS,
  payload: { newTask },
})

export const addTaskFailure = error => ({
  type: ADD_TASK_FAILURE,
  payload: { error },
})

export const deleteTaskRequest = () => ({
  type: DELETE_TASK_REQUEST,
})

export const deleteTaskSuccess = id => ({
  type: DELETE_TASK_SUCCESS,
  payload: { id },
})

export const deleteTaskFailure = error => ({
  type: DELETE_TASK_FAILURE,
  payload: { error },
})

export const completeTaskRequest = () => ({
  type: COMPLETE_TASK_REQUEST,
})

export const completeTaskSuccess = id => ({
  type: COMPLETE_TASK_SUCCESS,
  payload: { id },
})

export const completeTaskFailure = error => ({
  type: COMPLETE_TASK_FAILURE,
  payload: { error },
})

export const editTaskRequest = () => ({
  type: EDIT_TASK_REQUEST,
})

export const editTaskSuccess = ({ id, name, description, priority, badgeColor }) => ({
  type: EDIT_TASK_SUCCESS,
  payload: { id, name, description, priority, badgeColor },
})

export const editTaskFailure = error => ({
  type: EDIT_TASK_FAILURE,
  payload: { error },
})

export const setPrioritySortType = priorityType => ({
  type: SET_PRIORITY_SORT_TYPE,
  payload: { priorityType },
})

export const setDateSortType = () => ({
  type: SET_DATE_SORT_TYPE,
})

export const setColorScheme = colorSchemeType => ({
  type: SET_COLOR_SCHEME,
  payload: { colorSchemeType },
})

export const setViewType = viewType => ({
  type: SET_VIEW_TYPE,
  payload: { viewType },
})
