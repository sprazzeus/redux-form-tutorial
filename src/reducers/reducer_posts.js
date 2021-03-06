import _ from 'lodash'
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions'

// set default state as empty object
export default function (state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload) // delete action's payload is post id. omit removes it from state object
  case FETCH_POST:
    // const post = action.payload.data
    // const newState = { ...state }
    // newState[post.id] = poste
    // return newState

    return { ...state, [action.payload.data.id]: action.payload.data } // key interpolation
  case FETCH_POSTS:
    return _.mapKeys(action.payload.data, 'id')
  default:
    return state
  }
}
