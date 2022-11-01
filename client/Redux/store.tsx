// import { createStore, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import rootReducer from './reducer'




// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

// // The store now has the ability to accept thunk functions in `dispatch`
// const store = createStore(rootReducer, composedEnhancer)
// export default store



// import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from "./reducer";
// import thunk from "redux-thunk";

// const composeEnhancers =  compose;

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk)),
// );

// export default store;