import { createStore } from "redux";
import { counter } from './slices'

let store = createStore({ counter });

export default store