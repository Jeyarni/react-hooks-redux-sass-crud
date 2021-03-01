import { CREATE_CRUD_SUCCESS, DELETE_CRUD_SUCCESS, FETCH_CRUD, FETCH_CRUD_FAILS, FETCH_CRUD_SUCCESS, UPDATE_CRUD_SUCCESS } from "./CrudAuctionType";

const getCRUD = (data) => (dispatch) => {
  dispatch({
    type:FETCH_CRUD_SUCCESS,
    payload:data,
  })
}

const deleteCRUD = (id) => (dispatch) => {
  dispatch({
    type:DELETE_CRUD_SUCCESS,
    payload:id,
  })
}

const addCRUD = (data) => (dispatch) => {
  dispatch({
    type:CREATE_CRUD_SUCCESS,
    payload:data,
  })
}

const updateCRUD = (data) => (dispatch) => {
  dispatch({
    type:UPDATE_CRUD_SUCCESS,
    payload:data,
  })
}

export {getCRUD, deleteCRUD, addCRUD, updateCRUD}