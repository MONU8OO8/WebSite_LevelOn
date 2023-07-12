import { createStore } from 'redux'
import {todoReducer} from './reducers/reducers'


// Create store
const store = createStore(todoReducer)

export default store