import UserActionTypes from "../actionTypes/userActionTypes"

const USER_INITIAL_STATE = {
  loading: false,
  userInfo: null,
  error: null
}
const userLoginReducer = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.USER_LOGIN_REQUEST:
      return {
        ...state, loading: true
      }
    case UserActionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state, loading: false, userInfo: action.payload
      }
    case UserActionTypes.USER_LOGIN_FAIL:
      return {
        ...state, loading: false, error: action.payload, userInfo: null
      }
    case UserActionTypes.USER_LOGOUT:
      return {
        ...state, loading: false, error: null, userInfo: null
      }
    default:
      return state;
  }
}

const userRegisterReducer = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.USER_REGISTER_REQUEST:
      return {
        ...state, loading: true
      }
    case UserActionTypes.USER_REGISTER_SUCCESS:
      return {
        ...state, loading: false, userInfo: action.payload
      }
    case UserActionTypes.USER_REGISTER_FAIL:
      return {
        ...state, loading: false, error: action.payload, userInfo: null
      }
    default:
      return state;
  }
}

const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case UserActionTypes.USER_DETAILS_REQUEST:
      return {
        ...state, loading: true
      }
    case UserActionTypes.USER_DETAILS_SUCCESS:
      return {
        ...state, loading: false, user: action.payload, error: null
      }
    case UserActionTypes.USER_DETAILS_FAIL:
      return {
        ...state, loading: false, error: action.payload, user: {}
      }
    case UserActionTypes.USER_DETAILS_RESET:
      return {
        user: {}
      }
    default:
      return state;
  }
}

const userUpdateProfileReducer = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.USER_UPDATE_PROFILE_REQUEST:
      return {
        ...state, loading: true
      }
    case UserActionTypes.USER_UPDATE_PROFILE_SUCCESS:
      return {
        ...state, loading: false, userInfo: action.payload, success: true
      }
    case UserActionTypes.USER_UPDATE_PROFILE_FAIL:
      return {
        ...state, loading: false, error: action.payload, user: null
      }
    case UserActionTypes.USER_UPDATE_PROFILE_RESET:
      return {}
    default:
      return state;
  }
}

const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case UserActionTypes.USER_LIST_REQUEST:
      return {
        ...state, loading: true
      }
    case UserActionTypes.USER_LIST_SUCCESS:
      return {
        ...state, loading: false, users: action.payload
      }
    case UserActionTypes.USER_LIST_FAIL:
      return {
        ...state, loading: false, error: action.payload
      }
    case UserActionTypes.USER_LIST_RESET:
      return {
        ...state, users: []
      }
    default:
      return state;
  }
}

const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActionTypes.USER_DELETE_REQUEST:
      return {
        ...state, loading: true
      }
    case UserActionTypes.USER_DELETE_SUCCESS:
      return {
        ...state, loading: false, success: true
      }
    case UserActionTypes.USER_DELETE_FAIL:
      return {
        ...state, loading: false, error: action.payload
      }
    default:
      return state;
  }
}

const userUpdateReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case UserActionTypes.USER_UPDATE_REQUEST:
      return {
        ...state, loading: true
      }
    case UserActionTypes.USER_UPDATE_SUCCESS:
      return {
        ...state, loading: false, success: true, error: null
      }
    case UserActionTypes.USER_UPDATE_FAIL:
      return {
        ...state, loading: false, error: action.payload
      }
    case UserActionTypes.USER_UPDATE_RESET:
      return {
        user: {}
      }
    default:
      return state;
  }
}
export { userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer, userListReducer, userDeleteReducer, userUpdateReducer }