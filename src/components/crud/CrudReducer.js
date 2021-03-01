import { FETCH_CRUD, FETCH_CRUD_SUCCESS, FETCH_CRUD_FAILS, DELETE_CRUD_FAILS, DELETE_CRUD_SUCCESS, DELETE_CRUD, CREATE_CRUD_FAILS, CREATE_CRUD_SUCCESS, CREATE_CRUD, UPDATE_CRUD_FAILS, UPDATE_CRUD_SUCCESS, UPDATE_CRUD } from './CrudAuctionType'
const CrudReducer = (
  state = {
    crudData: {
      fetching: false,
      data: [
        { id: 1, name: "Jeya1", gender: "Female" },
        { id: 2, name: "Jeya2", gender: "Female" },
        { id: 3, name: "Jeya3", gender: "Female" },
        { id: 4, name: "Sivam1", gender: "Male" },
        { id: 5, name: "Sivam2", gender: "Male" },
        { id: 6, name: "Sivam3", gender: "Male" }
      ],
      error: { status: false, message: null },
    },
  }, action,
) => {
  switch (action.type) {
    case FETCH_CRUD:
      return {
        ...state,
        crudData: {
          fetching: true,
          error: { status: false, message: null },
          data: [],
        },
      };

    case FETCH_CRUD_SUCCESS:
      return {
        ...state,
        crudData: {
          ...state.crudData,
          fetching: false,
          data: state.crudData.data,
        },
      };
    case FETCH_CRUD_FAILS:
      return {
        ...state,
        crudData: {
          fetching: false,
          error: { status: true, message: action.payload },
          data: [],
        },
      };

    case DELETE_CRUD:
      return {
        ...state,
        crudData: {
          fetching: true,
          error: { status: false, message: null },
          data: [],
        },
      };
    case DELETE_CRUD_SUCCESS:
      return {
        ...state,
        crudData: {
          ...state.crudData,
          fetching: false,
          data: state.crudData.data.filter(data => data.id !== action.payload),
        },
      };
    case DELETE_CRUD_FAILS:
      return {
        ...state,
        crudData: {
          fetching: false,
          error: { status: true, message: action.payload },
          data: [],
        },
      };

    case CREATE_CRUD:
      return {
        ...state,
        crudData: {
          fetching: true,
          error: { status: false, message: null },
          data: [],
        },
      };
    case CREATE_CRUD_SUCCESS:
      return {
        ...state,
        crudData: {
          ...state.crudData,
          fetching: false,
          data: state.crudData.data.concat(action.payload),
        },
      };
    case CREATE_CRUD_FAILS:
      return {
        ...state,
        crudData: {
          fetching: false,
          error: { status: true, message: action.payload },
          data: [],
        },
      };

    case UPDATE_CRUD:
      return {
        ...state,
        crudData: {
          fetching: true,
          error: { status: false, message: null },
          data: [],
        },
      };
    case UPDATE_CRUD_SUCCESS:
      return {
        ...state,
        crudData: {
          ...state.crudData,
          fetching: false,
          data: state.crudData.data.map(obj => {
            if (obj.id == action.payload.id) {
              return action.payload
            } else {
              return obj
            } 
          }),
        },
      };
    case UPDATE_CRUD_FAILS:
      return {
        ...state,
        crudData: {
          fetching: false,
          error: { status: true, message: action.payload },
          data: [],
        },
      };

    default:
      return state;
  }
}
export { CrudReducer };