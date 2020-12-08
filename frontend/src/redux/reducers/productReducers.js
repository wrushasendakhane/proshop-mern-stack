import ProductActionTypes from "../actionTypes/productActionTypes"

const PRODUCT_LIST_INITIAL_STATE = {
  loading: false,
  products: [],
  error: null
}
const productListReducer = (state = PRODUCT_LIST_INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_LIST_REQUEST:
      return {
        ...state, loading: true
      }
    case ProductActionTypes.PRODUCT_LIST_SUCCESS:
      const { products, pages, page } = action.payload
      return {
        ...state, loading: false, products, pages, page
      }
    case ProductActionTypes.PRODUCT_LIST_FAIL:
      return {
        ...state, loading: false, error: action.payload
      }
    default:
      return state;
  }
}

const PRODUCT_DETAILS_INITIAL_STATE = {
  loading: false,
  product: { reviews: [] },
  error: null
}

const productDetailsReducer = (state = PRODUCT_DETAILS_INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_DETAILS_REQUEST:
      return {
        ...state, loading: true
      }
    case ProductActionTypes.PRODUCT_DETAILS_SUCCESS:
      return {
        ...state, loading: false, product: action.payload
      }
    case ProductActionTypes.PRODUCT_DETAILS_FAIL:
      return {
        ...state, loading: false, error: action.payload
      }
    default:
      return state;
  }
}

const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_DELETE_REQUEST:
      return {
        ...state, loading: true
      }
    case ProductActionTypes.PRODUCT_DELETE_SUCCESS:
      return {
        ...state, loading: false, success: true
      }
    case ProductActionTypes.PRODUCT_DELETE_FAIL:
      return {
        ...state, loading: false, error: action.payload
      }
    default:
      return state;
  }
}

const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_CREATE_REQUEST:
      return {
        ...state, loading: true
      }
    case ProductActionTypes.PRODUCT_CREATE_SUCCESS:
      return {
        ...state, loading: false, success: true, product: action.payload
      }
    case ProductActionTypes.PRODUCT_CREATE_FAIL:
      return {
        ...state, loading: false, error: action.payload
      }
    case ProductActionTypes.PRODUCT_CREATE_RESET:
      return {
      }
    default:
      return state;
  }
}


const productUpdateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_UPDATE_REQUEST:
      return {
        ...state, loading: true
      }
    case ProductActionTypes.PRODUCT_UPDATE_SUCCESS:
      return {
        ...state, loading: false, success: true, product: action.payload
      }
    case ProductActionTypes.PRODUCT_UPDATE_FAIL:
      return {
        ...state, loading: false, error: action.payload
      }
    case ProductActionTypes.PRODUCT_UPDATE_RESET:
      return {
        product: {}
      }
    default:
      return state;
  }
}

const productReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_CREATE_REVIEW_REQUEST:
      return {
        ...state, loading: true
      }
    case ProductActionTypes.PRODUCT_CREATE_REVIEW_SUCCESS:
      return {
        ...state, loading: false, success: true
      }
    case ProductActionTypes.PRODUCT_CREATE_REVIEW_FAIL:
      return {
        ...state, loading: false, error: action.payload
      }
    case ProductActionTypes.PRODUCT_CREATE_REVIEW_RESET:
      return {
      }
    default:
      return state;
  }
}

const productTopRatedReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_TOP_REQUEST:
      return {
        ...state, loading: true, products: []
      }
    case ProductActionTypes.PRODUCT_TOP_SUCCESS:
      return {
        ...state, loading: false, products: action.payload
      }
    case ProductActionTypes.PRODUCT_TOP_FAIL:
      return {
        ...state, loading: false, error: action.payload
      }
    default:
      return state;
  }
}
export { productListReducer, productDetailsReducer, productDeleteReducer, productCreateReducer, productUpdateReducer, productReviewCreateReducer, productTopRatedReducer }