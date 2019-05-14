import { form } from '../../source/Datasource'
import * as types from '../types/index'

const initialState = {
  claim: form
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case types.SAVE_CLAIM:
      return {
        ...state,
        claim: action.data
      }
    default:
      return state
  }
};