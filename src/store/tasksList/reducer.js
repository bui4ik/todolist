import { initialState } from './selectors'
import * as actions from './actions'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.ADD_TASK_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actions.ADD_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tasks: [...state.tasks, payload.newTask],
      }
    case actions.ADD_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      }
    case actions.DELETE_TASK_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actions.DELETE_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tasks: state.tasks.filter(task => task.id !== +payload.id),
      }
    case actions.DELETE_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      }
    case actions.COMPLETE_TASK_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actions.COMPLETE_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tasks: state.tasks.map(task =>
          task.id === +payload.id ? { ...task, isCompleted: !task.isCompleted } : task,
        ),
      }
    case actions.COMPLETE_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      }
    case actions.EDIT_TASK_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actions.EDIT_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tasks: state.tasks.map(task =>
          task.id === +payload.id
            ? {
                ...task,
                name: payload.name,
                description: payload.description,
                priority: payload.priority,
                badgeColor: payload.badgeColor
              }
            : task,
        ),
      }
    case actions.EDIT_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      }
    case actions.SET_PRIORITY_SORT_TYPE:
      return {
        ...state,
        prioritySortType: payload.priorityType
      }
    case actions.SET_DATE_SORT_TYPE:
      return {
        ...state,
        dateSortType: state.dateSortType === 'ASC' ? 'DESC' : 'ASC'
      }
    case actions.SET_COLOR_SCHEME:
      return {
        ...state,
        colorScheme: payload.colorSchemeType
      }
    case actions.SET_VIEW_TYPE:
      return {
        ...state,
        viewType: payload.viewType
      }
    default:
      return state
  }
}
