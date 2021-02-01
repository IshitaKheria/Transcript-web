import { applyMiddleware, createStore } from 'redux'
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

// This file will export the main store for the project.

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store