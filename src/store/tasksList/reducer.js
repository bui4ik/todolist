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
        activeTasks: {...state.activeTasks, payload},
      }
    case actions.ADD_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      }
    default:
      return state
  }
}
