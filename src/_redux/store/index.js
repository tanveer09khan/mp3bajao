import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import AllReducer from  '../reducers/index';
// import { createLogger } from 'redux-logger';
// const loggerMiddleware = createLogger();

export const store = createStore(AllReducer,
    applyMiddleware(thunkMiddleware)
    //  loggerMiddleware
);
