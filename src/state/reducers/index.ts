import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer
});

export default reducers;

// a type that describes the type of information 
// that is in our store.
export type RootState = ReturnType<typeof reducers>;
