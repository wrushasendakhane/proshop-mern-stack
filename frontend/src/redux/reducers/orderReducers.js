import OrderActionTypes from "../actionTypes/orderActionTypes"

const ORDER_CREATE_INITIAL_STATE = {
  loading: false,
  error: null,
  success: false,
  order: null
}
const orderCreateReducer = (state = ORDER_CREATE_INITIAL_STATE, action) => {
  switch (action.type) {
    case OrderActionTypes.ORDER_CREATE_REQUEST:
      return { ...state, loading: true }
    case OrderActionTypes.ORDER_CREATE_SUCCESS:
      return { ...state, loading: false, order: action.payload, success: true }
    case OrderActionTypes.ORDER_CREATE_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

const ORDER_DETAILS_INITIAL_STATE = {
  loading: true,
  error: null,
  success: false,
  orderItems: [],
  shippingAddress: {}
}

const orderDetailsReducer = (state = ORDER_DETAILS_INITIAL_STATE, action) => {
  switch (action.type) {
    case OrderActionTypes.ORDER_DETAILS_REQUEST:
      return { ...state, loading: true }
    case OrderActionTypes.ORDER_DETAILS_SUCCESS:
      return { ...state, loading: false, order: action.payload, success: true }
    case OrderActionTypes.ORDER_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

const ORDER_PAY_INITIAL_STATE = {
  loading: false,
  error: null,
  success: false,
}

const orderPayReducer = (state = ORDER_PAY_INITIAL_STATE, action) => {
  switch (action.type) {
    case OrderActionTypes.ORDER_PAY_REQUEST:
      return { ...state, loading: true }
    case OrderActionTypes.ORDER_PAY_SUCCESS:
      return { ...state, loading: false, success: true }
    case OrderActionTypes.ORDER_PAY_FAIL:
      return { ...state, loading: false, error: action.payload }
    case OrderActionTypes.ORDER_PAY_RESET:
      return {}
    default:
      return state
  }
}

const orderDeliverReducer = (state = ORDER_PAY_INITIAL_STATE, action) => {
  switch (action.type) {
    case OrderActionTypes.ORDER_DELIVER_REQUEST:
      return { ...state, loading: true, error: null }
    case OrderActionTypes.ORDER_DELIVER_SUCCESS:
      return { ...state, loading: false, success: true, error: null }
    case OrderActionTypes.ORDER_DELIVER_FAIL:
      return { ...state, loading: false, error: action.payload }
    case OrderActionTypes.ORDER_DELIVER_RESET:
      return {}
    default:
      return state
  }
}

const orderListMyReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case OrderActionTypes.ORDER_LIST_MY_REQUEST:
      return { ...state, loading: true }
    case OrderActionTypes.ORDER_LIST_MY_SUCCESS:
      return { ...state, loading: false, orders: action.payload }
    case OrderActionTypes.ORDER_LIST_MY_FAIL:
      return { ...state, loading: false, error: action.payload }
    case OrderActionTypes.ORDER_LIST_MY_RESET:
      return { orders: [] }
    default:
      return state
  }
}


const orderListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case OrderActionTypes.ORDER_LIST_REQUEST:
      return { ...state, loading: true, error: null }
    case OrderActionTypes.ORDER_LIST_SUCCESS:
      return { ...state, loading: false, orders: action.payload, error: null }
    case OrderActionTypes.ORDER_LIST_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}





export { orderCreateReducer, orderDetailsReducer, orderPayReducer, orderDeliverReducer, orderListMyReducer, orderListReducer }