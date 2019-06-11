import * as types from '../types'

const initState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
}

export const addProduct = (state = initState, action) => {
  switch (action.type) {
    case types.CREATE_PRODUCT_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case types.CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        data: action.payload,
      };
    case types.CREATE_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
      };
    default:
      return state;
  }
};

export const deleteProduct = (state = initState, action) => {
  switch (action.type) {
    case types.DELETE_PRODUCT_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case types.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        data: action.payload,
      };
    case types.DELETE_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
      };
    default:
      return state;
  }
};

export const openModal = (state = { isOpen: false, id: '' }, action) => {
  switch (action.type) {
    case types.OPEN_OR_CLOSE_MODAL:
      return {
        ...state,
        isOpen: action.isOpen,
        id: action.id,
      }
    default:
      return state;
  }
};
