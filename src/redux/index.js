import { CrudReducer } from '../components/crud/CrudReducer';

const { combineReducers } = require('redux');

export const rootReducer = combineReducers({
  crud: CrudReducer,
});

export default rootReducer;